# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Code Conventions

### Commit Messages
This project follows [Conventional Commits](https://www.conventionalcommits.org/) specification.

**Format:** `<type>(<scope>): <description>`

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring without changing functionality
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks (dependencies, build config, etc.)

**Scope (optional):** Area of the codebase affected

**Examples:**
```
feat(auth): add login functionality
fix(api): resolve validation issue
refactor(utils): simplify helper functions
docs: update README with setup instructions
```

### File Naming
- **Always use English** for file and directory names
- **Use lowercase** for files in the `docs/` directory (e.g., `functionality.md`, `api-guide.md`)
- Follow existing patterns in other directories (camelCase for components, kebab-case for utilities)
