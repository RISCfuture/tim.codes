# tim.codes - my personal website

[![CI](https://github.com/RISCfuture/tim.codes/actions/workflows/ci.yml/badge.svg)](https://github.com/RISCfuture/tim.codes/actions/workflows/ci.yml)
[![Deploy](https://github.com/RISCfuture/tim.codes/actions/workflows/deploy.yml/badge.svg)](https://github.com/RISCfuture/tim.codes/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

This code powers <https://tim.codes>, my personal website. The website is intended
to help people learn more about me and my background; this open-source codebase
is intended to help people understand how I write code and the standards and
patterns I use.

tim.codes is written in Vue.js using TypeScript. State management is done with
Pinia, routing is handled with vue-router, and localization is done using
vue-i18n, with translations in seven locales (English, German, Spanish,
French, Japanese, Russian, and Simplified Chinese).

Vite and Vue is the toolchain used to develop this website. Most operations are
done powered by the `vite` command, though the `package.json` file has `pnpm`
aliases for all common development and deployment tasks.

## Installation

To run a copy of my website, simply check out this project into a directory,
then run `pnpm install` in that directory.

You will also need to copy the `src/i18n/strings/{base,en}/private.deploy.ts`
files to `src/i18n/strings/{base,en}/private.ts`. (These files contain my
private information locally.)

## Running in development

`pnpm dev` will compile the source with Vite, and run a local development
server at <http://localhost:5173>. The development web server supports
hot-reloading.

## Running tests

This website has both unit tests (written using Vitest and Vue Testing Library)
and end-to-end tests (run using Playwright against Chromium, Firefox, and
WebKit). To run unit tests, run `pnpm test:unit`. Run `pnpm test:e2e` to build
the site and run the end-to-end tests against a preview server, or
`pnpm test:e2e:dev` to drive them from Playwright's UI mode.

## Linting and type-checking

`pnpm lint` runs oxlint, ESLint, Stylelint, and knip; `pnpm lint:fix` applies
what those can fix automatically. `pnpm format` formats `src/` with Prettier,
and `pnpm format:check` verifies it without writing. `pnpm type-check` runs
`vue-tsc`. CI runs all three, and any failure fails the build.

## Deployment

This website is deployed to Cloudflare Workers. Once CI passes on `main`, the
`deploy.yml` GitHub Action builds the `dist/` directory, uploads the source maps
to Sentry, deletes them from the build output, and then runs `wrangler deploy`.
Wrangler serves `dist/` as static assets on the `tim.codes` custom domain, as
configured in `wrangler.jsonc`.
