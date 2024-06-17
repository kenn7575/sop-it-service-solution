# Step 1: Build the Svelte application using a Node.js image
FROM node:16 as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the project files into the Docker image
COPY . .

# Set the environment variable for the Vite build
ARG VITE_APP_BACKEND_URL
ENV VITE_APP_BACKEND_URL $VITE_APP_BACKEND_URL

# Build the app
RUN npm run build

# Step 2: Serve the app using Nginx
FROM nginx:stable-alpine as production-stage

# Copy the built app from the build-stage to the production stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Create a custom Nginx config file to change the listen port
RUN echo "server { listen 8080; location / { root /usr/share/nginx/html; index index.html index.htm; } }" > /etc/nginx/conf.d/default.conf

# Expose port 8080 to the outside once the container has launched
EXPOSE 8080

# Image name
LABEL Name=selfservie-frontend

# When the container starts, this command will run
CMD ["nginx", "-g", "daemon off;"]
