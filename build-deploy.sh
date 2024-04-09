#!/bin/bash

# Function to check for errors and exit if any
check_error() {
    if [ $? -ne 0 ]; then
        echo "Error occurred: $1. Exiting..."
        exit 1
    fi
}

# Rebuild the Next.js application
echo "Building the Next.js application..."
npm run build
check_error "Failed to build the Next.js application"

# Restart the pm2 process for the resume app
echo "Restarting the pm2 process for the resume app..."
pm2 restart "resume-app"
check_error "Failed to restart the pm2 process for the resume app"

# Restart Nginx to apply changes
echo "Restarting Nginx..."
sudo systemctl restart nginx
check_error "Failed to restart Nginx"

echo "Deployment successful!"
