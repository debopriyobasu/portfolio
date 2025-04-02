# Use an official Node.js runtime as the base image
FROM node:current-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Use a lightweight static server image
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Remove the default nginx content
RUN rm -rf ./*

# Copy the built application from the builder stage
COPY --from=builder /app/dist .

# Expose the port the app runs on
EXPOSE 80

# Start the application
CMD ["nginx", "-g", "daemon off;"]