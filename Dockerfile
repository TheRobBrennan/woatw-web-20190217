FROM mhart/alpine-node:10
# Add the bash shell
RUN apk add --update bash && rm -rf /var/cache/apk/*

# Create the app directory
WORKDIR /usr/src

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . ./

# Build our app
# RUN npm run build

# Expose our application and node debugger ports
EXPOSE 8000

# Start our application
CMD ["npm", "start"]