# Build stage: create static export
FROM node:20-alpine AS builder

# Work directory
WORKDIR /app

# Install dependencies using lockfile for reproducibility
COPY package.json package-lock.json ./
RUN npm ci

# Copy the rest of the source
COPY . .

# Build the Next.js static export (outputs to /app/out with output: 'export')
RUN npm run build

# Run stage: serve static site with NGINX
FROM nginx:alpine AS runner

# Copy the exported static site to NGINX html directory
COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]