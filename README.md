# Anonymous Chat Monorepo

This is an open source monorepo for Anonymous Chat, containing all services used for the application.

## Structure

- `apps/` – Application projects (API, web, etc.)
- `packages/` – Shared packages and configurations

## Requirements for Contributing

To contribute, you will need the following installed on your machine:

- [Git](https://git-scm.com/) – for version control and collaboration.
- [Node.js](https://nodejs.org/) – JavaScript runtime.
- [pnpm](https://pnpm.io/) – Fast, disk space efficient package manager (install via `npm install -g pnpm`).

## Getting Started

1. **Fork and clone the repository:**
   ```sh
   git clone https://github.com/ReallyFatYoshi/anonymous-chat.git
   cd anonymous-chat
   ```

2. **Install dependencies:**
   ```sh
   pnpm install
   ```

3. **Create a new branch for your contribution:**
   ```sh
   git checkout -b your-feature-branch
   ```

4. **Make your changes and ensure code quality:**
   ```sh
   pnpm lint
   pnpm format
   ```

5. **Test your changes (if applicable):**
   ```sh
   pnpm test
   ```

6. **Commit and push your changes:**
   ```sh
   git add .
   git commit -m "Describe your changes"
   git push origin your-feature-branch
   ```

7. **Open a pull request** on GitHub with a clear description of your changes.

---

*Please make sure your code passes linting and formatting checks before submitting a pull request.*

## Contributing

We welcome contributions from the community! Here’s how you can help:

- **Bug Reports:** Open an issue describing the problem and steps to reproduce.
- **Feature Requests:** Suggest new features by opening an issue.
- **Code Contributions:** 
  - Fork the repository and create a new branch for your feature or fix.
  - Follow the existing code style (run `pnpm lint` and `pnpm format` before submitting).
  - Add tests if applicable.
  - Submit a pull request with a clear description of your changes.

### Development Guidelines

- Use [pnpm](https://pnpm.io/) for package management.
- Keep code modular and document your changes.
- All apps and packages should be placed in their respective `apps/` or `packages/` folders.
- Ensure your code passes linting and formatting checks.