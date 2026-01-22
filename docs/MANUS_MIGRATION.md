# 🔄 Migrando do Manus para Hospedagem Independente

## 📌 Visão Geral

Este guia ajuda a remover dependências do Manus e adaptar o projeto para funcionar de forma independente.

## ⚙️ Dependências do Manus a Remover

### 1. Plugin Vite do Manus
**Arquivo**: `vite.config.ts`

#### Antes (com Manus):
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import manusRuntime from 'vite-plugin-manus-runtime'

export default defineConfig({
  plugins: [react(), manusRuntime()],
})
```

#### Depois (sem Manus):
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
    },
  },
})
```

**Ação**: Remover `vite-plugin-manus-runtime` do `package.json` e `vite.config.ts`

### 2. OAuth do Manus
**Arquivo**: `server/_core/oauth.ts`

Se você quer manter OAuth:
- Use Auth0, Google OAuth, ou GitHub OAuth
- Atualize `server/_core/context.ts`

Se quer remover OAuth:
- Remova autenticação de `server/routers.ts`
- Remova `useAuth()` de componentes React

### 3. API Forge do Manus
**Arquivo**: `server/_core/llm.ts`, `server/_core/imageGeneration.ts`

Se você usa LLM ou geração de imagens:
- Integre OpenAI, Anthropic, ou outro serviço
- Atualize variáveis de ambiente

Se não usa:
- Remova dos routers
- Remova imports dos componentes

### 4. Armazenamento S3 do Manus
**Arquivo**: `server/storage.ts`

#### Opção A: Usar S3 AWS Direto
```typescript
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({ region: process.env.AWS_REGION });

export async function storagePut(key: string, data: Buffer, contentType: string) {
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET,
    Key: key,
    Body: data,
    ContentType: contentType,
  });
  
  await s3Client.send(command);
  return { url: `https://${process.env.AWS_S3_BUCKET}.s3.amazonaws.com/${key}` };
}
```

#### Opção B: Usar Armazenamento Local
```typescript
import fs from 'fs';
import path from 'path';

export async function storagePut(key: string, data: Buffer) {
  const uploadDir = path.join(process.cwd(), 'uploads');
  const filePath = path.join(uploadDir, key);
  
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, data);
  
  return { url: `/uploads/${key}` };
}
```

#### Opção C: Usar Cloudinary, Imgix, ou Similar
```typescript
import axios from 'axios';
import FormData from 'form-data';

export async function storagePut(key: string, data: Buffer) {
  const form = new FormData();
  form.append('file', data, key);
  form.append('upload_preset', process.env.CLOUDINARY_PRESET);
  
  const response = await axios.post(
    `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_NAME}/image/upload`,
    form
  );
  
  return { url: response.data.secure_url };
}
```

### 5. Notificações do Manus
**Arquivo**: `server/_core/notification.ts`

#### Remover Completamente:
```typescript
export async function notifyOwner(options: { title: string; content: string }) {
  // Implementar com seu próprio sistema de notificações
  // Opções: SendGrid, Mailgun, Twilio, Slack, Discord, etc.
  
  console.log(`[NOTIFICATION] ${options.title}: ${options.content}`);
  return true;
}
```

#### Usar Email (SendGrid):
```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function notifyOwner(options: { title: string; content: string }) {
  await sgMail.send({
    to: process.env.OWNER_EMAIL!,
    from: process.env.SENDGRID_FROM_EMAIL!,
    subject: options.title,
    html: options.content,
  });
  return true;
}
```

---

## 🔐 Variáveis de Ambiente para Remover

Se removendo Manus completamente:

```bash
# ❌ Remover
BUILT_IN_FORGE_API_URL
BUILT_IN_FORGE_API_KEY
VITE_FRONTEND_FORGE_API_URL
VITE_FRONTEND_FORGE_API_KEY
VITE_OAUTH_PORTAL_URL
OWNER_OPEN_ID
VITE_ANALYTICS_ENDPOINT
VITE_ANALYTICS_WEBSITE_ID

# ✅ Manter
DATABASE_URL
JWT_SECRET
NODE_ENV
VITE_APP_TITLE
VITE_APP_LOGO
```

---

## 📦 Dependências a Remover do package.json

```bash
npm remove vite-plugin-manus-runtime
```

---

## 🧪 Checklist de Migração

- [ ] Remover `vite-plugin-manus-runtime` de `vite.config.ts`
- [ ] Remover `vite-plugin-manus-runtime` de `package.json`
- [ ] Configurar banco de dados MySQL externo
- [ ] Remover/adaptar OAuth (ou usar alternativa)
- [ ] Remover/adaptar armazenamento S3
- [ ] Remover/adaptar LLM e geração de imagens
- [ ] Remover/adaptar notificações
- [ ] Testar localmente com `pnpm dev`
- [ ] Build com `pnpm build`
- [ ] Testar em produção com `pnpm start`

---

## 🚀 Próximos Passos

1. **Escolher hospedagem**: Railway, Render, VPS, Docker
2. **Configurar banco de dados**: MySQL externo
3. **Configurar variáveis de ambiente**: Copiar de `.env.example`
4. **Deploy**: Seguir guia específico da plataforma
5. **Testar**: Verificar todas as funcionalidades

---

## 📚 Recursos Úteis

- [Railway Docs](https://docs.railway.app)
- [Render Docs](https://render.com/docs)
- [AWS S3 Docs](https://docs.aws.amazon.com/s3/)
- [SendGrid Docs](https://docs.sendgrid.com)
- [Auth0 Docs](https://auth0.com/docs)

---

**Última atualização**: Janeiro 2026
