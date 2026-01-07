# Development Dockerfile for Next.js with Prisma
FROM node:22-bookworm-slim

WORKDIR /app

# Install dependencies for native binaries and PostgreSQL client
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    postgresql-client \
    && rm -rf /var/lib/apt/lists/*

# Copy package files and prisma schema first
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies (will run prisma generate via postinstall)
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Development command with Prisma migration
CMD ["sh", "-c", "npx prisma migrate deploy && npm run dev"]
