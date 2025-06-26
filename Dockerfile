# Imagem base
FROM node:20

# Diretório da aplicação
WORKDIR /app

# Copia os arquivos
COPY package*.json ./
ENV NODE_ENV=development
RUN npm install

COPY tsconfig.json ./
COPY src ./src

# Compila TypeScript
RUN npx tsc

# Expõe a porta
EXPOSE 3000

# Executa a aplicação
CMD ["node", "dist/index.js"]
