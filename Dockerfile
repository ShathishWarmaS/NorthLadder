# Use the official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set environment variables for MongoDB and Redis connection
ENV MONGODB_URI=mongodb://mongo_host:27017/db_name
ENV REDIS_HOST=redis_host
ENV REDIS_PORT=6379

# Expose the port your application listens on
EXPOSE 3000

# Specify the command to run your application
CMD ["npm", "start"]
