#!/bin/bash

# ============================================
# Script de Inicialização do Servidor
# ============================================

echo "🚀 Iniciando Serralheria e Empreiteira Equilíbrio..."

# Verificar se .env existe
if [ ! -f .env ]; then
    echo "⚠️  Arquivo .env não encontrado!"
    echo "📋 Criando .env a partir de .env.example..."
    cp .env.example .env
    echo "⚠️  IMPORTANTE: Edite o arquivo .env com suas credenciais!"
    exit 1
fi

# Instalar dependências se node_modules não existir
if [ ! -d node_modules ]; then
    echo "📦 Instalando dependências..."
    npm install
fi

# Executar migrações do banco de dados
echo "🗄️  Executando migrações do banco de dados..."
npm run db:push

# Iniciar o servidor
echo "✅ Iniciando servidor..."
npm start
