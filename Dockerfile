FROM node:18.16.0 as node
RUN mkdir app
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build
FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
COPY --from=node /app/dist/invitation-card /usr/share/nginx/html
# Expose port 80
EXPOSE 80