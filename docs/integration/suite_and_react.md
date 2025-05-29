---
sidebar_label: Integration with React
title: Integration DHTML Suite with React
description: You can explore how to use DHTMLX Suite Widgets with React. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Integration Suite widgets with React

:::tip
You should be familiar with the basic concepts and patterns of [**React**](https://react.dev) before reading this documentation. To refresh your knowledge, please refer to the [**React documentation**](https://reactjs.org/docs/getting-started.html).
:::

DHTMLX Suite widgets are compatible with [**React**](https://react.dev). For more information, refer to the corresponding example on GitHub: [DHTMLX Suite with React Demo](https://github.com/DHTMLX/react-suite-demo).

## Create new React project

:::info
Before you start to create a new project, install [**Vite**](https://vite.dev/) (optional) and [**Node.js**](https://nodejs.org/en/). You can create a basic **React** project or use **React with Vite**.
:::

Step 1. Create a project and name it as ***my-react-suite-app***:

~~~bash
npx create-react-app my-react-suite-app
~~~

Step 2. Go to the project directory:

~~~bash
cd my-react-suite-app
~~~

Step 3. Install dependencies and start the dev server:

- if you use [**yarn**](https://yarnpkg.com/), run the following commands:

~~~bash
yarn
yarn start
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

## Create React component

Now you can create React components (wrappers) based on Suite widgets. For each complex Suite widget you can create a separate file (for instance [***Grid.jsx***](https://github.com/DHTMLX/react-suite-demo/blob/master/src/Content/LeftPanel/Grid.jsx)) in the [***src/***](https://github.com/DHTMLX/react-suite-demo/blob/master/src) directory.

### Import source files

Open the ***Grid.jsx*** file and import the corresponding Suite widget. Note that:

- if you use PRO version and install the Suite package from a local folder, the import paths look as follows:

~~~jsx title="Grid.jsx"
import { SuiteWidgetName } from 'dhx-suite-package'; // import { Grid, Pagination, ... } from 'dhx-suite-package';
import 'dhx-suite-package/codebase/suite.css'; // import Suite styles
~~~

Note that depending on the used package, the source files can be minified. In this case, make sure that you import the CSS file as ***suite.min.css***.

- if you use the trial version of Suite, the import paths look as follows:

~~~jsx title="Grid.jsx"
import { SuiteWidgetName } from '@dhx/trial-suite'; // import { Grid, Pagination, ... } from '@dhx/trial-suite';
import "@dhx/trial-suite/codebase/suite.min.css"; // import Suite styles
~~~

In this guide you can find basic concepts on how to utilize the **trial** version of Suite widgets.

### Initialize Suite widget(s) within a container

To display a Suite widget on a page, you need to create a container and initialize a widget through the corresponding constructor:

~~~jsx {3,8,12-14,22} title="Grid.jsx"
import { useEffect, useRef } from "react";
// import a Suite widget
import { Grid } from '@dhx/trial-suite';
// import Suite styles
import "@dhx/trial-suite/codebase/suite.min.css"; 
// create and export the React component
export default function GridComponent() {
    let grid_container = useRef(); // initialize container for a Suite widget

    useEffect(() => {
        // initialize a Suite widget
        const grid_widget = new Grid(grid_container.current, {
            // configuration properties here
        });

        return () => {
            grid_widget.destructor(); // destruct a Suite widget
        };
    }, []);

    return  <div className="component_container">
                <div ref={grid_container} className="widget"></div>
            </div>
}
~~~

### Load data

To add data into a Suite widget, you need to provide a data set. You can create the [***data.js***](https://github.com/DHTMLX/react-suite-demo/blob/master/src/data.js) file in the ***src/*** directory and add required data sets:

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

~~~jsx {5,8,14} title="Grid.jsx"
import { useEffect, useRef } from "react";
import { Grid } from '@dhx/trial-suite';
import "@dhx/trial-suite/codebase/suite.min.css";

import { getData } from "../../data"; // 1. import predefined data

export default function Grid() {
    const { gridData } = getData(); // 2. initialize the required data set 
    let grid_container = useRef(); 

    useEffect(() => {
        // initialize a Suite widget with data
        const grid_widget = new Grid(grid_container.current, {
            data: gridData, // 3. set the `data` property to the predefined data set
            // other configuration properties
        });

        return () => {
            grid_widget.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={grid_container} className="widget"></div>
            </div>
}
~~~

#### Specify data through the method

To load predefined data into a Suite widget, you can also call the `parse()` method:

~~~jsx {5,8,17} title="Grid.jsx"
import { useEffect, useRef } from "react";
import { Grid } from '@dhx/trial-suite';
import "@dhx/trial-suite/codebase/suite.min.css";

import { getData } from "../../data"; // 1. import predefined data

export default function Grid() {
    const { gridData } = getData(); // 2. initialize the required data set
    let grid_container = useRef(); 

    useEffect(() => {
        // initialize a Suite widget without data
        const grid_widget = new Grid(grid_container.current, {
            // configuration properties here
        });

        grid_widget.data.parse(gridData); // 3. call the parse() method and pass data as a parameter

        return () => {
            grid_widget.destructor();
        };
    }, []);

    return  <div className="component_container">
                <div ref={grid_container} className="widget"></div>
            </div>
}
~~~

:::tip
You can call any Suite widget method as follows: `suite_widget.someMethod()`
:::

### Handle events

When a user performs some action in a Suite widget, an event is fired. You can use this event to detect an action and run the required code.

~~~jsx {6-8} title="Grid.jsx"
// ...

useEffect(() => {
    const grid_widget = new Grid(grid_container.current, {});

    grid_widget.events.on("scroll", function({top,left}){
        console.log("The grid is scrolled to "+top,left);
    });
    
    //...
}, []);

// ...
~~~

Now you know how to integrate and configure any Suite widget with React. You can customize the code according to your specific requirements. The extended example you can find on [**GitHub**](https://github.com/DHTMLX/react-suite-demo).
