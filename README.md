# sample-app-vue-firebase-vuetify

## Overview

This is a template repository, which would help any level of developers to quickly start to develop a web application using Firebase as a backand and Vue as a front-end.

In addition to Firebase and Vue, we have chosen Vuetify as the UI library.

## Quick Start Guide

Requirements:

-   A Google account
-   An account on Github
-   A development machine (MacOS machine is recommanded)
-   A source code editor (Microsoft Visual Studio Code is recommanded)
-   npm
-   Firebase Tools

```*.bash
npm install --global firebase-tools
npm install firebase
firebase --version
```

It's useful to install:

-   Chorome's extension, Vue.js devtools.

Steps:

1. Fork this repository (on github).
2. "git clone" that repository.
3. Create your own project in Firebase console.
4. Create your own firbaseConfig.js at src/config directory by copy & paset firbaseConfig from Firebase console, and add export it, wihch should look like this.

```firbaseConfig.js
export const firebaseConfig = {
    apiKey: "test",
    authDomain: "test",
    databaseURL: "test",
    projectId: "test",
    storageBucket: "test",
    messagingSenderId: "test",
    appId: "test",
    measurementId: "test"
};
```

5. Create .firebaserc file based on your firebase project name, which looks like this.

```.firebaserc
{
  "projects": {
    "default": "project-id-develop"
    "release": "project-id-release",
    "develop": "project-id-develop"
  }
}
```

6. run "firebase login" to login to your Google account.

7. run "npm install" to install required node modules.

8. run "npm run serve" to run it locally for development.

9. open "http://localhost:8080" on your browser.

## Project setup

```*.bash
npm install
```

### Compiles and hot-reloads for development

```*.bash
npm run serve
```

### Compiles and minifies for production

```*.bash
npm run build
```

### Lints and fixes files

```*.bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
