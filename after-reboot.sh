#!/bin/bash


# Function to check for errors and exit if any
check_error() {
    if [ $? -ne 0 ]; then
        echo "Error occurred: $1. Exiting..."
        echo "Error details: $2"
        exit 1
    fi
}

# Restart the pm2 process for the resume app
echo "Restarting the pm2 process for the resume app..."
/home/ubuntu/.nvm/versions/node/v21.7.2/bin/pm2 stop all
/home/ubuntu/.nvm/versions/node/v21.7.2/bin/pm2 kill
/home/ubuntu/.nvm/versions/node/v21.7.2/bin/pm2 start npm --name "resume-app" -- start 2>&1 | tee -a pm2_error.log
check_error "Failed to restart the pm2 process for the resume app" "$(cat pm2_error.log)"

# Restart Nginx to apply changes
echo "Restarting Nginx..."
sudo systemctl restart nginx 2>&1 | tee -a nginx_error.log
check_error "Failed to restart Nginx" "$(cat nginx_error.log)"

echo "Deployment successful!"
