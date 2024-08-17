#!/bin/bash

# Function to check for errors and exit if any
check_error() {
    if [ $? -ne 0 ]; then
        echo "Error occurred: $1. Exiting..."
        echo "Error details: $2"
        exit 1
    fi
}

# install packages
echo "Installing node packages"
npm install  2>&1 | tee npm_install_error.log
check_error "Failed to install npm packages" "$(cat npm_install_error.log)"

# Rebuild the Next.js application
echo "Building the Next.js application..."
npm run build  2>&1 | tee npm_build_error.log
check_error "Failed to build the Next.js application" "$(cat npm_build_error.log)"


# Restart the pm2 process for the resume app
echo "Restarting the pm2 process for the resume app..."
pm2 stop all
pm2 kill
pm2 start npm --name "resume-app" -- start 2>&1 | tee pm2_error.log
check_error "Failed to restart the pm2 process for the resume app" "$(cat pm2_error.log)"

# Restart Nginx to apply changes
echo "Restarting Nginx..."
sudo systemctl restart nginx 2>&1 | tee nginx_error.log
check_error "Failed to restart Nginx" "$(cat nginx_error.log)"

echo "Deployment successful!"
