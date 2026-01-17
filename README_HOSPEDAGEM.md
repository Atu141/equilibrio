# Serralheria e Empreiteira Equilíbrio - Guia de Hospedagem

## 📋 Sobre Este Projeto

Este é um site full-stack (React + Express + MySQL) para a empresa "Serralheria e Empreiteira Equilíbrio". O projeto inclui:

- **Frontend:** React 19 + TypeScript + Tailwind CSS
- **Backend:** Express.js + tRPC
- **Banco de Dados:** MySQL com Drizzle ORM
- **Autenticação:** OAuth integrada
- **Storage:** S3 para upload de arquivos

## 🚀 Opções de Hospedagem

### Opção 1: Render (Recomendado para iniciantes)

1. Acesse https://render.com e crie uma conta
2. Clique em "New +" e selecione "Web Service"
3. Conecte seu repositório GitHub (ou faça upload dos arquivos)
4. Configure as variáveis de ambiente:
   ```
   DATABASE_URL=mysql://user:password@host/database
   JWT_SECRET=sua_chave_secreta_aqui
   NODE_ENV=production
   ```
5. Clique em "Deploy"

**Tempo de deploy:** ~2-3 minutos
**Custo:** Gratuito (com limitações) ou $7+/mês

### Opção 2: Railway

1. Acesse https://railway.app
2. Crie um novo projeto
3. Conecte seu repositório ou faça upload dos arquivos
4. Configure o banco de dados MySQL
5. Defina as variáveis de ambiente
6. Deploy automático

**Tempo de deploy:** ~2-3 minutos
**Custo:** $5/mês (créditos iniciais)

### Opção 3: Vercel (Apenas Frontend - Requer Backend Separado)

Se você quiser apenas o frontend estático:
1. Acesse https://vercel.com
2. Importe o projeto
3. Vercel fará o build automaticamente
4. Configure as variáveis de ambiente para apontar para seu backend

**Nota:** Vercel é ideal para frontend estático. Para o backend, use Render ou Railway.

### Opção 4: VPS Próprio (DigitalOcean, Linode, AWS)

1. Crie uma instância Linux (Ubuntu 22.04)
2. Instale Node.js, MySQL e Nginx
3. Faça upload dos arquivos do projeto
4. Execute:
   ```bash
   npm install
   npm run build
   npm start
   ```
5. Configure Nginx como reverse proxy

**Tempo de setup:** ~30-60 minutos
**Custo:** $5-20+/mês

## 📦 Estrutura de Arquivos

```
project/
├── dist/                    # Build compilado (pronto para produção)
│   ├── index.js            # Servidor Node.js compilado
│   └── public/             # Frontend compilado
├── public/                 # Assets estáticos (imagens, fontes, etc.)
├── drizzle/                # Migrações do banco de dados
├── package.json            # Dependências do projeto
├── pnpm-lock.yaml          # Lock file das dependências
├── drizzle.config.ts       # Configuração do banco de dados
├── tsconfig.json           # Configuração TypeScript
└── vite.config.ts          # Configuração Vite
```

## 🔧 Variáveis de Ambiente Necessárias

Crie um arquivo `.env` com as seguintes variáveis:

```env
# Banco de Dados
DATABASE_URL=mysql://user:password@localhost:3306/database_name

# Segurança
JWT_SECRET=sua_chave_secreta_muito_longa_e_aleatoria

# Node.js
NODE_ENV=production
PORT=3000

# OAuth (Opcional - se usar autenticação)
VITE_OAUTH_PORTAL_URL=https://seu-oauth-provider.com
OAUTH_SERVER_URL=https://seu-oauth-provider.com
VITE_APP_ID=seu_app_id

# S3/Storage (Opcional - se usar upload de arquivos)
AWS_ACCESS_KEY_ID=sua_chave_aqui
AWS_SECRET_ACCESS_KEY=sua_chave_secreta_aqui
AWS_REGION=us-east-1
AWS_S3_BUCKET=seu_bucket_name
```

## 📥 Instalação Local (Para Testes)

1. **Instale as dependências:**
   ```bash
   npm install
   # ou
   pnpm install
   ```

2. **Configure o banco de dados:**
   ```bash
   npm run db:push
   ```

3. **Inicie o servidor em desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse em:** http://localhost:3000

## 🏗️ Build para Produção

```bash
npm run build
```

Isso vai:
1. Compilar o frontend React
2. Compilar o servidor Express
3. Gerar os arquivos em `dist/`

## ▶️ Iniciar em Produção

```bash
npm start
```

Ou, se estiver usando o arquivo compilado:
```bash
node dist/index.js
```

## 🔐 Checklist de Segurança Antes de Publicar

- [ ] Defina `NODE_ENV=production`
- [ ] Use uma `JWT_SECRET` forte e aleatória
- [ ] Configure HTTPS/SSL no seu servidor
- [ ] Defina variáveis de ambiente seguras (não no código)
- [ ] Configure CORS corretamente
- [ ] Faça backup do banco de dados regularmente
- [ ] Configure firewall para aceitar apenas portas necessárias
- [ ] Use senhas fortes para o banco de dados

## 🐛 Troubleshooting

### Erro: "Cannot find module"
- Execute `npm install` novamente
- Verifique se todas as dependências estão instaladas

### Erro: "Database connection refused"
- Verifique a `DATABASE_URL`
- Certifique-se de que o MySQL está rodando
- Verifique credenciais de acesso

### Erro: "Port already in use"
- Mude a porta em `.env` (ex: `PORT=3001`)
- Ou encerre o processo usando a porta 3000

### Site carrega mas funcionalidades não funcionam
- Verifique se as variáveis de ambiente estão corretas
- Verifique os logs do servidor: `npm run dev`
- Abra o DevTools do navegador (F12) para ver erros

## 📞 Suporte

Para dúvidas sobre hospedagem:
- **Render:** https://render.com/docs
- **Railway:** https://docs.railway.app
- **DigitalOcean:** https://www.digitalocean.com/docs

## 📝 Notas Importantes

1. **Este é um projeto full-stack** - não é apenas HTML/CSS/JS estático
2. **Requer Node.js 18+** para rodar
3. **Requer MySQL 8.0+** ou compatível
4. **O banco de dados precisa ser criado manualmente** ou via migrations
5. **Imagens e assets estão em `/public`** - certifique-se de que estão no servidor

## 🎯 Próximos Passos

1. Escolha uma plataforma de hospedagem
2. Crie uma conta e um novo projeto
3. Configure as variáveis de ambiente
4. Faça upload dos arquivos ou conecte seu repositório
5. Inicie o deploy
6. Teste todas as funcionalidades

Boa sorte! 🚀
