FROM node:12
EXPOSE 8080

MAINTAINER hacknlove

LABEL version="1.01"

CMD []

COPY --chown=node ./ /home/node/app

RUN chmod u+x /home/node/app

USER node

WORKDIR /home/node/app



RUN npm install
