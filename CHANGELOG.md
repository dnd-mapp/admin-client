# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project adheres to **semantic versioning** where practical.

## [Unreleased]

### Added

### Changed

### Fixed

### Deprecated

### Removed

### Security

---

## Conventions

### Versioning

- Versions follow **semantic versioning** (`MAJOR.MINOR.PATCH`) where feasible:
    - **MAJOR**: Incompatible or breaking changes to the app, default configuration, or tooling.
    - **MINOR**: Backwards-compatible additions or improvements to the app.
    - **PATCH**: Backwards-compatible bug fixes and small changes.

### Categories

Within each release, changes are grouped into the following sections:

- **Added**: New features or capabilities.
- **Changed**: Changes in existing behavior or configuration.
- **Fixed**: Non-security bug fixes.
- **Security**: Security-related changes, including:
    - Fixes for vulnerabilities.
    - Security hardening and configuration improvements.
    - Security-impacting dependency updates.

### Security Entries and Credits

For security issues:

- Include a short, clear description of the vulnerability and its impact.
- Mention affected versions if applicable.
- Reference a GitHub Security Advisory ID if one exists.
- Credit the reporter (by GitHub handle or name) unless they request anonymity.

Example security entry:

- Fix insecure default CORS configuration in the dev server setup that could allow unintended cross-origin requests in certain environments. Reported by @example-researcher.

For details on how to report vulnerabilities, see [SECURITY.md](./SECURITY.md).

---

## License Notice

This project is **not licensed for reuse**. All rights are reserved by the copyright holder.

The changelog documents changes to this repository but does **not** grant any license rights. For license terms, see the [LICENSE](./LICENSE) file.
