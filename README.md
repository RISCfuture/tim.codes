# tim.codes - my personal website

This code powers https://tim.codes, my personal website. The website is intended
to help people learn more about me and my background; this open-source codebase
is intended to help people understand how I write code and the standards and
patterns I use.

tim.codes is written in Vue.js using TypeScript. State management is done with
Pinia, routing is handled with vue-router, and localization is done using 
vue-i18n (though American English is currently the only supported locale).

Vite and Vue is the toolchain used to develop this website. Most operations are
done powered by the `vite` command, though the `package.json` file has `yarn`
aliases for all common development and deployment tasks.

## Installation
 out this project into a directory,
then run `yarn install` in that directory
To run a copy of my website, simply check.

You will also need to copy the `src/i18n/strings/{base,en}/private.deploy.ts`
files to `src/i18n/strings/{base,en}/private.ts`. (These files contain my
private information locally.)

## Running in development

`yarn dev` will compile the source with Webpack, and run a local development
server at http://localhost:5173. The development web server supports 
hot-reloading.

## Running tests

This website has both unit tests (written using Mocha/Chai and run using
Jasmine) and end-to-end tests (run using Cypress). To run unit tests, run
`yarn test:unit`. Run `yarn test:e2e` to launch the Cypress test runner and run 
end-to-end tests.

## Deployment

This website is hosted using GitHub pages. The `deploy.yml` GitHub Action creates
the `dist/` directory, makes it point to the `gh-pages` branch of this
repository, deploys into that directory, commits the changes, and then pushes
those changes upstream. GitHub should automatically handle the rest.
