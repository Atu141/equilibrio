# 🚀 Guia Completo de Deploy - Serralheria e Empreiteira Equilíbrio

## 📋 Índice
1. [Estrutura do Projeto](#estrutura-do-projeto)
2. [Requisitos](#requisitos)
3. [Instalação Local](#instalação-local)
4. [Configuração de Banco de Dados](#configuração-de-banco-de-dados)
5. [Deploy em Diferentes Plataformas](#deploy-em-diferentes-plataformas)
6. [Variáveis de Ambiente](#variáveis-de-ambiente)
7. [Troubleshooting](#troubleshooting)

---

## 📁 Estrutura do Projeto

```
site_servicos_residenciais/
├── dist/                    # Arquivos compilados (frontend + backend)
│   ├── public/             # Frontend estático compilado
│   ├── assets/             # CSS e JS compilados
│   └── index.js            # Servidor Express compilado
├── src/                    # Código-fonte React (frontend)
├── server/                 # Código-fonte Express (backend)
├── drizzle/                # Schema e migrations do banco de dados
├── shared/                 # Código compartilhado entre frontend e backend
├── package.json            # Dependências do projeto
├── vite.config.ts          # Configuração do Vite (build frontend)
├── drizzle.config.ts       # Configuração do Drizzle ORM
└── .env.example            # Exemplo de variáveis de ambiente
```

---

## ✅ Requisitos

### Mínimos
- **Node.js**: v18.0.0 ou superior
- **npm** ou **pnpm**: v10.0.0 ou superior
- **MySQL**: v8.0 ou superior (ou MariaDB 10.5+)

### Recomendado
- **pnpm**: Mais rápido que npm
- **Docker**: Para containerizar a aplicação

---

## 🏠 Instalação Local

### 1. Extrair e Navegar para o Diretório
```bash
unzip site_servicos_residenciais.zip
cd site_servicos_residenciais
```

### 2. Instalar Dependências
```bash
# Com pnpm (recomendado)
pnpm install

# Ou com npm
npm install
```

### 3. Configurar Variáveis de Ambiente
```bash
# Copiar arquivo de exemplo
cp .env.example .env

# Editar .env com suas configurações
nano .env  # ou use seu editor preferido
```

### 4. Configurar Banco de Dados
```bash
# Criar banco de dados MySQL
mysql -u root -p -e "CREATE DATABASE site_servicos CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

# Executar migrations
pnpm db:push
```

### 5. Compilar Projeto
```bash
pnpm build
```

### 6. Executar em Desenvolvimento
```bash
pnpm dev
```

Acesse: http://localhost:3000

### 7. Executar em Produção
```bash
pnpm start
```

---

## 🗄️ Configuração de Banco de Dados

### MySQL Local

#### Criar Banco de Dados
```sql
CREATE DATABASE site_servicos CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'site_user'@'localhost' IDENTIFIED BY 'strong_password_here';
GRANT ALL PRIVILEGES ON site_servicos.* TO 'site_user'@'localhost';
FLUSH PRIVILEGES;
```

#### Variável de Ambiente
```env
DATABASE_URL=mysql://site_user:strong_password_here@localhost:3306/site_servicos
```

### MySQL Remoto (AWS RDS, DigitalOcean, etc.)

```env
DATABASE_URL=mysql://username:password@host:3306/database_name?ssl={"rejectUnauthorized":true}
```

### Executar Migrations
```bash
pnpm db:push
```

---

## 🌐 Deploy em Diferentes Plataformas

### ⚡ Railway (Recomendado - Mais Simples)

#### 1. Criar Conta
- Acesse: https://railway.app
- Faça login com GitHub

#### 2. Criar Novo Projeto
- Clique em "New Project"
- Selecione "Deploy from GitHub"
- Conecte seu repositório

#### 3. Adicionar Banco de Dados
- Clique em "Add Service"
- Selecione "MySQL"
- Railway criará automaticamente

#### 4. Configurar Variáveis de Ambiente
No painel do Railway:
- Vá para "Variables"
- Adicione todas as variáveis do `.env`
- Railway fornecerá `DATABASE_URL` automaticamente

#### 5. Deploy
- Railway fará deploy automaticamente ao fazer push no GitHub
- Acesse a URL gerada

### 🚀 Render

#### 1. Criar Conta
- Acesse: https://render.com
- Faça login com GitHub

#### 2. Criar Web Service
- Clique em "New +"
- Selecione "Web Service"
- Conecte seu repositório GitHub

#### 3. Configurar
```
Name: site-servicos-residenciais
Environment: Node
Build Command: pnpm install && pnpm build
Start Command: pnpm start
```

#### 4. Adicionar Banco de Dados
- Clique em "New +"
- Selecione "MySQL"
- Render fornecerá `DATABASE_URL`

#### 5. Variáveis de Ambiente
- Adicione todas as variáveis do `.env`
- Render fornecerá `DATABASE_URL` automaticamente

#### 6. Deploy
- Clique em "Create Web Service"
- Render fará deploy automaticamente

### 🟦 Vercel (Não Recomendado para Full-Stack)

⚠️ **Nota**: Vercel é melhor para aplicações Next.js. Para Express, use Railway ou Render.

Se quiser usar Vercel:
- Vercel não suporta Express nativamente
- Você precisaria refatorar para Next.js
- Não recomendado para este projeto

### 🐳 Docker (Seu Próprio Servidor)

#### 1. Criar Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --prod

COPY dist ./dist
COPY drizzle ./drizzle

ENV NODE_ENV=production

EXPOSE 3000

CMD ["pnpm", "start"]
```

#### 2. Criar docker-compose.yml
```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: mysql://root:password@db:3306/site_servicos
      NODE_ENV: production
    depends_on:
      - db

  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: site_servicos
    volumes:
      - db_data:/var/lib/mysql
    ports:
      - "3306:3306"

volumes:
  db_data:
```

#### 3. Deploy
```bash
docker-compose up -d
```

---

## 🔐 Variáveis de Ambiente

### Obrigatórias
| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `DATABASE_URL` | String de conexão MySQL | `mysql://user:pass@host/db` |
| `JWT_SECRET` | Chave para assinar tokens JWT | `your-secret-key-min-32-chars` |
| `NODE_ENV` | Ambiente (development/production) | `production` |

### OAuth (Se usar autenticação)
| Variável | Descrição |
|----------|-----------|
| `VITE_APP_ID` | ID da aplicação OAuth |
| `OAUTH_SERVER_URL` | URL do servidor OAuth |
| `VITE_OAUTH_PORTAL_URL` | URL do portal de login |

### Storage (S3)
| Variável | Descrição |
|----------|-----------|
| `BUILT_IN_FORGE_API_URL` | URL da API de armazenamento |
| `BUILT_IN_FORGE_API_KEY` | Chave da API de armazenamento |

### App Config
| Variável | Descrição |
|----------|-----------|
| `VITE_APP_TITLE` | Título da aplicação |
| `VITE_APP_LOGO` | URL do logo |

---

## 🐛 Troubleshooting

### Erro: "Cannot find module 'dotenv'"
```bash
pnpm install
```

### Erro: "ECONNREFUSED - Connection refused"
- Verifique se o MySQL está rodando
- Verifique `DATABASE_URL` em `.env`
- Teste conexão: `mysql -u user -p -h host`

### Erro: "Port 3000 already in use"
```bash
# Mudar porta
PORT=3001 pnpm start

# Ou matar processo na porta 3000
lsof -i :3000
kill -9 <PID>
```

### Erro: "Migration failed"
```bash
# Resetar banco de dados (cuidado!)
mysql -u root -p -e "DROP DATABASE site_servicos; CREATE DATABASE site_servicos;"
pnpm db:push
```

### Erro: "CORS error"
- Verifique se frontend e backend estão na mesma origem
- Em produção, certifique-se que `VITE_FRONTEND_FORGE_API_URL` aponta para o servidor correto

### Erro: "Images not loading"
- Verifique se `client/public/images` foi copiado para `dist/public/images`
- Verifique caminhos das imagens no código (devem ser `/images/...`)

---

## 📊 Monitoramento

### Railway
- Dashboard em: https://railway.app
- Logs em tempo real
- Métricas de CPU/Memória

### Render
- Dashboard em: https://dashboard.render.com
- Logs em tempo real
- Alertas configuráveis

### Seu Servidor
```bash
# Ver logs
docker-compose logs -f web

# Ver uso de recursos
docker stats
```

---

## 🔄 Atualizações

### Atualizar Código
```bash
git pull origin main
pnpm install
pnpm build
pnpm start
```

### Atualizar Banco de Dados
```bash
pnpm db:push
```

---

## 📞 Suporte

Para problemas:
1. Verifique os logs: `pnpm dev` ou `docker-compose logs`
2. Verifique variáveis de ambiente: `cat .env`
3. Teste conexão com banco: `mysql -u user -p -h host`
4. Verifique porta: `lsof -i :3000`

---

## ✨ Próximos Passos

1. ✅ Deploy em produção
2. ✅ Configurar domínio customizado
3. ✅ Ativar HTTPS/SSL
4. ✅ Configurar backups de banco de dados
5. ✅ Monitorar performance
6. ✅ Configurar alertas

---

**Última atualização**: Janeiro 2026
**Versão do Projeto**: 1.0.0
