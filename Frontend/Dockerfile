FROM nginx

WORKDIR /usr/share/fai-stock-management-portal

RUN apt-get update; curl -fsSL https://deb.nodesource.com/setup_17.x | bash -; apt-get install -y nodejs; rm -rf /var/lib/apt/lists/*

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build; rm -r /usr/share/nginx/html/*; cp -a dist/. /usr/share/nginx/html