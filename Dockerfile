FROM mhart/alpine-node:8

LABEL name "My app NOW with DOCKER"

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 80
CMD ["npm", "start"]
