# Gunakan Node.js untuk build aplikasi frontend
FROM oven/bun:alpine

WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install

COPY . .

COPY .env.example .env

RUN bun run build

CMD ["bun", "run", "preview"]