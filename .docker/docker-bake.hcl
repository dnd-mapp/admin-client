variable "TAGS" {
    default = ["latest"]
    type = list(string)
}

target "docker-metadata-action" {}

target "default" {
    inherits = ["docker-metadata-action"]

    platforms = ["linux/amd64", "linux/arm64"]
    context = "."
    dockerfile = ".docker/Dockerfile"
    tags = [for tag in TAGS: "dndmapp/admin-client:${tag}"]

    attest = [
        {
            type = "provenance"
            mode = "max"
        },
        {
            type = "sbom"
        }
    ]
}
