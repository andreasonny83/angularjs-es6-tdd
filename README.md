# AngularJS ES6 TDD

> Sample AngularJS app for learning TDD

## Table of contents

* [Prerequisites](#prerequisites)
* [Installation](#installation)
  * [Setup](#setup)

## Prerequisites

We assume you've already installed [NodeJS][nodejs] on your machine, if not,
please follow the installation documentation from the official websites.

## Installation

[Download the latest release][latest_release] of this project or simply
cloning this repository with:

```sh
git clone https://github.com/andreasonny83/angularjs-es6-tdd.git
```

### Setup

Once done with the previous step, open your terminal to your angularjs-es6-tdd
folder, then install all the dependencies with:

```sh
npm install
yarn # Or using Yarn for a faster installation
```

## Run the Application

There is already a preconfigured web server for this application.
The simplest way to start this server is:

```sh
npm start
```

Now open your browse to
[http://localhost:4200](http://localhost:4200) to see your application running.

This task will also watch for any file change to your project's files and
update the browser with the new changes using Webpack and WebpackDevServer.

## Running Unit tests

```sh
npm test
```

This project uses Karma as a test runner for running all the unit tests present in this
project's `.spec` files.

There is also a watch task available to let you keep running Karma in the background while
developing new code:

```sh
npm run test:watch
```

[nodejs]: https://nodejs.org/
[latest_release]: https://github.com/andreasonny83/angularjs-es6-tdd/releases/latest
