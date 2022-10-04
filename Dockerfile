## Build
# docker build -t full-front:0.1.0-nginx-alpine .

## Run
# docker run -p 3000:80 -d full-front:0.1.0-nginx-alpine

## Entrar al contenedor
# docker run -it full-front:0.1.0 /bin/bash

FROM node:18.9.0 as compilacion

COPY . /opt/app

WORKDIR /opt/app

ENV REACT_APP_API_URL=http://34.173.193.2:8500/

RUN npm install

RUN npm run build

FROM node:18.9.0

COPY --from=compilacion /opt/app/build /opt/app/build

WORKDIR /opt/app

RUN npm install -g serve

CMD ["serve", "-s", "build"]
