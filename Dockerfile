# ==== CONFIGURE =====
# Use a Node 16 base image
FROM node:19-alpine 
# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY . .
# ==== BUILD =====
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci 
# Build the app
RUN npm run build
# ==== RUN =======
# Set the env to "production"
ENV NODE_ENV production
# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 3000
<<<<<<< HEAD
# Start the app (development build)
=======
# Start the app
>>>>>>> parent of 75fd26f (Trying production build of react)
CMD [ "npm", "start" ]