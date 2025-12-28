# Security Policy

## Supported Versions

Security fixes are provided for **the latest release only**.

A release is considered supported until a newer version is published. Once a new version is released, older versions are no longer eligible for security updates.

## Reporting a Vulnerability

If you believe you have found a security vulnerability in this repository, please report it via a **private channel** and avoid posting details publicly.

### How to report

- **Email**: [mail.dndmapp@gmail.com](mailto:mail.dndmapp@gmail.com)
- **GitHub**: Use **GitHub's private vulnerability reporting** or open a **draft Security Advisory** for this repository.

When reporting, please include:

- A clear description of the issue.
- Steps to reproduce the vulnerability (proof of concept if possible).
- The potential impact (e.g., RCE, information disclosure, privilege escalation).
- Any relevant logs, screenshots, or configuration details (redacted for sensitive data).

### Our process

We aim to:

- **Acknowledge** your report as soon as reasonably possible (typically within a few business days).
- **Assess** the report and determine its impact and severity.
- **Work on a fix** if the issue is confirmed and within scope.
- **Coordinate disclosure** with you, including timing of public communication.

All of the above are **best-effort goals**, not guarantees or formal service level agreements.

If you do not receive a response within a reasonable time, you may follow up using the same reporting channel.

## Scope

This security policy applies to:

- The **source code** contained in this repository, including the Angular application and associated tooling.
- The configuration of **GitHub Actions** and other CI/CD workflows defined in this repository, insofar as they impact the security of using this app.

### Out of scope

The following is generally considered **out of scope**:

- Issues impacting **unsupported versions** (i.e., anything other than the latest release).
- Denial-of-service (DoS) issues that require **unrealistic or extreme resource usage**, traffic volumes, or non-standard configurations.
- Vulnerabilities that are **solely** in third-party dependencies, without a clear misconfiguration or insecure usage in this repository’s code.
- Attacks requiring:
    - Social engineering (phishing, vishing, etc.).
    - Physical access to a device or environment.
    - Compromised user accounts or credentials obtained outside of this project.
- Vulnerabilities that arise only under **unsupported, highly customized, or misconfigured** environments.

If you are unsure whether something is in scope, please report it privately anyway; we will review and let you know.

## Coordinated Disclosure

We strongly encourage **responsible / coordinated disclosure**:

- Please **do not** open public GitHub issues or pull requests that describe security vulnerabilities in detail.
- Use the private reporting channels described above.
- Once a fix is prepared and released, we will:
    - Update the relevant documentation and/or release notes.
    - Credit the reporter (by handle or name, as you prefer), unless you ask to remain anonymous.

We kindly ask researchers to give us a reasonable opportunity to investigate and address the issue before any public disclosure. If you have specific timelines in mind (e.g., 90 days), please include that in your report so we can coordinate.

## Safe Harbor

We appreciate good-faith security research that helps improve this project.

Provided you comply with this policy and act in good faith, we will:

- Not initiate legal action against you for your research.
- Consider your activities to be **authorized** and **intended to improve security**, as long as you:
    - Do **not** exploit a vulnerability beyond the minimum required to demonstrate its existence.
    - Do **not** intentionally access, modify, or destroy data that does not belong to you.
    - Do **not** degrade, disrupt, or deny services for other users.
    - Do **not** violate any applicable laws.

If you are unsure whether your intended research is acceptable, please contact us first.

## License and Use of This Repository

This project is **not licensed for reuse**. All rights are reserved by the copyright holder.

Security research and vulnerability reporting should be conducted in a way that respects the following:

- You may use the code for **viewing, analysis, and vulnerability research only**, within the limits described in the repository’s `LICENSE`.
- You may **not** use, run, copy, modify, merge, publish, distribute, sublicense, or sell this software or any compiled artifacts and container images derived from it, except where you have got prior written permission from the copyright holder.

For more details, see the repository’s [LICENSE](./LICENSE) file.
