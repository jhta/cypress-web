[![test/deploy](https://github.com/jhta/miro/workflows/deploy/badge.svg)](https://github.com/jhta/miro/actions)

# Miro Test Assignment

[DEMO](https://jhta.github.io)

## Stack:

- Webpack as dev server
- Babel to support ES6 features in IE11
- Jest as framework to run Unit testing
- Husky to execute git hooks
- Eslint + Prettier
- LESS to add extra functionalities to CSS
- Github actions as CI/CD to deploy (build, lint, test, deploy) to Github Pages

## Scripts

### Run Dev Server

```bash
yarn dev #or npm run dev
```

### Build to production

```bash
yarn build
```

### Run test

```bash
yarn test
```

### Run test watch

```bash
yarn test:watch
```

### Run linter

```bash
yarn lint
```

## Folder Structure

- `/build` static web build
- `/src` code
  - `/app/` App to DEMO, it includes the main `index.html`, `index.js`, `app.test.js`, and `style.less`
  - `/src/lib/` Email input as exportable library
    - `index.js` Initial app, factory to encapsulate data and expose just the needed methods from `EmailInput`
    - `/utils/` application utils
    - `/constants/` application constants
    - `/components/` "components", those are factories for DOM Element who respect the same pattern (exept main `email-input`)
      - `/block-email`, `/close-icon`, `/input`, `/wrapper`. Element factories that follow the same pattern. All of them receive the params `props` and `events` in order to create the respective HTML element and attach the events.
      - `/email-input` Constructor function for `EmailInput`, it includes all the data state logic, operations and event delegation to the other Elements.

## Features (EmailInput component):

- Can be use as module in any form or app independently ✅
- Add email typing `COMMA`, `ENTER` or lossing the input focus ✅
- Pasted emails are converted to formatted blocks inmediatly ✅
- Input dimensions depends on parent dimensions ✅
- Scrollable ✅
- It is possible to create multiple elements in the same page without conflicts ✅
- Detect repeated email, preventing to add the same email twice ✅
- Block elements can be deleted ✅

## Git Hooks

### pre-commit

It check the linter until commit

### pre-push

It run the unit testing until push
