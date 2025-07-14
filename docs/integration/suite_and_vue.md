---
sidebar_label: Integration with Vue
title: Integration DHTML Suite with Vue
description: You can explore how to use DHTMLX Suite Widgets with Vue.js. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Integration Suite widgets with Vue

:::tip
You should be familiar with the basic concepts and patterns of [**Vue**](https://vuejs.org/) before reading this documentation. To refresh your knowledge, please refer to the [**Vue 3 documentation**](https://vuejs.org/guide/introduction.html#getting-started).
:::

DHTMLX Suite is compatible with [**Vue**](https://vuejs.org/). For more information, refer to the corresponding example on GitHub: [DHTMLX Suite with Vue Demo](https://github.com/DHTMLX/vue-suite-demo).

## Create new Vue project

:::info
Before you start to create a new project, install [**Node.js**](https://nodejs.org/en/).
:::

Step 1. Create a project and name it as ***my-vue-suite-app***:

~~~bash
npm create vue@latest
~~~

This command installs and executes `create-vue`, the official **Vue** project scaffolding tool. Check the details in the [Vue.js Quick Start](https://vuejs.org/guide/quick-start.html#creating-a-vue-application).

Step 2. Go to the project directory:

~~~bash
cd my-vue-suite-app
~~~

Step 3. Install dependencies and start the dev server:

- if you use [**yarn**](https://yarnpkg.com/), run the following commands:

~~~bash
yarn
yarn start // or yarn dev
~~~

- if you use [**npm**](https://www.npmjs.com/), run the following commands:

~~~bash
npm install
npm run dev
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Install Suite sources

Install the DHTMLX Suite library to get access to Suite widgets.

:::important
Download the [**trial Suite package**](../../#installing-trial-dhtmlx-suite-via-npm-or-yarn) and follow steps mentioned in the README file. Note that **trial** Suite is available 30 days only.
:::

## Create Vue component

Now you can create Vue components (wrappers) based on Suite widgets. For each complex Suite widget you can create a separate file (for instance [***Grid.vue***](https://github.com/DHTMLX/vue-suite-demo/blob/master/src/components/Content/LeftPanel/Grid.vue)) in the [***src/***](https://github.com/DHTMLX/vue-suite-demo/tree/master/src) directory.

### Import source files

Open the ***Grid.vue*** file and import Suite source files. Note that:

- if you use PRO version and install the Suite package from a local folder, the import paths look as follows:

~~~html title="Grid.vue"
<script>
import { SuiteWidgetName } from "dhx-suite-package"; // import { Grid, Pagination, ... } from "dhx-suite-package";
import "dhx-suite-package/codebase/suite.css"; // import Suite styles
</script>
~~~

Note that depending on the used package, the source files can be minified. In this case, make sure that you import the CSS file as ***suite.min.css***.

- if you use the trial version of Suite, the import paths look as follows:

~~~html title="Grid.vue"
<script>
import { SuiteWidgetName } from "@dhx/trial-suite"; // import { Grid, Pagination, ... } from "@dhx/trial-suite";
import "@dhx/trial-suite/codebase/suite.min.css"; // import Suite styles
</script>
~~~

In this guide you can find basic concepts on how to utilize the **trial** version of Suite widgets.

### Initialize Suite widget(s) within a container

To display a Suite widget on a page, you need to create a container and initialize a widget through the corresponding constructor:

~~~html {3,10-12,23} title="Grid.vue"
<script>
// import a Suite widget
import { Grid } from "@dhx/trial-suite";
// import Suite styles
import "@dhx/trial-suite/codebase/suite.min.css"; 
// create and export the Vue component
export default {
    mounted() {
        // initialize a Suite widget
        this.grid_widget = new Grid(this.$refs.grid_container, {
            // configuration properties here
        });
    },

    unmounted() {
        this.grid_widget?.destructor(); // destruct a Suite widget
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="grid_container" class="widget"></div>
    </div>
</template>
~~~

### Load data

To add data into a Suite widget, you need to provide a data set. You can create the [***data.js***](https://github.com/DHTMLX/vue-suite-demo/blob/master/src/store.js) file in the ***src/*** directory and add required data sets:

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

~~~html {5,8-11,16} title="Grid.vue"
<script>
import { Grid } from "@dhx/trial-suite";
import "@dhx/trial-suite/codebase/suite.min.css";

import { getData } from "../../data"; // 1. import predefined data

export default {
    data() {
        const { gridData } = getData(); // 2. initialize the required data set 
        return { gridData };
    },

    mounted() {
        // initialize a Suite widget with data
        this.grid_widget = new Grid(this.$refs.grid_container, {
            data: gridData, // 3. set the `data` property to the predefined data set
            // other configuration properties
        });
    },

    unmounted() {
        this.grid_widget?.destructor();
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="grid_container" class="widget"></div>
    </div>
</template>
~~~

:::tip
For more information, refer to the **Data loading** section of the corresponding control: [Tree](tree/loading_data.md), [Toolbar](toolbar/load_data.md), [Sidebar](sidebar/data_loading.md), [Ribbon](ribbon/data_loading.md), [Menu](menu/data_loading.md), [List](list/load_data.md), [Grid](grid/data_loading.md), [DataView](dataview/data_loading.md), [Combobox](combobox/adding_options.md), [Chart](chart/data_loading.md), etc.
:::

#### Specify data through the method

To load predefined data into a Suite widget, you can also call the `parse()` method:

~~~html {5,8-11,19} title="Grid.vue"
<script>
import { Grid } from "@dhx/trial-suite";
import "@dhx/trial-suite/codebase/suite.min.css";

import { getData } from "../../data"; // 1. import predefined data

export default {
    data() {
        const { gridData } = getData(); // 2. initialize the required data set 
        return { gridData };
    },

    mounted() {
        // initialize a Suite widget without data
        this.grid_widget = new Grid(this.$refs.grid_container, {
            // other configuration properties
        });

        this.grid_widget.data.parse(gridData); // 3. call the parse() method and pass data as a parameter
    },

    unmounted() {
        this.grid_widget?.destructor();
    }
};
</script>

<template>
    <div class="component_container">
        <div ref="grid_container" class="widget"></div>
    </div>
</template>
~~~

### Handle events

When a user performs some action in a Suite widget, an event is fired. You can use this event to detect an action and run the required code.

~~~jsx {6-8} title="Grid.vue"
// ...

mounted() {
    this.grid_widget = new Grid(this.$refs.grid_container, {});

    this.grid_widget..events.on("scroll", function({top,left}){
        console.log("The grid is scrolled to "+top,left);
    });
}

// ...
~~~

Now you know how to integrate and configure any Suite widget with Vue. You can customize the code according to your specific requirements. The extended example you can find on [**GitHub**](https://github.com/DHTMLX/vue-suite-demo).
