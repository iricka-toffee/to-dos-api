# to-dos-api

It is a fake in-memory ToDos API for this [UI](https://github.com/TourmalineCore/to-dos-ui) that demonstrates a Test-Driven Development approach on how to develop a React web app using MobX and Cypress.  

## Prerequisites

- [Docker](https://www.docker.com/get-started/) (needed for VSCode Dev Containers)
- [VSCode](https://code.visualstudio.com/) (optional but highly recommended due to its Dev Containers)
- [VSCode Dev Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- [Node.js](https://nodejs.org/en) (version 20.11.1 was used but it should be also fine with some older versions)

## Start

If you open this project in VSCode please install Dev Containers extension and agree to re-open this project's folder in it with installing all the rest of recommended extensions.

```bash
# run once to install dependencies
npm ci

# to run the api and re-run on a change
npm run start:dev

# to run linting
npm run lint
```

>Note: this is a NestJS Api that was bootstrapped using these [guidelines](https://docs.nestjs.com/first-steps).
