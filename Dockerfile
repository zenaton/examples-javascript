# Download Zenaton agent
FROM debian:stretch AS zenaton-installer

RUN apt-get update \
 && apt-get install -y curl \
 && curl https://install.zenaton.com | sh \
 && apt-get remove -y curl \
 && apt-get clean

# Setup your application
FROM node:stretch

# Install Zenaton for your user
COPY --from=zenaton-installer /root/.zenaton /root/.zenaton
RUN ln -s /root/.zenaton/zenaton /usr/local/bin/zenaton

# Install application dependencies
WORKDIR /app
ADD package.json yarn.lock ./
RUN yarn

# Launch agent initialization script
CMD ["./start_zenaton"]
