# ⚡ Quick Start - Serralheria e Empreiteira Equilíbrio

## 🚀 Começar em 5 Minutos

### Opção 1: Docker (Recomendado - Mais Fácil)

```bash
# 1. Extrair arquivo
unzip site_servicos_residenciais.zip
cd site_servicos_residenciais

# 2. Iniciar com Docker
docker-compose up -d

# 3. Acessar
# Site: http://localhost:3000
# PhpMyAdmin: http://localhost:8080
```

**Pronto!** O site está rodando com banco de dados.

### Opção 2: Node.js Local

```bash
# 1. Extrair arquivo
unzip site_servicos_residenciais.zip
cd site_servicos_residenciais

# 2. Instalar dependências
pnpm install

# 3. Configurar banco de dados
# Editar .env com suas credenciais MySQL
cp .env.example .env
nano .env

# 4. Executar migrations
pnpm db:push

# 5. Rodar em desenvolvimento
pnpm dev

# Ou em produção
pnpm build
pnpm start
```

Acesse: http://localhost:3000

### Opção 3: Deploy em Railway (Mais Rápido para Produção)

```bash
# 1. Criar conta em https://railway.app
# 2. Conectar repositório GitHub
# 3. Railway faz tudo automaticamente!
```

[Ver instruções detalhadas](./docs/DEPLOYMENT_GUIDE.md#-railway-recomendado---mais-simples)

---

## 📋 Checklist de Deploy

- [ ] Extrair arquivo ZIP
- [ ] Instalar dependências (`pnpm install`)
- [ ] Configurar `.env`
- [ ] Executar migrations (`pnpm db:push`)
- [ ] Testar localmente (`pnpm dev`)
- [ ] Build para produção (`pnpm build`)
- [ ] Deploy em Railway/Render/Docker

---

## 🆘 Problemas Comuns

### "Cannot find module 'pnpm'"
```bash
npm install -g pnpm
```

### "Connection refused - MySQL"
```bash
# Verifique se MySQL está rodando
docker-compose ps

# Ou reinicie
docker-compose restart db
```

### "Port 3000 already in use"
```bash
# Mudar porta
PORT=3001 pnpm start
```

---

## 📚 Documentação Completa

- **[README.md](./README.md)** - Overview do projeto
- **[docs/DEPLOYMENT_GUIDE.md](./docs/DEPLOYMENT_GUIDE.md)** - Guia completo de deploy

---

## ✨ Próximos Passos

1. ✅ Rodar localmente
2. ✅ Testar funcionalidades
3. ✅ Customizar (cores, textos, imagens)
4. ✅ Deploy em produção

---

**Dúvidas?** Veja [docs/DEPLOYMENT_GUIDE.md](./docs/DEPLOYMENT_GUIDE.md#-troubleshooting)
