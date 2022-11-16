# pull base image
FROM node:18

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV
ENV NODE_OPTIONS --openssl-legacy-provider
#ENV EXPO_PACKAGER_PROXY_URL  http://192.168.15.5:19000
#ENV REACT_NATIVE_PACKAGER_HOSTNAME 192.168.15.5

# default to port 19006 for node, and 19001 and 19002 (tests) for debug
EXPOSE 19000 19001 19002 19006

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm install --unsafe-perm -g expo-cli

# install dependencies first, in a different location for easier app bind mounting for local development
# due to default /opt permissions we have to create the dir with root and change perms
RUN mkdir /opt/mobile && chown node:node /opt/mobile
RUN chmod -R 755 /opt/mobile
WORKDIR /opt/mobile
ENV PATH /opt/mobile/.bin:$PATH

USER node
COPY --chown=node:node ./package.json .
COPY --chown=node:node ./package-lock.json .
RUN npm install 

# copy in our source code last, as it changes the most
WORKDIR /opt/mobile/app
# for development, we bind mount volumes; comment out for production
# COPY ./mobile .

ENTRYPOINT ["npm", "run"]
CMD ["web"]