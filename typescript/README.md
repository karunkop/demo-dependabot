# TypeScript Dependabot Test

This folder contains intentionally outdated packages to test Dependabot's behavior with TypeScript projects.

## Outdated Packages

### Main Dependencies
- `express`: 4.17.1 (outdated - current is 4.18+)
- `lodash`: 4.17.15 (outdated - current is 4.17.21)
- `react`: 16.13.0 (outdated - current is 18.x)
- `react-dom`: 16.13.0 (outdated - current is 18.x)

### Type Dependencies
- `@types/express`: 4.17.9 (outdated)
- `@types/lodash`: 4.14.165 (outdated - current is 4.14.200+)
- `@types/node`: 14.14.10 (outdated - current is 20+)
- `@types/react`: 16.9.56 (outdated - current is 18.x)
- `@types/react-dom`: 16.9.10 (outdated - current is 18.x)
- `sinon`: 12.0.1 (outdated - current is 19+)
- `@types/sinon`: 10.0.6 (outdated - current is 17+)
- `@sinonjs/fake-timers`: 7.1.0 (outdated - current is 13+)
- `@types/sinonjs__fake-timers`: 8.1.1 (outdated - current is 8.1.5+)
- `typescript`: 4.1.3 (outdated - current is 5.x)

## Test Purpose

This setup will help test whether Dependabot:
1. Opens separate PRs for main libraries and their @types counterparts
2. Groups related updates together
3. Handles version mismatches between libraries and their type definitions

## Dependabot Grouping Configuration

The `.github/dependabot.yml` file has been configured with **groups** to ensure that packages are updated together with their associated type definitions:

- **express-with-types**: Groups `express` and `@types/express`
- **lodash-with-types**: Groups `lodash` and `@types/lodash`
- **react-with-types**: Groups `react`, `react-dom`, `@types/react`, and `@types/react-dom`
- **sinon-with-types**: Groups `sinon` and `@types/sinon`
- **sinonjs-fake-timers-with-types**: Groups `@sinonjs/fake-timers` and `@types/sinonjs__fake-timers`

With this configuration, Dependabot will create **single PRs** that update both the main package and its type definitions together, preventing version mismatches and reducing PR noise.

