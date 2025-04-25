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

## Create a project

:::info
Before you start to create a new project, install [**Vite**](https://vite.dev/) (optional) and [**Node.js**](https://nodejs.org/en/).
:::

You can create a basic **React** project or use **React with Vite**. Let's name the project as ***my-react-suite-app***:

~~~json
// Step 1
npx create-react-app my-react-suite-app
~~~

Go to the new created app directory:

~~~json
// Step 2
cd my-react-suite-app
~~~

Install dependencies and start the dev server:

- if you use [**yarn**](https://yarnpkg.com/), run the following commands:

~~~json
// Step 3
yarn
yarn start
~~~

- if you use [**npm**](https://www.npmjs.com/), run the following commands:

~~~json
// Step 3
npm install
npm run dev
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Install Suite sources

Now you should get the DHTMLX Suite source code. First of all, stop the app and proceed with installing the Suite package.

:::note
Download the [**trial Suite package**](../../#installing-trial-dhtmlx-suite-via-npm-and-yarn) and follow steps mentioned in the README file. Note that trial Suite is available 30 days only.
:::

## Create component

Now you can create corresponding React components based on Suite widgets. For each Suite widget you can create a new file in the ***src/*** directory.

### Import source files

Open the ***ComponentName.jsx*** file and import widget source files. Note that:

- if you use PRO version and install the Suite package from a local folder, the import paths look like this:

~~~jsx title="ComponentName.jsx"
import { SuiteWidgetName } from 'dhx-suite-package';
import 'dhx-suite-package/codebase/suite.css';
~~~

Note that depending on the used package, the source files can be minified. In this case make sure that you are importing the CSS file as ***suite.min.css***.

- if you use the trial version of Suite, specify the following paths:

~~~jsx title="ComponentName.jsx"
import { SuiteWidgettName } from '@dhx/trial-suite';
import "@dhx/trial-suite/codebase/suite.min.css";
~~~

In this tutorial you can see how to configure the **trial** version of Suite widgets.

### Set container and add a Suite widget

To display a Suite widget on the page, you need to create container and initialize the widget using the corresponding constructor:

~~~jsx {2,6-7,10-11,13-17} title="ComponentName.jsx"
import { useEffect, useRef } from "react";
import { SuiteWidgetName } from '@dhx/trial-suite'; // import a Suite widget
import "@dhx/trial-suite/codebase/suite.min.css"; // import Suite styles

export default function ComponentName(props) {
    let widget_container = useRef(); // initialize container for a Suite widget

    useEffect(() => {
        // initialize a Suite widget
        const suite_widget = new SuiteWidgetName(widget_container.current, {
            // configuration properties
        });

        return () => {
            suite_widget.destructor(); // destruct a Suite widget
        };
    }, []);

    return  <div className="component_container">
                <div ref={widget_container} className="widget"></div>
            </div>
}
~~~

### Add styles

To display Suite widgets correctly, you need to specify important styles a widget and its container in the main css file of the project:

~~~css title="index.css"
/* specify styles for initial page */
html,
body,
#root {
    height: 100%;
    padding: 0;
    margin: 0;
}

/* specify styles for component container */
.component_container {
    height: 100%; 
    margin: 0 auto;
}

/* specify styles for Suite widget container */
.widget {
    height: calc(100% - 56px);
}
~~~

#### Load data

To add data into a Suite widget, you need to provide a data set. You can create the ***data.js*** file in the ***src/*** directory and add some data into it:

~~~jsx {2,12,14} title="data.js"
export function getData() {
    const widget_data_set = [
        {
            // ...
        },
        {
            // ...
        },
        // other items
    ];

    const data_set = [ /* ... */ ];

    return { widget_data_set, data_set };
}
~~~

Then open the ***ComponentName.jsx*** file and import data. After this you can pass data into a Suite widget:

~~~jsx {5,8,14} title="ComponentName.jsx"
import { useEffect, useRef } from "react";
import { SuiteWidgetName } from '@dhx/trial-suite';
import "@dhx/trial-suite/codebase/suite.min.css";

import { getData } from "../../data"; // import data

export default function ComponentName(props) {
    const { widget_data_set } = getData();
    let widget_container = useRef(); // initialize required data

    useEffect(() => {
        // initialize a Suite widget
        const suite_widget = new SuiteWidgetName(widget_container.current, {
            data: widget_data_set,
            // configuration properties
        });

        return () => {
            suite_widget.destructor(); // destruct a Suite widget
        };
    }, []);

    return  <div className="component_container">
                <div ref={widget_container} className="widget"></div>
            </div>
}
~~~

You can also use the `parse()` method within the `useEffect()` method of React to load data into a Suite widget:

~~~jsx {5,8,14} title="ComponentName.jsx"
import { useEffect, useRef } from "react";
import { SuiteWidgetName } from '@dhx/trial-suite';
import "@dhx/trial-suite/codebase/suite.min.css";

import { getData } from "../../data"; // import data

export default function ComponentName(props) {
    const { widget_data_set } = getData(); // initialize required data
    let widget_container = useRef(); 

    useEffect(() => {
        // initialize a Suite widget
        const suite_widget = new SuiteWidgetName(widget_container.current, {
            data: widget_data_set
            // configuration properties
        });

        return () => {
            suite_widget.destructor(); // destruct a Suite widget
        };
    }, []);

    return  <div className="component_container">
                <div ref={widget_container} className="widget"></div>
            </div>
}
~~~

### Handle events

When a user performs some action in a Suite widget, it invokes an event. You can use this event to detect the action and run the desired code for it.

Open ***ComponentName.jsx*** and complete the `useEffect()` method as follows:

~~~jsx {5-7} title="ComponentName.jsx"
// ...
useEffect(() => {
    const widget_name = new SuiteWidgetName(widget_container.current, {});

    widget_name.events.on("click", (obj) => {
        console.log(obj);
    });
    
    return () => {
        widget_name?.destructor();
    };
}, []);
// ...
~~~

Now you know how to integrate DHTMLX Suite widgets with React. You can customize the code according to your specific requirements. The final advanced example you can find on [**GitHub**](https://github.com/DHTMLX/react-suite-demo).
