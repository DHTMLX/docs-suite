---
sidebar_label: Integration with Svelte
title: Integration with Svelte 
description: You can explore how to use DHTMLX Suite Widgets with Svelte. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Integration with Svelte

:::tip
You should be familiar with the basic concepts and patterns of **Svelte** before reading this documentation. To refresh your knowledge, please refer to the [**Svelte documentation**](https://svelte.dev/).
:::

DHTMLX Suite is compatible with **Svelte**. For more information, refer to the corresponding example on GitHub: [DHTMLX Suite with Svelte Demo](https://github.com/DHTMLX/svelte-suite-demo).

## Create new Svelte project

:::info
Before you start to create a new project, install [**Vite**](https://vite.dev/) (optional) and [**Node.js**](https://nodejs.org/en/).
:::

Step 1. Create a project and name it as ***my-svelte-suite-app***:

There are several ways on how to create a **Svelte** project:

- you can use the [**SvelteKit**](https://svelte.dev/docs/kit/introduction)

or

- you can also use **Svelte with Vite** (but without SvelteKit):

~~~json
npm create vite@latest
~~~

Check the details in the [related article](https://svelte.dev/docs/svelte/getting-started#Alternatives-to-SvelteKit).

Step 2. Go to the project directory:

~~~bash
cd my-svelte-suite-app
~~~

Step 3. Install dependencies and start the dev server:

- if you use [**yarn**](https://yarnpkg.com/), run the following commands:

~~~bash
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

Install the DHTMLX Suite library to get access to Suite widgets. Refer to the following topic for more information: [**Installing DHTMLX Suite via npm or yarn**](../../#installing-trial-dhtmlx-suite-via-npm-or-yarn)

## Create Svelte component

Now you can create Svelte components (wrappers) based on Suite widgets. For each complex Suite widget you can create a separate file (for instance [***Grid.svelte***](https://github.com/DHTMLX/svelte-suite-demo/blob/main/src/Content/LeftPanel/Grid.svelte)) in the [***src/***](https://github.com/DHTMLX/svelte-suite-demo/tree/main/src) directory.

### Import source files

Open the ***Grid.svelte*** file and import the corresponding Suite widget. Note that:

- if you use PRO version and install the Suite package from a local folder, the import paths look as follows:

~~~jsx title="Grid.svelte"
import { SuiteWidgetName } from "dhx-suite-package"; // import { Grid, Pagination, ... } from "dhx-suite-package";
import "dhx-suite-package/codebase/suite.css"; // import Suite styles
~~~

Note that depending on the used package, the source files can be minified. In this case, make sure that you import the CSS file as ***suite.min.css***.

- if you use the trial version of Suite, the import paths look as follows:

~~~jsx title="Grid.svelte"
import { SuiteWidgetName } from "@dhx/trial-suite"; // import { Grid, Pagination, ... } from "@dhx/trial-suite";
import "@dhx/trial-suite/codebase/suite.min.css"; // import Suite styles
~~~

In this guide you can find basic concepts on how to utilize the **trial** version of Suite widgets.

### Initialize Suite widget(s) within a container

To display a Suite widget on a page, you need to create a container and initialize a widget through the corresponding constructor:

~~~html {4,8-9,13-15,24} title="Grid.svelte"
<script>
import { onMount, onDestroy } from "svelte";
// import a Suite widget
import { Grid } from "@dhx/trial-suite";
// import Suite styles
import "@dhx/trial-suite/codebase/suite.min.css"; 

let grid_container, // initialize container for a Suite widget
    grid_widget;

onMount(() => {
    // initialize a Suite widget
    grid_widget = new Grid(grid_container, {
       // configuration properties here 
    });
});

onDestroy(() => {
    grid_widget?.destructor(); // destruct a Suite widget
});
</script>

<div class="component_container">
    <div bind:this={grid_container} class="widget"></div>
</div>
~~~

### Load data

To add data into a Suite widget, you need to provide a data set. You can create the [***data.js***](https://github.com/DHTMLX/svelte-suite-demo/blob/main/src/data.js) file in the ***src/*** directory and add required data sets:

~~~jsx {2,27,29} title="data.js"
export function getData() {
    const gridData = [
        {
            time: new Date("Jan 28, 2021"),
            nights: 7,
            price: 68,
            contactPerson: "Yoshio Slater",
            contactEmail: "phasellus.fermentum@yahoo.net"
        },
        {
            time: new Date("Apr 13, 2021")
            nights: 6,
            price: 66,
            contactPerson: "Christopher Kirk",
            contactEmail: "posuere.vulputate.lacus@outlook.org"
        },
        {
            time: new Date("Jan 31, 2021"),
            nights: 15,
            price: 64,
            contactPerson: "Jana Meyers",
            contactEmail: "mollis@aol.edu"
        }, 
        // other data items
    ];

    const sidebarData = [ /* ... */ ];

    return { gridData, sidebarData };
}
~~~

#### Specify data through the property

To load predefined data into a Suite widget, you need to perform the following steps:

1. Import predefined data
2. Initialize the required data set
3. Set the `data` property to the predefined data set within the Suite widget constructor

~~~html {6,8,16} title="Grid.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Grid } from "@dhx/trial-suite";
import "@dhx/trial-suite/codebase/suite.min.css"; 

import { getData } from "../../data"; // 1. import predefined data

let { gridData } = getData(); // 2. initialize the required data set

let grid_container,
    grid_widget;

onMount(() => {
    // initialize a Suite widget with data
    grid_widget = new Grid(grid_container, {
        data: gridData, // 3. set the `data` property to the predefined data set
        // other configuration properties here 
    });
});

onDestroy(() => {
    grid_widget?.destructor();
});
</script>

<div class="component_container">
    <div bind:this={grid_container} class="widget"></div>
</div>
~~~

:::tip
For more information, refer to the **Data loading** section of the corresponding control: [Tree](tree/loading_data.md), [Toolbar](toolbar/load_data.md), [Sidebar](sidebar/data_loading.md), [Ribbon](ribbon/data_loading.md), [Menu](menu/data_loading.md), [List](list/load_data.md), [Grid](grid/data_loading.md), [DataView](dataview/data_loading.md), [Combobox](combobox/adding_options.md), [Chart](chart/data_loading.md), etc.
:::

#### Specify data through the method

To load predefined data into a Suite widget, you can also call the `parse()` method:

~~~html {6,8,19} title="Grid.svelte"
<script>
import { onMount, onDestroy } from "svelte";
import { Grid } from "@dhx/trial-suite";
import "@dhx/trial-suite/codebase/suite.min.css"; 

import { getData } from "../../data"; // 1. import predefined data

let { gridData } = getData(); // 2. initialize the required data set

let grid_container, 
    grid_widget;

onMount(() => {
    // initialize a Suite widget without data
    grid_widget = new Grid(grid_container, {
       // configuration properties here 
    });

    grid_widget.data.parse(gridData); // 3. call the parse() method and pass data as a parameter
});

onDestroy(() => {
    grid_widget?.destructor();
});
</script>

<div class="component_container">
    <div bind:this={grid_container} class="widget"></div>
</div>
~~~

### Handle events

When a user performs some action in a Suite widget, an event is fired. You can use this event to detect an action and run the required code.

~~~jsx {6-8} title="Grid.svelte"
// ...

onMount(() => {
    grid_widget = new Grid(grid_container, {});

    grid_widget.events.on("scroll", function({top,left}){
        console.log("The grid is scrolled to "+top,left);
    });
});

// ...
~~~

Now you know how to integrate and configure any Suite widget with Svelte. You can customize the code according to your specific requirements. The extended example you can find on [**GitHub**](https://github.com/DHTMLX/svelte-suite-demo).
