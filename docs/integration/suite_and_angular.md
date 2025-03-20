---
sidebar_label: Integration with Angular
title: Integration DHTML Suite with Angular
description: You can explore how to use DHTMLX Suite Widgets with Angular. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Integration Suite widgets with Angular

:::tip
You should be familiar with basic concepts and patterns of **Angular** before reading this documentation. To refresh your knowledge, please refer to the [**Angular documentation**](https://angular.io/docs).
:::

DHTMLX Suite is compatible with **Angular**. We have prepared code examples on how to use DHTMLX Suite with **Angular**. For more information, refer to the corresponding [**Example on GitHub**](https://github.com/DHTMLX/angular-suite-demo).

## Creating a project

:::info
Before you start to create a new project, install [**Angular CLI**](https://angular.io/cli) and [**Node.js**](https://nodejs.org/en/).
:::

Create a new **my-angular-suite-app** project using Angular CLI. Run the following command for this purpose:

~~~json
ng new my-angular-suite-app
~~~

:::note
If you want to follow this guide, disable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering) when creating new Angular app!
:::

The command above installs all the necessary tools, so you don't need to run any additional commands.

### Installation of dependencies

Go to the new created app directory:

~~~json
cd my-angular-suite-app
~~~

Install dependencies and start the dev server. For this, use the [**yarn**](https://yarnpkg.com/) package manager:

~~~json
yarn
yarn start
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Install Suite sources

Now you should get the DHTMLX Suite source code. First of all, stop the app and proceed with installing the Suite package.

### Step 1. Install package

Download the [**trial Suite package**](../../#installing-trial-dhtmlx-suite-via-npm-and-yarn) and follow steps mentioned in the README file. Note that trial Suite is available 30 days only.
  
### Step 2. Create components

Now you need to create Angular components, to add Suite widgets into the application.

TODO!!! Add app structure

#### Import source files

Open the **suite.component.ts** file and import Suite source files. Note that:

- if you use PRO version and install the Suite package from a local folder, the imported path looks like this:

~~~jsx
import { WidgetName } from 'dhx-suite-package';
~~~

- if you use the trial version of Suite, specify the following path:

~~~jsx
import { WidgetName } from '@dhx/trial-suite';
~~~

In this tutorial you can see how to configure the **trial** version of Suite.

TODO!!! NEXT STEPS

- To check online samples, please refer to the corresponding [Example on Replit](https://replit.com/@dhtmlx/dhtmlx-suite-with-angular).
- To download samples, please check our GitHub repository: [DHTMLX Widgets + Angular](https://github.com/DHTMLX/angular-suite-demo). The README.md file provides all the necessary information on how to run the app in the development mode.
