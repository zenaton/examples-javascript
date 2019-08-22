FROM node:stretch

RUN apt-get update && apt-get install -y curl

WORKDIR /app

EXPOSE 4001

COPY src/Parallel /app/src/Parallel
COPY src/Recursive /app/src/Recursive
COPY src/Tasks /app/src/Tasks
COPY src/Workflows /app/src/Workflows
COPY bin/launch* /app/bin/
COPY boot.js client.js /app/

COPY ./start_zenaton /app/start_zenaton
COPY package.json yarn.lock ./

# Install application dependencies
RUN yarn

# Install Zenaton
RUN curl https://install.zenaton.com | sh

# Launch agent initialization script
CMD ["./start_zenaton"]
