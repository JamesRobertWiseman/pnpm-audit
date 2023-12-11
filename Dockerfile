FROM node:20-alpine

COPY dist /opt/action-files/dist

COPY package* /opt/action-files/dist/

RUN cd /opt/action-files/dist && \
    npm i -only=prod

COPY entrypoint.sh /opt/action-files/entrypoint.sh

ENTRYPOINT [ "/opt/action-files/entrypoint.sh" ]