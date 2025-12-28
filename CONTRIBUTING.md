# Contributing to dnd-mapp/admin-client

Thank you for considering contributing to `dnd-mapp/admin-client`! 🎉

This repository contains the **Admin Client / Admin UI** for the D&D Mapp platform. It’s the web interface used to configure and inspect platform servers and related data.

This document explains how to propose changes, report issues, and work with the project’s tooling.

---

## 1. Code of Conduct

By participating in this project, you agree to follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

Please read it before opening issues or submitting pull requests.

---

## 2. Project scope and goals

This repository is:

- The **admin UI** for the D&D Mapp platform.
- Used to:
    - Configure platform and server settings.
    - Inspect and manage data relevant to D&D Mapp.
    - Help administrators debug and operate the platform.

Contributions are welcome if they help:

- Improve the **admin experience** (UX, clarity, workflows).
- Improve **reliability, observability, and maintainability** of the admin UI.
- Keep dependencies and tooling modern and well-configured.
- Fix bugs or rough edges that hinder administrators.

Decisions and roadmap are primarily driven by the **needs of the D&D Mapp platform** and its administrators.

At this time, contributions are mainly expected from **internal `dnd-mapp`** contributors. External PRs may be reviewed but are not a priority.

---

## 3. What you can contribute

You are welcome to contribute in many ways, including:

### 3.1. Bug reports

Report issues you encounter when:

- Running the Admin Client locally or in deployed environments.
- Using features of the Admin UI (configuration screens, data inspection, dashboards, etc.).

Please include:

- Steps to reproduce.
- Relevant logs or stack traces (sanitized if needed).
- Screenshots or screencasts if they clarify the problem.
- Your environment details (Node version, pnpm version, OS, browser, etc.).

### 3.2. Feature suggestions

Examples of useful suggestions:

- Improvements to admin workflows (fewer clicks, better navigation, clearer forms).
- Enhancements that make it easier to debug or inspect servers/data.
- UX improvements (accessibility, responsiveness, clearer error handling).
- Observability/monitoring improvements in the UI (better surfacing of statuses, metrics, etc.).

Please open an issue first for **larger** or potentially breaking changes so we can discuss scope and impact.

### 3.3. Documentation improvements

- Clarifying setup steps or README sections.
- Improving inline comments where they help explain important behaviors or gotchas.
- Adding usage notes or admin-oriented tips to help other operators.

### 3.4. Tooling and CI improvements

- Enhancing ESLint / Prettier / Stylelint configs (where it helps maintain quality without being overly restrictive).
- Improving Vitest / Playwright setup or test coverage for critical flows.
- Improvements to CI workflows (if present) that keep the Admin Client reliable.

---

## 4. License and usage

This project is **not open-licensed**. It is provided for viewing and internal use only.

From `LICENSE` / `package.json`:

- License: `unlicensed`
- **All rights reserved** by D&D Mapp.
- You **may not**:
    - Use, run, copy, modify, merge, publish, distribute, sublicense, or sell this software or any derived artifacts (builds, container images, etc.) without prior written permission.

If you’re unsure whether your intended use is allowed, please refer to the license text and/or contact: [mail.dndmapp@gmail.com](mailto:mail.dndmapp@gmail.com).

Contributions you make to this repository are submitted under the same “all rights reserved” policy and may be used by `dnd-mapp` in this project.

---

## 5. Getting started locally

The basic setup and run instructions are documented in the [README](./README.md). **Please start there**.

To avoid duplication and drift, this document will not repeat all setup steps. In short, you will typically:

