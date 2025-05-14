# to-dos-api

It is a fake in-memory ToDos API for this [UI](https://github.com/TourmalineCore/to-dos-ui) that demonstrates a Test-Driven Development approach on how to develop a React web app using MobX and Cypress.  
It contains setup for development inside of VSCode Dev Containers (just Dev Containers from now on) or without it.

More info about the project and its related repos can be found here: [to-dos-documentation](https://github.com/TourmalineCore/to-dos-documentation).

## Prerequisites

### If you develop inside Dev Containers
- [Docker](https://www.docker.com/get-started/)
- [VSCode](https://code.visualstudio.com/)
- [Dev Containers Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### If you develop using good old Node.js (no Dev Containers)

- [Node.js](https://nodejs.org/en) (version 20.11.1 was used but it should be also fine with some older versions, ideally install using `nvm` which will allow you to easily switch between Node.js versions if needed)
- [VSCode](https://code.visualstudio.com/) (optional, you can use any IDE but VSCode has configured formatting on save by the lint rules of the project)

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

## Docker Build

```bash
docker build -t to-dos-api .
```

## Docker Local Run
```bash
docker run --publish 5005:80 --rm -t to-dos-api
```

Проверка синхронизации: Artem, 14 мая