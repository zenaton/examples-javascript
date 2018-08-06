FROM node

WORKDIR /app

# Install Zenaton
RUN apt-get update \
 && apt-get upgrade -y \
 && apt-get install -y gawk \
 && curl https://install.zenaton.com | sh \
 && apt-get remove -y gawk \
 && apt-get clean

# Install dependencies
ADD package.json yarn.lock ./
RUN yarn

ENTRYPOINT ["./start_zenaton"]
