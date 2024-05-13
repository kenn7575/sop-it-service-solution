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
ENV VITE_APP_BACKEND_URL="http://localhost:3000/api"

# Build the app
RUN npm run build

# Step 2: Serve the app using Nginx
FROM nginx:stable-alpine as production-stage

# Copy the built app from the build-stage to the production stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 5173 to the outside once the container has launched
EXPOSE 80

# image name
LABEL Name=udlånsystem-frontend

# When the container starts, this command will run
CMD ["nginx", "-g", "daemon off;"]
