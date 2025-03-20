---
sidebar_label: Integration with Svelte
title: Integration DHTML Suite with Svelte 
description: You can explore how to use DHTMLX Suite Widgets with Svelte. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Integration Suite widgets with Svelte

:::tip
You should be familiar with the basic concepts and patterns of **Svelte** before reading this documentation. To refresh your knowledge, please refer to the [**Svelte documentation**](https://svelte.dev/).
:::

DHTMLX Suite is compatible with **Svelte**. We have prepared code examples on how to use DHTMLX Suite with **Svelte**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/svelte-suite-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Vite**](https://vite.dev/) (optional) and [**Node.js**](https://nodejs.org/en/).
:::

There are several ways of creating a **Svelte** project:

- you can use the [**SvelteKit**](https://kit.svelte.dev/)

or

- you can also use **Svelte with Vite** (but without SvelteKit):

~~~json
npm create vite@latest
~~~

Check the details in the [related article](https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit).

### Installation of dependencies

Let's name the project as **my-svelte-suite-app** and go to the app directory:

~~~json
cd my-svelte-suite-app
~~~

Install dependencies and start the dev server. For this, use a package manager:

- if you use [**yarn**](https://yarnpkg.com/), run the following commands:

~~~json
yarn
yarn start
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

Open the ***Suite.svelte*** file and import Suite source files. Note that:

- if you use PRO version and install the Suite package from a local folder, the import paths look like this:

~~~html title="Component.svelte"
<script>
import { WidgetName } from 'dhx-suite-package';
import 'dhx-suite-package/dist/suite.css';
</script>
~~~

Note that depending on the used package, the source files can be minified. In this case make sure that you are importing the CSS file as **suite.min.css**.

- if you use the trial version of Suite, specify the following paths:

~~~html title="Component.svelte"
<script>
import { WidgetName } from '@dhx/trial-suite';
import '@dhx/trial-suite/dist/suite.css';
<script>
~~~

In this tutorial you can see how to configure the **trial** version of Suite.

TODO!!! NEXT STEPS

- To check online samples, please refer to the corresponding [Example on Replit](https://replit.com/@dhtmlx/dhtmlx-suite-with-svelte).
- To download samples, please check our GitHub repository: [DHTMLX Widgets + Svelte](https://github.com/DHTMLX/svelte-suite-demo). The README.md file provides all the necessary information on how to run the app in the development mode.