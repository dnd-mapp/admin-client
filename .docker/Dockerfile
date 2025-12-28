# syntax=docker/dockerfile:1
# check=error=true

FROM --platform=$BUILDPLATFORM dhi.io/node:25.2.1-dev AS build

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

ENV NODE_ENV=production

COPY . .

RUN pnpm run build


FROM dhi.io/nginx:1.29.4-alpine3.21

WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist/admin-client/browser .

COPY .docker/default.conf /etc/nginx/conf.d/default.conf

COPY LICENSE /LICENSE

LABEL org.opencontainers.image.title="admin-client" \
      org.opencontainers.image.description="Admin client" \
      org.opencontainers.image.source="https://github.com/dnd-mapp/admin-client" \
      org.opencontainers.image.licenses="UNLICENSED"

EXPOSE 8080

CMD ["-g", "daemon off;"]
