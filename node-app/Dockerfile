# Use the official Node.js 14.x base image
FROM node:14-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the application code to the container
COPY . .


# Set environment variables for MongoDB and Redis connection
ENV MONGODB_URI=mongodb://mongo_host:27017/db_name
ENV REDIS_HOST=redis_host
ENV REDIS_PORT=6379
# Expose the port on which the application listens
EXPOSE 3000

# Start the application
CMD [ "node", "app.js" ]
