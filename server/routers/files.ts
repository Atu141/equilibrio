import { z } from "zod";
import { protectedProcedure, router } from "../_core/trpc";
import { storagePut, storageGet } from "../storage";
import { createFile, getUserFiles, deleteFile, getFileById } from "../db";
import { TRPCError } from "@trpc/server";

export const filesRouter = router({
  // Upload de arquivo
  upload: protectedProcedure
    .input(
      z.object({
        fileName: z.string().min(1),
        fileData: z.instanceof(Buffer),
        mimeType: z.string(),
        description: z.string().optional(),
        category: z.enum(["general", "portfolio", "other"]).default("general"),
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        // Gerar chave única para o arquivo
        const timestamp = Date.now();
        const randomSuffix = Math.random().toString(36).substring(7);
        const fileKey = `files/${ctx.user.id}/${timestamp}-${randomSuffix}-${input.fileName}`;

        // Upload para S3
        const { url } = await storagePut(fileKey, input.fileData, input.mimeType);

        // Salvar metadados no banco de dados
        const result = await createFile({
          userId: ctx.user.id,
          fileName: input.fileName,
          fileKey,
          fileUrl: url,
          mimeType: input.mimeType,
          fileSize: input.fileData.length,
          description: input.description,
          category: input.category,
        });

         return {
          success: true,
          fileName: input.fileName,
          fileUrl: url,
          fileSize: input.fileData.length,
        };
      } catch (error) {
        console.error("[Files] Upload error:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Falha ao fazer upload do arquivo",
        });
      }
    }),

  // Listar arquivos do usuário
  list: protectedProcedure.query(async ({ ctx }) => {
    try {
      const userFiles = await getUserFiles(ctx.user.id);
      return userFiles;
    } catch (error) {
      console.error("[Files] List error:", error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Falha ao listar arquivos",
      });
    }
  }),

  // Obter arquivo por ID
  getById: protectedProcedure
    .input(z.object({ fileId: z.number() }))
    .query(async ({ input, ctx }) => {
      try {
        const file = await getFileById(input.fileId);

        if (!file) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Arquivo não encontrado",
          });
        }

        // Verificar se o arquivo pertence ao usuário
        if (file.userId !== ctx.user.id) {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "Você não tem permissão para acessar este arquivo",
          });
        }

        return file;
      } catch (error) {
        if (error instanceof TRPCError) throw error;
        console.error("[Files] GetById error:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Falha ao obter arquivo",
        });
      }
    }),

  // Deletar arquivo
  delete: protectedProcedure
    .input(z.object({ fileId: z.number() }))
    .mutation(async ({ input, ctx }) => {
      try {
        const file = await getFileById(input.fileId);

        if (!file) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Arquivo não encontrado",
          });
        }

        // Verificar se o arquivo pertence ao usuário
        if (file.userId !== ctx.user.id) {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "Você não tem permissão para deletar este arquivo",
          });
        }

        // Deletar do banco de dados
        await deleteFile(input.fileId);

        return {
          success: true,
          message: "Arquivo deletado com sucesso",
        };
      } catch (error) {
        if (error instanceof TRPCError) throw error;
        console.error("[Files] Delete error:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Falha ao deletar arquivo",
        });
      }
    }),

  // Obter URL pública do arquivo
  getPublicUrl: protectedProcedure
    .input(z.object({ fileId: z.number() }))
    .query(async ({ input, ctx }) => {
      try {
        const file = await getFileById(input.fileId);

        if (!file) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Arquivo não encontrado",
          });
        }

        // Verificar se o arquivo pertence ao usuário
        if (file.userId !== ctx.user.id) {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "Você não tem permissão para acessar este arquivo",
          });
        }

        return {
          fileUrl: file.fileUrl,
          fileName: file.fileName,
          mimeType: file.mimeType,
        };
      } catch (error) {
        if (error instanceof TRPCError) throw error;
        console.error("[Files] GetPublicUrl error:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Falha ao obter URL do arquivo",
        });
      }
    }),
});
