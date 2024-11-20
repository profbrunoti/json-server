# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . .

# Install json-server globally
RUN npm install -g json-server

# Expose port 3000
EXPOSE 3000

# Define the entry point for the container
CMD ["npx", "json-server", "db.json", "--host", "0.0.0.0", "--port", "3000"]
