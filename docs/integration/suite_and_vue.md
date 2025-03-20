---
sidebar_label: Integration with Vue
title: Integration DHTML Suite with Vue
description: You can explore how to use DHTMLX Suite Widgets with Vue.js. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Integration Suite widgets with Vue

:::tip
You should be familiar with the basic concepts and patterns of [**Vue**](https://vuejs.org/) before reading this documentation. To refresh your knowledge, please refer to the [**Vue 3 documentation**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX Suite is compatible with **Vue**. We have prepared code examples on how to use DHTMLX Suite with **Vue 3**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/vue-suite-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Node.js**](https://nodejs.org/en/).
:::

To create a **Vue** project, run the following command:

~~~json
npm create vue@latest
~~~

This command installs and executes `create-vue`, the official **Vue** project scaffolding tool. Check the details in the [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Let's name the project as **my-vue-suite-app**.

### Installation of dependencies

Go to the app directory:

~~~json
cd my-vue-suite-app
~~~

Install dependencies and start the dev server. For this, use a package manager:

- if you use [**yarn**](https://yarnpkg.com/), run the following commands:

~~~jsx
yarn
yarn start // or yarn dev
~~~

- if you use [**npm**](https://www.npmjs.com/), run the following commands:

~~~json
npm install
npm run dev
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Install Suite sources

Now you should get the DHTMLX Suite source code. First of all, stop the app and proceed with installing the Suite package.

### Step 1. Install package

Download the [**trial Suite package**](../../#installing-trial-dhtmlx-suite-via-npm-and-yarn) and follow steps mentioned in the README file. Note that trial Suite is available 30 days only.

### Step 2. Create components

Now you need to create React components, to add Suite widgets into the application.

TODO!!! Add app structure

#### Import source files

Open the ***Suite.vue*** file and import Suite source files. Note that:

- if you use PRO version and install the Suite package from a local folder, the import paths look like this:

~~~html title="Component.vue"
<script>
import { WidgetName } from 'dhx-suite-package';
import 'dhx-suite-package/dist/suite.css';
</script>
~~~

Note that depending on the used package, the source files can be minified. In this case make sure that you are importing the CSS file as **suite.min.css**.

- if you use the trial version of Suite, specify the following paths:

~~~html title="Component.vue"
<script>
import { WidgetName } from '@dhx/trial-suite';
import '@dhx/trial-suite/dist/suite.css';
</script>
~~~

In this tutorial you can see how to configure the **trial** version of Suite.

TODO!!! NEXT STEPS

- To check online samples, please refer to the corresponding [Example on Replit](https://replit.com/@dhtmlx/dhtmlx-suite-with-vue3).
- To download samples, please check our GitHub repository: [DHTMLX Widgets + Vue.js](https://github.com/DHTMLX/vue-suite-demo). The README.md file provides all the necessary information on how to run the app in the development mode.
