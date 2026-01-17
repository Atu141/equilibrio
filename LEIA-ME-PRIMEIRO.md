# 📖 LEIA-ME PRIMEIRO

Bem-vindo ao pacote de exportação do site **Serralheria e Empreiteira Equilíbrio**!

## 🎯 O Que Você Tem Aqui

Este é um **projeto full-stack completo** pronto para ser hospedado em qualquer servidor que suporte Node.js:

✅ Frontend React compilado e otimizado  
✅ Backend Express.js com API tRPC  
✅ Banco de dados MySQL com migrações  
✅ Todas as imagens e assets do site  
✅ Documentação de hospedagem  
✅ Scripts de inicialização  

## ⚡ Início Rápido (5 minutos)

### 1️⃣ Escolha Uma Plataforma de Hospedagem

**Opção A: Render (Mais fácil - Recomendado)**
- Acesse: https://render.com
- Tempo de setup: ~5 minutos
- Custo: Gratuito (com limitações) ou $7+/mês
- Leia: `DEPLOY_RENDER.md`

**Opção B: Railway**
- Acesse: https://railway.app
- Tempo de setup: ~5 minutos
- Custo: $5/mês (créditos iniciais)

**Opção C: Seu Próprio Servidor**
- DigitalOcean, Linode, AWS, etc.
- Tempo de setup: ~30-60 minutos
- Custo: $5-20+/mês

### 2️⃣ Prepare o Repositório GitHub

```bash
# Crie um repositório no GitHub
# Depois execute:

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/seu-usuario/seu-repositorio.git
git push -u origin main
```

### 3️⃣ Configure as Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env` e preencha com seus dados:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com:
- `DATABASE_URL` - URL de conexão do MySQL
- `JWT_SECRET` - Chave secreta para segurança
- Outras variáveis conforme necessário

### 4️⃣ Faça o Deploy

Siga as instruções em `DEPLOY_RENDER.md` ou `README_HOSPEDAGEM.md`

## 📁 Estrutura de Arquivos

```
projeto/
├── dist/                    # ⭐ Código compilado (pronto para produção)
│   ├── index.js            # Servidor Node.js
│   └── public/             # Frontend compilado
├── public/                 # Imagens e assets
├── drizzle/                # Migrações do banco de dados
├── package.json            # Dependências
├── .env.example            # Template de variáveis de ambiente
├── README_HOSPEDAGEM.md    # Guia completo de hospedagem
├── DEPLOY_RENDER.md        # Guia específico para Render
└── start.sh                # Script de inicialização
```

## 🔑 Variáveis de Ambiente Essenciais

Você PRECISA configurar estas variáveis antes de fazer o deploy:

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `DATABASE_URL` | URL de conexão MySQL | `mysql://user:pass@host/db` |
| `JWT_SECRET` | Chave de segurança | `sua_chave_muito_longa_e_aleatoria` |
| `NODE_ENV` | Ambiente | `production` |
| `PORT` | Porta do servidor | `3000` |

## ✅ Checklist de Deploy

- [ ] Criei um repositório no GitHub
- [ ] Fiz upload de todos os arquivos
- [ ] Escolhi uma plataforma de hospedagem
- [ ] Criei uma conta na plataforma
- [ ] Configurei o banco de dados MySQL
- [ ] Defini todas as variáveis de ambiente
- [ ] Fiz o deploy
- [ ] Testei se o site está funcionando
- [ ] Testei o formulário de contato
- [ ] Testei as imagens carregando

## 🚀 Próximos Passos

1. **Leia um dos guias de hospedagem:**
   - Para Render: `DEPLOY_RENDER.md`
   - Para qualquer plataforma: `README_HOSPEDAGEM.md`

2. **Configure seu banco de dados:**
   - Crie um MySQL (a maioria das plataformas oferece)
   - Obtenha a `DATABASE_URL`
   - Adicione ao arquivo `.env`

3. **Faça o deploy:**
   - Conecte seu repositório GitHub
   - Configure as variáveis de ambiente
   - Clique em "Deploy"

4. **Teste o site:**
   - Acesse o link fornecido
   - Verifique se tudo está funcionando
   - Teste o formulário de contato

## 🆘 Precisa de Ajuda?

### Erro: "Cannot find module"
```bash
npm install
npm run build
```

### Erro: "Database connection refused"
- Verifique a `DATABASE_URL`
- Certifique-se de que o MySQL está rodando
- Aguarde alguns minutos se acabou de criar o banco

### Erro: "Port already in use"
- Mude a porta em `.env`: `PORT=3001`

### Erro: "Build failed"
- Verifique os logs da plataforma
- Certifique-se de que todos os arquivos estão no repositório
- Execute `npm install` localmente e teste

## 📞 Documentação

- **Render:** https://render.com/docs
- **Railway:** https://docs.railway.app
- **Node.js:** https://nodejs.org/docs
- **Express:** https://expressjs.com
- **React:** https://react.dev

## 🎉 Sucesso!

Quando você vir seu site no ar, você terá:

✅ Um site profissional e responsivo  
✅ Formulário de contato funcional  
✅ Galeria de imagens  
✅ Banco de dados para armazenar dados  
✅ Possibilidade de fazer atualizações facilmente  

---

**Dúvidas?** Consulte os arquivos de documentação inclusos neste pacote!

Boa sorte! 🚀
