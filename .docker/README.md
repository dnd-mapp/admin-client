# dnd-mapp Admin Client (Docker image)

This image contains a production-style build of the **D&D Mapp: Admin Client (Admin UI)**:

- Source: <https://github.com/dnd-mapp/admin-client>
- Image: `dndmapp/admin-client`

It is intended for:

- Running the Admin Client in a containerized environment.
- Local development and testing of the containerization setup.
- Serving as a reference for how the Admin Client is built and deployed.

> [!IMPORTANT]
> This image and the underlying source code are **not licensed for reuse**. See [License](#license) for details.

---

## What this image contains

- A built Angular application (using Node 24 and pnpm in a multi-stage build).
- A minimal Nginx-based runtime serving the built Admin Client.
- An image built for multiple architectures:
    - `linux/amd64`
    - `linux/arm64`

The container runs Nginx, which serves the compiled Admin Client as a static Single Page Application (SPA).

---

## Tags and publishing

Images are built and published from GitHub Actions using a Docker Bake file in the repository.

### Tagging strategy

- **On every merge to `main`**:
    - Images are tagged with:
        - `dev`
        - The short Git SHA (e.g. `sha-abc1234`)

- **On every release**:
    - Versioned tags of the form:
        - `latest`
        - `{major}.{minor}.{patch}` (e.g. `1.2.3`)
        - `{major}.{minor}` (e.g. `1.2`)
        - `{major}` (e.g. `1`)

Examples:

- `dndmapp/admin-client:latest`
- `dndmapp/admin-client:1.2.3`
- `dndmapp/admin-client:1.2`
- `dndmapp/admin-client:1`
- `dndmapp/admin-client:dev`
- `dndmapp/admin-client:sha-<short-sha>`

Exact tags and versioning may evolve with the project, but the general structure remains the same.

---

## How to run

### Simple `docker run`

To run the latest image locally:

```bash
docker run --rm -p 4200:8080 --name dndmapp-admin-client dndmapp/admin-client:latest
```

Then open:

```text
http://localhost:4200
```

Notes:

- Port `8080` inside the container is mapped to `4200` on your host.
- Nginx serves the Admin Client as a static site.

If you want to use a specific tag (e.g. a release):

```bash
docker run --rm -p 4200:8080 --name dndmapp-admin-client dndmapp/admin-client:1.2.3
```

### Using Docker Compose

A minimal `docker-compose.yaml` for this image could look like:

```yaml
name: dndmapp-admin-client
services:
  admin-client:
    image: dndmapp/admin-client:latest
    container_name: dndmapp-admin-client
    restart: on-failure
    ports:
      - '4200:8080/tcp'
```

Then start the container with:

```bash
docker compose up -d
```

Access the Admin Client at:

```text
http://localhost:4200
```

This example:

- Uses the `dndmapp/admin-client:latest` image.
- Maps host port `4200` to container port `8080`.

You can adjust the ports, container name, and restart policy according to your environment.

---

## Building the image locally

If you want to build the image yourself (e.g., to test changes to the Admin Client):

From the repository root:

```bash
docker build -f .docker/Dockerfile -t dndmapp/admin-client:local .
```

Then run your local build:

```bash
docker run --rm -p 4200:8080 --name dndmapp-admin-client dndmapp/admin-client:local
```

This uses the same Dockerfile that CI uses (via Docker Bake) but lets you test changes locally before pushing.

---

## Build details (Docker Bake)

In CI, the image is built using **Docker Buildx** and a **bake** file (`.docker/docker-bake.hcl`).

Key points:

- **Platforms**: `linux/amd64`, `linux/arm64`
- **Context**: repository root (`.`)
- **Dockerfile**: `.docker/Dockerfile`
- **Tags**: controlled by CI, typically via a `TAGS` variable
- **Attestations**:
    - Build provenance (mode `max`)
    - SBOM (Software Bill of Materials), where supported

The multi-stage Dockerfile typically:

1. Uses a Node 24 image with pnpm to:
    - Install dependencies.
    - Build the Angular Admin Client.
2. Copies the built files into a lightweight Nginx image.
3. Exposes port `8080` and serves the SPA from `/usr/share/nginx/html`.

---

## Environment variables and configuration

The default image is designed to be **simple and self-contained**:

- Nginx serves the built Admin Client from `/usr/share/nginx/html`.
- Port **8080** is exposed by default.
- There are **no mandatory environment variables** required to simply run the image.

If you want to customize behavior (for example):

- Nginx configuration (headers, caching, base paths).
- Reverse-proxy behavior.
- Integration with other services.

You can:

1. Clone the `dnd-mapp/admin-client` repository (with explicit permission).
2. Modify `.docker/default.conf` or other Docker-related configuration.
3. Rebuild the image with your customizations.
4. Or build your own image based on `dndmapp/admin-client` and override the Nginx configuration.

Because this project is **all rights reserved**, you must have prior written permission before using this image or adapting it for your own deployments. See [License](#license) for more details.

---

## Use cases

Typical intended uses for this image include:

- Running the **dnd-mapp Admin Client** in test or internal environments.
- **Local development / testing** of:
    - The containerization setup.
    - Nginx / SPA behavior in a container.
- **Reference** for:
    - Multi-stage builds with Node 24 and pnpm.
    - Serving an Angular SPA behind Nginx in a container.
    - Multi-arch image builds with provenance and SBOM attestation.

For production deployments in your own environment, you would typically:

- Use this image or a derivative (with permission).
- Integrate it into your own orchestration (Docker Compose, Kubernetes, etc.).
- Apply your own security, networking, and observability practices around it.

---

## License

This project is **not licensed for reuse**.

- The author reserves all rights.
- The code is published on GitHub for transparency and internal reference.
- You are **not permitted** to use, copy, modify, or distribute this code or image in any form, whether for commercial or non-commercial purposes, without prior written permission from the author.

For more info see the [LICENSE](https://github.com/dnd-mapp/admin-client/blob/main/LICENSE). For permission requests, contact: [mail.dndmapp@gmail.com](mailto:mail.dndmapp@gmail.com)
