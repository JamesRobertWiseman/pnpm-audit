FROM node:20-alpine

COPY dist /opt/action-files/dist

COPY package* /opt/action-files/dist/

RUN cd /opt/action-files/dist && \
    npm i -omit=dev

COPY entrypoint.sh /opt/action-files/entrypoint.sh
RUN chmod +x /opt/action-files/entrypoint.sh
ENTRYPOINT [ "/opt/action-files/entrypoint.sh" ]