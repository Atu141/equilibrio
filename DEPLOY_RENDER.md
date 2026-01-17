# 🚀 Guia Rápido: Deploy no Render

## Passo 1: Preparar o Repositório GitHub

1. Crie um repositório no GitHub
2. Faça upload dos arquivos do projeto:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/seu-repositorio.git
   git push -u origin main
   ```

## Passo 2: Criar Conta no Render

1. Acesse https://render.com
2. Clique em "Sign Up" e crie uma conta
3. Conecte sua conta GitHub

## Passo 3: Criar um Novo Web Service

1. No dashboard do Render, clique em "New +"
2. Selecione "Web Service"
3. Conecte seu repositório GitHub
4. Configure:
   - **Name:** `serralheria-equilibrio`
   - **Environment:** `Node`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `node dist/index.js`

## Passo 4: Configurar Banco de Dados

1. No dashboard, clique em "New +"
2. Selecione "MySQL"
3. Configure:
   - **Name:** `serralheria-db`
   - **Database Name:** `serralheria`
   - **User:** `serralheria_user`
   - **Plan:** Free (ou pago se preferir)

## Passo 5: Configurar Variáveis de Ambiente

1. Volte ao seu Web Service
2. Vá para "Environment"
3. Adicione as variáveis:

```
NODE_ENV=production
JWT_SECRET=sua_chave_secreta_muito_longa_e_aleatoria
DATABASE_URL=mysql://serralheria_user:sua_senha@seu-host:3306/serralheria
PORT=3000
```

**Nota:** O `DATABASE_URL` será fornecido automaticamente pelo Render quando você criar o MySQL

## Passo 6: Deploy

1. Clique em "Deploy"
2. Aguarde a compilação (leva ~3-5 minutos)
3. Quando terminar, você verá um link como: `https://serralheria-equilibrio.onrender.com`

## ✅ Verificar se Funcionou

1. Acesse o link fornecido pelo Render
2. Você deve ver o site carregando
3. Teste as funcionalidades (formulário, etc.)

## 🔄 Atualizações Futuras

Toda vez que você fizer `git push` para o repositório, o Render fará o deploy automaticamente!

```bash
git add .
git commit -m "Sua mensagem"
git push
```

## 🐛 Troubleshooting

### Erro: "Build failed"
- Verifique se todos os arquivos estão no repositório
- Certifique-se de que `package.json` existe
- Verifique os logs do Render

### Erro: "Database connection refused"
- Aguarde alguns minutos para o MySQL iniciar
- Verifique se a `DATABASE_URL` está correta
- Certifique-se de que o MySQL foi criado no Render

### Erro: "Cannot find module"
- Execute `npm install` localmente
- Faça commit do `pnpm-lock.yaml`
- Faça push novamente

## 📞 Suporte

- Documentação Render: https://render.com/docs
- Status do Render: https://status.render.com

---

**Pronto!** Seu site está no ar! 🎉
