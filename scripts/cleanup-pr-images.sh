#!/bin/bash

set -e

DOCKER_REPO="$DOCKER_USERNAME/$DOCKER_IMAGE"

# Step 1: Get a bearer token
TOKEN=$(curl -s -u "$DOCKER_USERNAME:$DOCKER_PASSWORD" \
  "https://auth.docker.io/token?service=registry.docker.io&scope=repository:$DOCKER_REPO:pull,push,delete" \
  | jq -r .token)

# Step 2 and 3: Get the manifest and extract the digest from response headers
DIGEST=$(curl -sI -H "Authorization: Bearer $TOKEN" \
  -H "Accept: application/vnd.docker.distribution.manifest.v2+json" \
  https://registry-1.docker.io/v2/$DOCKER_REPO/manifests/$TAG \
  | grep -i Docker-Content-Digest | tr -d '\r' | awk '{print $2}')

echo "Deleting manifest with digest: $DIGEST"

# Step 4: Delete the manifest by digest
curl -s -X DELETE \
  -H "Authorization: Bearer $TOKEN" \
  https://registry-1.docker.io/v2/$DOCKER_REPO/manifests/$DIGEST

echo "Deleted image: $DOCKER_REPO@$DIGEST"