- Use **Node 24** (recommended via [Mise](https://github.com/jdx/mise) if you use it).
- Use **pnpm** as the package manager.
- Use the HTTPS dev setup (mkcert) as described in the README.

Common commands (see README for full details):

```bash
pnpm install
pnpm start
pnpm test
```

If any README instructions are unclear or outdated, please open an issue or submit a pull request to improve them.

---

## 6. Tools and scripts

This project uses:

- **Framework**: Angular (currently `21.0.4`, updated as new versions are
  supported)
- **Package manager**: `pnpm`
- **Linting & formatting**:
    - ESLint
    - Prettier
    - Stylelint
    - markdownlint
- **Testing**:
    - `@analogjs`
    - Vitest
    - Playwright (for running tests in a real browser environment)
- **Other tooling**:
    - Mise (recommended to align tool and runtime versions)

You can run checks locally via:

```bash
pnpm lint           # Runs ESLint (via Angular)
pnpm stylelint      # Runs Stylelint for SCSS
pnpm markdownlint   # Lints Markdown files
pnpm format:check   # Runs Prettier in check mode
pnpm format:write   # Runs Prettier to fix formatting issues
```

**Requirement:**  
Your code must pass **CI checks**, which include at least ESLint, Prettier, Stylelint, and tests where applicable. Any code style is fine as long as these tools pass.

---

## 7. Issues

### 7.1. Before opening an issue

- **Search existing issues** to see if your problem or idea has already been reported or discussed.
- If a closely related issue exists:
    - Add a comment there instead of opening a new one if appropriate.

### 7.2. Using issue templates

If there is an issue template that fits your situation (e.g. “Bug report”, “Feature request”), **please use it**. It helps provide consistent and useful information for triage.

### 7.3. Opening a new issue

When opening an issue, please include:

- A clear and descriptive **title**.
- A detailed **description** of:
    - What you are trying to do.
    - What you expected to happen.
    - What actually happened.
- Steps to reproduce, including:
    - Commands you ran.
    - Relevant configuration or environment changes.
- Your environment:
    - OS
    - Node version (preferably 24)
    - pnpm version
    - Browser(s) tested
    - Any other relevant tooling details (e.g., Mise config).

For feature requests, it’s helpful to include:

- The underlying **problem** or **admin use case** you’re trying to solve.
- Any constraints or assumptions (e.g., used by on-call admins, used only in certain environments, etc.).

---

## 8. Pull requests

### 8.1. Before starting a major change

For **larger** changes (new features, significant UI/UX refactors, new dependencies, or changes that could affect security or core workflows):

- Please open an issue first to discuss your idea.
- This helps avoid unnecessary work if the change is not a good fit for the Admin Client or platform needs.

Smaller fixes (typos, minor bug fixes, small UX tweaks) can usually go straight to a PR without prior discussion.

### 8.2. Branch naming

Please use clear and descriptive branch names, ideally prefixed by type, for example:

- `feature/add-server-metrics-panel`
- `fix/admin-form-validation`
- `chore/update-angular-deps`
- `scout/investigate-e2e-flakiness`

This helps keep the history and pull requests easier to scan.

### 8.3. Commit messages

Commit messages should be:

- **Clear and descriptive** (what changed and why).
- Focused: each commit should ideally represent one logical change.

Conventional Commit prefixes (like `feat:`, `fix:`, etc.) are welcome but not strictly required as long as the message is understandable.

### 8.4. PR content guidelines

When submitting a pull request:

1. **Keep the scope focused**
    - Avoid mixing unrelated changes in a single PR.
    - Smaller, focused PRs are easier to review and quicker to merge.

2. **Make sure tests and checks pass**
    - Run relevant tests locally (Vitest and/or Playwright, as appropriate).
    - Run at least:

      ```bash
      pnpm lint
      pnpm stylelint
      pnpm markdownlint
      pnpm format:check
      ```

    - Fix any issues reported by these tools.

3. **Update documentation**
    - If your change affects how admins use the UI or how developers work on this repo, update:
        - `README.md`
        - Any relevant in-app help text or comments
        - Other docs as needed

4. **Add or update tests where it makes sense**
    - For new features or bug fixes, add tests when practical.
    - If tests are not added, a short explanation in the PR description can help reviewers understand why.

5. **Link to an issue, if applicable**
    - If your PR addresses an existing issue, mention it (e.g. `Closes #123`).

### 8.5. Review process

- A maintainer will review PRs as time allows.
- You may be asked to:
    - Make code or UX changes.
    - Provide screenshots for UI changes.
    - Split a large PR into smaller parts.

Please keep discussions respectful and focused on the technical and UX aspects. See the [Code of Conduct](./CODE_OF_CONDUCT.md) for behavior expectations.

---

## 9. Style and conventions

Beyond passing linters and formatters, there are a few important conventions:

### 9.1. UX and consistency

- Keep the **UI consistent**:
    - Reuse existing patterns (forms, tables, dialogs, toasts, etc.) where possible instead of inventing new ones.
    - Align with existing terminology used across the Admin Client and D&D Mapp in general.
- Prefer clarity over cleverness:
    - Admins should be able to quickly understand what a screen or action does.
    - Error messages and labels should be explicit and actionable.

### 9.2. Avoid surprising breaking changes

- Avoid changing or removing core admin flows without prior discussion.
- If you must introduce a breaking change (e.g., navigation changes, removal of a feature, change in how critical actions are triggered):
    - Open an issue first.
    - Clearly describe the rationale and impact.

### 9.3. Security considerations

The Admin Client deals with privileged operations and potentially sensitive data.

When making changes:

- Be mindful of:
    - Authentication and authorization (who sees/does what).
    - Not exposing sensitive internal data unnecessarily in the UI or logs.
- Avoid adding client-side features that could weaken security posture (e.g., exposing secret values, bypassing existing protections).
- If you’re unsure about the security impact, call it out explicitly in your PR so it can be reviewed carefully.

### 9.4. General code style

- Follow general Angular best practices where reasonable.
- Prefer maintainability and clarity over micro-optimizations, unless performance is a known concern in a specific area.
- Keep modules/components focused and cohesive.

As long as it passes linters/formatters and fits the above principles, you’re on the right track.

---

## 10. Questions and feedback

If you’re unsure about anything in this document, or you’re not sure whether a change belongs here, you can:

- Open an issue asking for clarification.
- Propose changes to `CONTRIBUTING.md` itself if you think it can be improved.

Thanks again for your interest in improving `dnd-mapp/admin-client`! Your feedback and contributions help make the Admin UI more robust and useful for everyone operating the D&D Mapp platform.
