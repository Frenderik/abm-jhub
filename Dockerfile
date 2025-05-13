FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application for production
RUN npm run build

# Stage 2: Serve the application using a lightweight server
FROM nginx:alpine

# Copy build output to nginx's default public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the port
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
