-- Script de inicialização do banco de dados
-- Este arquivo é executado automaticamente quando o container MySQL é criado

-- Criar usuário adicional com privilégios
CREATE USER IF NOT EXISTS 'site_user'@'%' IDENTIFIED BY 'site_password';
GRANT ALL PRIVILEGES ON site_servicos.* TO 'site_user'@'%';
FLUSH PRIVILEGES;

-- Configurar charset padrão
ALTER DATABASE site_servicos CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Tabelas serão criadas automaticamente pelo Drizzle ORM ao executar `pnpm db:push`
