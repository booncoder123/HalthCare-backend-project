# Use the official Node.js image as the base image
FROM --platform=linux/amd64 node:14-alpine

# Create a directory for the app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Expose the port on which the app will run
EXPOSE 3000

# Start the app
CMD ["npm", "start"]