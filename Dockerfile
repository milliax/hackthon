FROM node:lts as dependencies
WORKDIR /V-SDGs-FE
COPY package.json ./
RUN npm install

FROM node:lts as builder
WORKDIR /V-SDGs-FE
COPY . .
COPY --from=dependencies /V-SDGs-FE/node_modules ./node_modules
RUN npm run build

FROM node:lts as runner
WORKDIR /V-SDGs-FE
ENV NODE_ENV production

COPY --from=builder /V-SDGs-FE/next.config.js ./
COPY --from=builder /V-SDGs-FE/public ./public
COPY --from=builder /V-SDGs-FE/.next ./.next
COPY --from=builder /V-SDGs-FE/node_modules ./node_modules
COPY --from=builder /V-SDGs-FE/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]