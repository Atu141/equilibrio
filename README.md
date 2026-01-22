# 🏗️ Serralheria e Empreiteira Equilíbrio - Site Full-Stack

Site institucional profissional para serviços de elétrica, construção civil, pintura e manutenção de estruturas metálicas.

## 🎯 Características

✅ **Frontend React 19** - Interface moderna e responsiva  
✅ **Backend Express + tRPC** - API type-safe  
✅ **Banco de Dados MySQL** - Persistência de dados  
✅ **Autenticação OAuth** - Login seguro  
✅ **Armazenamento S3** - Gerenciamento de arquivos  
✅ **Responsive Design** - Mobile-first  
✅ **Tailwind CSS 4** - Estilização moderna  

## 🚀 Quick Start

### 1. Instalação
```bash
pnpm install
```

### 2. Configurar Ambiente
```bash
cp .env.example .env
# Editar .env com suas configurações
```

### 3. Banco de Dados
```bash
pnpm db:push
```

### 4. Desenvolvimento
```bash
pnpm dev
```

Acesse: http://localhost:3000

### 5. Build para Produção
```bash
pnpm build
pnpm start
```

## 📚 Documentação Completa

Veja **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** para:
- Instalação detalhada
- Configuração de banco de dados
- Deploy em Railway, Render, Docker
- Troubleshooting
- Variáveis de ambiente

## 📁 Estrutura de Pastas

```
├── dist/              # Build compilado (frontend + backend)
├── src/               # Código React
├── server/            # Código Express
├── drizzle/           # Schema do banco de dados
├── shared/            # Código compartilhado
├── package.json       # Dependências
└── .env.example       # Variáveis de ambiente
```

## 🛠️ Scripts Disponíveis

```bash
pnpm dev              # Desenvolvimento
pnpm build            # Build para produção
pnpm start            # Executar em produção
pnpm test             # Rodar testes
pnpm db:push          # Executar migrations
pnpm format           # Formatar código
```

## 🌐 Deploy Recomendado

### Railway (Mais Simples)
1. Conectar repositório GitHub
2. Railway cria banco de dados automaticamente
3. Deploy automático em cada push

[Ver instruções completas](./DEPLOYMENT_GUIDE.md#-railway-recomendado---mais-simples)

### Render
1. Conectar repositório GitHub
2. Adicionar MySQL
3. Configurar variáveis
4. Deploy automático

[Ver instruções completas](./DEPLOYMENT_GUIDE.md#-render)

### Docker (Seu Servidor)
```bash
docker-compose up -d
```

[Ver instruções completas](./DEPLOYMENT_GUIDE.md#-docker-seu-próprio-servidor)

## 🔐 Segurança

- ✅ JWT para autenticação
- ✅ HTTPS em produção
- ✅ Variáveis de ambiente protegidas
- ✅ SQL injection prevention (Drizzle ORM)
- ✅ CORS configurado
- ✅ Rate limiting recomendado

## 📊 Stack Técnico

### Frontend
- React 19
- Vite
- Tailwind CSS 4
- TypeScript
- React Query
- tRPC Client

### Backend
- Express 4
- tRPC 11
- Node.js
- TypeScript

### Banco de Dados
- MySQL 8
- Drizzle ORM
- Migrations automáticas

### DevOps
- Docker
- GitHub Actions (opcional)
- Railway / Render / VPS

## 🎨 Customização

### Mudar Cores
Editar `client/src/index.css` - variáveis CSS

### Mudar Textos
Editar componentes em `client/src/pages/` e `client/src/components/`

### Adicionar Páginas
1. Criar arquivo em `client/src/pages/NovaPagina.tsx`
2. Adicionar rota em `client/src/App.tsx`

### Adicionar Funcionalidades
1. Criar procedure em `server/routers.ts`
2. Usar em componentes com `trpc.*.useQuery/useMutation()`

## 📞 Suporte

Para problemas, verifique:
1. [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md#-troubleshooting) - Troubleshooting
2. Logs: `pnpm dev` ou `docker-compose logs`
3. Variáveis: `cat .env`

## 📄 Licença

MIT

## 🎉 Pronto para Deploy!

Este projeto está pronto para produção. Siga o [guia de deploy](./DEPLOYMENT_GUIDE.md) para colocar online.

---

**Versão**: 1.0.0  
**Última atualização**: Janeiro 2026  
**Status**: ✅ Pronto para Produção
