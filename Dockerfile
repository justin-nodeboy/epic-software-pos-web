FROM node:6.9.5
ADD . /app
WORKDIR /app

# Install app dependencies
ADD package.json /app/package.json
RUN npm install
CMD npm start

EXPOSE 3443

ENV BRAND="Epic POS"
ENV PORT=3443
ENV NODE_ENV="development"
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
ENV MONGODB_URI="mongodb://172.19.0.2:27017/epic-pos"
ENV BASE_URL="https://0.0.0.0"