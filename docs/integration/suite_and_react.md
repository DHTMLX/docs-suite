---
sidebar_label: Integration with React
title: Integration DHTML Suite with React
description: You can explore how to use DHTMLX Suite Widgets with React. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Integration Suite widgets with React

:::tip
You should be familiar with the basic concepts and patterns of [**React**](https://react.dev) before reading this documentation. To refresh your knowledge, please refer to the [**React documentation**](https://reactjs.org/docs/getting-started.html).
:::

DHTMLX Suite widgets are compatible with **React**. We have prepared code examples on how to use DHTMLX Suite widgets with **React**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/react-suite-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Vite**](https://vite.dev/) (optional) and [**Node.js**](https://nodejs.org/en/).
:::

You can create a basic **React** project or use **React with Vite**. Let's name the project as **my-react-suite-app**:

~~~json
npx create-react-app my-react-suite-app
~~~

### Installation of dependencies

Go to the new created app directory:

~~~json
cd my-react-suite-app
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

Open the ***ComponentName.jsx*** file and import widget source files. Note that:

- if you use PRO version and install the Suite package from a local folder, the import paths look like this:

~~~jsx title="Component.jsx"
import { WidgetName } from 'dhx-suite-package';
import 'dhx-suite-package/dist/suite.css';
~~~

Note that depending on the used package, the source files can be minified. In this case make sure that you are importing the CSS file as ***suite.min.css***.

- if you use the trial version of Suite, specify the following paths:

~~~jsx title="Component.jsx"
import { ComponentName } from '@dhx/trial-suite';
import "@dhx/trial-suite/dist/suite.css";
~~~

In this tutorial you can see how to configure the **trial** version of Suite.

TODO!!! NEXT STEPS

- To check online samples, please refer to the corresponding [Example on Replit](https://replit.com/@dhtmlx/dhtmlx-suite-with-react).
- To download samples, please check our GitHub repository: [DHTMLX Widgets + React](https://github.com/DHTMLX/react-suite-demo). The README.md file provides all the necessary information on how to run the app in the development mode.
