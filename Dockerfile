# stage1 as builder
FROM node:20.11.1 as builder
ARG CONTEXT='/'
# copy the package.json to install dependencies
COPY package.json ./

 #Install the dependencies and make the folder
RUN npm install && mkdir /react-ui && mv ./node_modules ./react-ui

WORKDIR /react-ui

COPY . .
COPY .env .

RUN sed -i "s|"/\basepath"|"${CONTEXT}"|g" .env

RUN export VCONTEXT=$(echo ${CONTEXT} | sed "s|/||g") && sed -i "s|"CONTEXT"|"${VCONTEXT}"|g" package.json
# Build the project and copy the files
RUN npm run build



FROM node:20.11.1
ARG CONTEXT='/'
#ENV context "/"

#!/bin/sh
#RUN apk add sudo && addgroup -S lazsa && adduser -S -G root --uid 1001  lazsa
#RUN echo "lazsa ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers.d/lazsa

# Copy from the stahg 1
COPY --from=builder /react-ui/build /react-ui/build
COPY ./server.js /react-ui
WORKDIR /react-ui

# USER lazsa
RUN npm install express
#CMD ["REACT_APP_CONTEXT=${CONTEXT} node server.js"]
#CMD ["REACT_APP_CONTEXT=${CONTEXT} ", "node", "server.js"]
CMD REACT_APP_CONTEXT=${CONTEXT} node server.js
