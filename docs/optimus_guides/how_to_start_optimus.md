---
sidebar_label: How to start with Optimus
title: How to Start with Optimus 
description: You can explore how to start with Optimus in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# How to start with Optimus

This guide shows step by step how to create a simple application with DHTMLX Optimus, a lightweight JavaScript UI framework.

You will learn how to create your own views with DHTMLX Optimus and DHTMLX Suite, and how to exchange data between views and components from any point of the application.

{{note The complete source code is available on <a href="https://github.com/DHTMLX/optimus-starter-app/tree/guide/step-5" target="_blank">GitHub</a>. Switch between the branches with the related names to see the changes step by step.}}

For more information about DHTMLX Suite components, see **DHTMLX documentation**. For details on DHTMLX Optimus, see the [DHTMLX Optimus documentation](/optimus_guides/).

Configure the environment
------------------------

### Prepare the environment {#preparing-the-environment}

In this tutorial, we work with the <a href="https://github.com/DHTMLX/optimus-starter-app/" target="_blank">environment</a> that we've already configured with <a href="https://webpack.js.org" target="_blank">webpack</a>.

The project has the following structure:

~~~html
optimus_demo_guide
|── build/
└── src/
   |── assets/
   |── static/
   |── views/
   |── index.html
   └── index.js    
~~~

- Root directory: contains the configuration files of the project and environment
- `build/` folder: contains the scripts that run webpack
- `src/` folder: contains the application source code
- `src/index.js`: the entry point of the application
- `views/` folder: stores the view files. We recommend keeping one view per file.

### Add the dependencies {#adding-the-dependencies}

Download the <a href="https://github.com/DHTMLX/optimus-starter-app/tree/guide/step-1" target="_blank">initial project from GitHub</a>. Unzip the project and install the dependencies from the `package.json` file with the following command:

~~~js
npm install
~~~

To run the project on the local server, use:

~~~js
npm start
~~~

This video shows how to install Optimus and start developing your web app.

<iframe width="704" height="400" src="https://www.youtube.com/embed/zDg37M9K9O0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Step 1. Initialize an application
--------------------------------

{{note The full code for Step 1 is available on <a href="https://github.com/DHTMLX/optimus-starter-app/tree/guide/step-1" target="_blank">GitHub</a>. }}

Run the <a href="https://github.com/DHTMLX/optimus-starter-app/tree/guide/step-1" target="_blank">project</a> on the local server and open `http://localhost:8080/` in your browser. You see the following result:

![Browser showing the Hello Optimus starter app running on localhost in DHTMLX Suite](/img/optimus/start_optimus.png)

We've initialized the starter application in the following steps:

1\. We've created a new `index.html` file in the `src` folder and defined a container to render the app in:

~~~html title="index.html"
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>dhtmlxOptimus guide</title>
    </head>
    <body>
        <!-- Create a container with the unique id -->
        <section id="app" class="main__container"></section>
    </body>
</html>
~~~

2\. We've created an `index.js` file, the entry point of the app:

~~~js title="src/index.js"
// import css styles
import "./assets/css/index.css"; 
// import the App class from the "dhx-optimus" library
import { App } from "dhx-optimus";

export class MyApp extends App {}
~~~

The `MyApp` class extends the `App` class and renders the application.

For details about the CSS styles of the app, see the <a href="https://github.com/DHTMLX/optimus-starter-app/blob/guide/step-1/src/assets/css/index.css" target="_blank">index.css</a> file.

3\. We've added the first view with simple text. For that, we've created the `TopLayout.js` file in the `views` folder:

{{note We recommend starting the name of a view file with a capital letter, for example, `TopLayout.js`. This is common practice.}}

~~~js title="src/views/TopLayout.js"
// import the View class from the "dhx-optimus" library
import { View } from "dhx-optimus";

export class TopLayout extends View {
    init() {
        return `<h1>Hello Optimus!</h1>`;
    }
}
~~~

The `TopLayout` class extends the `View` class. To define the initial view, the `init()` method returns an HTML element.

4\. To render the new view, we've imported it into the `index.js` file and rendered it with the `show()` method:

~~~js title="src/index.js" {4,7-9}
import "./assets/css/index.css";

import { App } from "dhx-optimus";
import { TopLayout } from "./views/TopLayout"; 

export class MyApp extends App {
    init() { 
        this.show(null, TopLayout); 
    } 
}
~~~

For more details, see the [API methods](/optimus_guides/#api).

5\. We've initialized the application in the `index.html` file:

~~~html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>dhtmlxOptimus guide</title>
        <!-- Suite -->
        <script type="text/javascript" src="https://cdn.dhtmlx.com/suite/edge/suite.js"></script>
        <link rel="stylesheet" href="https://cdn.dhtmlx.com/suite/edge/suite.css" />
        <!-- App -->
        <script type="text/javascript" src="./app.js"></script>
        <link rel="stylesheet" href="./app.css" />
    </head>
    <body>
        <section id="app" class="main__container"></section>
        <script>
            const app = new optimusguide.MyApp();
            app.render("#app");
        </script>
    </body>
</html>
~~~

This code does the following:

- We've included a free version of DHTMLX from our CDN. DHTMLX Optimus needs the DHTMLX Suite files as dependencies to work correctly.
- We've included the `app.js` and `app.css` files to configure webpack.
- We've initialized the app with the `render()` method, which takes the ID of the container as a parameter.

Now you can add the code from the next steps to the initial project.

Step 2. Add views using DHTMLX Suite
--------------------

<iframe width="704" height="400" src="https://www.youtube.com/embed/OSXrQYqEDig" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

###

{{note The full code for Step 2 is available on <a href="https://github.com/DHTMLX/optimus-starter-app/tree/guide/step-2" target="_blank">GitHub</a>.}}

In this step, you create several views with DHTMLX Suite widgets and use the global event bus to switch between them.

### Add the Toolbar view {#adding-the-toolbar-view}

The app needs a toolbar to switch between views, so start with a view based on the DHTMLX Toolbar widget. Create the `ToolbarView.js` file in the `views` folder and add the following code:

~~~js title="src/views/ToolbarView.js"
import { View } from "dhx-optimus";

export class ToolbarView extends View {
    init() {
        this.toolbar = new dhx.Toolbar(null, {
            css: "toolbar",
            data: [
                {
                    type: "spacer",
                },
                {
                    id: "first",
                    value: "First",
                    group: "views",
                },
                {
                    id: "second",
                    value: "Second",
                    group: "views",
                },
                {
                    id: "third",
                    value: "Third",
                    group: "views",
                },
                {
                    type: "spacer",
                },
            ],
        });

        return this.toolbar;
    }
}
~~~

In this code:

- We've configured DHTMLX Toolbar in the `init()` method. The method returns the toolbar as a view.
- **Note** that when you use a DHTMLX widget as a view, you must set its container to `null`.

### Add the child view {#adding-the-child-view}

Create a child view. The view renders the id of the button selected in the toolbar. In the `views` folder, create the `EmptyView.js` file with the following content:

~~~js title="src/views/EmptyView.js"
import { View } from "dhx-optimus";

export class EmptyView extends View {
    init() {
        return `
        <div class="empty__container">
            This is the ${this.params.content || "empty"} view
        </div>`;
    }
}
~~~

The child view gets the id from `params`.

### Render the views {#rendering-views}

To render the `EmptyView` and `ToolbarView` views, update the `Toplayout.js` file with the following code:

~~~js title="src/views/Toplayout.js"
import { View } from "dhx-optimus";

import { ToolbarView } from "./ToolbarView";
import { EmptyView } from "./EmptyView";

export class TopLayout extends View {
    init() {
        return (this.layout = new dhx.Layout(null, {
            rows: [
                {
                    id: "toolbar",
                    height: "content",
                    init: cell => this.show(cell, ToolbarView),
                },
                {
                    id: "content",
                    init: cell => this.show(cell, EmptyView),
                },
            ],
        }));
    }
}
~~~

In this code, we've returned Layout as a view and placed the `EmptyView` and `ToolbarView` views into the layout cells.

The `show()` method renders the views. For details about rendering DHTMLX Suite components, see the [documentation](/optimus_guides/#initialization-of-the-dhtmlx-layout-component).

If you run the app now, nothing happens when you click the toolbar buttons. To fix this, add global events.

### Add the global event bus {#adding-the-global-event-bus}

Global events are the best way to exchange data between components.

Open the `ToolbarView.js` file and add a handler for the toolbar `click` event in the `ready()` method:

~~~js title="src/views/ToolbarView.js"
import { View } from "dhx-optimus";

export class ToolbarView extends View {
    init() {
        ...
    }

    ready() {
        this.toolbar.events.on("click", id => {
            this.fire("viewChange", [id]);
        });
    }
}
~~~

Inside the `click` event handler, the `fire()` method calls the global `viewChange` event. As a result, the `viewChange` event fires whenever the user clicks a toolbar button.

Now update the `TopLayout` view to listen to the `viewChange` event:

~~~js title="src/views/TopLayout.js"
import { View } from "dhx-optimus";

import { ToolbarView } from "./ToolbarView";
import { EmptyView } from "./EmptyView";

export class TopLayout extends View {
    init() {
        ...
    }

    ready() {
        // initialize the global event handler
        this.on("viewChange", id => {
            this.show(this.layout.getCell("content"), EmptyView, { content: id });
        });
    }
}
~~~

This code adds a handler for the global `viewChange` event.

The view now follows the changes in the global event bus. Each time the user clicks a toolbar button, the `show()` method re-renders the `EmptyView` view and passes the id of the selected button to it.

The result looks like this:

![Starter app with a First, Second, Third toolbar showing the empty view in DHTMLX Suite](/img/optimus/empty_view.png)

After you click the "Second" button, you see the following view:

![Starter app with the Second toolbar button selected showing the second view in DHTMLX Suite](/img/optimus/second_view.png)

For more details, see the following topics:

- [Pass parameters to child components](/optimus_guides/#passing-data-to-child-components)
- [Use the global event bus](/optimus_guides/#subscribing-to-global-events)
- [Work with the DHTMLX Suite library in views](/optimus_guides/#working-with-widgets-of-suite)

Step 3. Define the global state of the app
--------------------------------

<iframe width="704" height="400" src="https://www.youtube.com/embed/6P-YevyewZI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*This step shows how to define the global state of the app and observe its changes.*

{{note The full code for Step 3 is available on <a href="https://github.com/DHTMLX/optimus-starter-app/tree/guide/step-3" target="_blank">GitHub</a>.}}

You have already learned how to pass data to child components and use the global event bus.

Now meet the `dhx-optimus-store` state manager. It saves the app state. After the state changes, you can get it asynchronously from any point of the app.

If you haven't installed `dhx-optimus-store` yet, run the following command in the root directory:

~~~js
npm i dhx-optimus-store
~~~

Initialize the state manager in the application. Open the `index.js` file and update its code:

~~~js title="src/index.js"
import "./assets/css/index.css";

import { App } from "dhx-optimus";
// import the state manager from "dhx-optimus-store"
import Store from "dhx-optimus-store";

import { TopLayout } from "./views/TopLayout";

// define the initial state of the app
const initialState = {
    active: "first",
};

export class MyApp extends App {
    init() {
        // initialize a global store
        this.store = new Store(initialState);
        // assign the "store" key to the public "params" property
        this.params.store = this.store;
        // get the current state of the global store
        this.state = this.store.getState();

        this.show(null, TopLayout);

        this.subscribe();
    }

    subscribe() {
        this.on("viewChange", id => {
            this.state.active = id;
        });
    }
}
~~~

This code does the following:

- The `initialState` constant defines the initial state of the app. It is an object with a `key:value` pair. The `active` property is one of the app states, and you can add more states if needed.
- The `Store` class creates the global store from `initialState`. The app saves the store to the public `store` property and to the `store` key of the public `params` property. With `this.params.store.getState()`, you can get the value of the global store at any point of the app. However, this way does not let you observe changes of the app state in real time, so the next code samples use the `observe()` method.
- The `getState()` method returns the current state of the global store, and the app saves it to the public `state` property.

The global event bus changes the state of the app. When the user clicks a toolbar button, the toolbar view fires the global `viewChange` event, and the app passes the id of the selected button to the `active` property as the new app state.


To observe changes in the global store asynchronously from any point of the app, add the `observe()` method to the `ToolbarView` and `TopLayout` views.

The updated `ToolbarView.js` file contains the following code:

~~~js title="src/views/ToolbarView.js"
import { View } from "dhx-optimus";

export class ToolbarView extends View {
    init() { ... }

    ready() {
        this.observe(
            state => state.active,
            active => {
                this.toolbar.select(active);
            }
        );

        this.toolbar.events.on("click", id => {
            this.fire("viewChange", [id]);
        });
    }
}
~~~

Now, after the `active` state of the app changes, the `select()` method of the toolbar sets the current state of the toolbar.

The updated `TopLayout.js` file looks like this:

~~~js title="src/views/TopLayout.js"
import { View } from "dhx-optimus";

import { ToolbarView } from "./ToolbarView";
import { EmptyView } from "./EmptyView";

export class TopLayout extends View {
    init() {
        return (this.layout = new dhx.Layout(null, {
            rows: [
                {
                    id: "toolbar",
                    height: "content",
                    init: cell => this.show(cell, ToolbarView),
                },
                {
                    id: "content"
                },
            ],
        }));
    }

    ready() {
        this.observe(
            state => state.active,
            active => {
              this.show(this.layout.getCell("content"), EmptyView, {content: active});
            }
        );
    }
}
~~~

The layout no longer renders a default view in the `"content"` cell on initialization. Instead, the `observe()` method shows the view for the initial value of the `active` property. In this example, we've set the `active` property to `"first"`.

Run the application. The first view is now the default active view:

![Starter app with the First toolbar button active by default showing the first view in DHTMLX Suite](/img/optimus/first_view.png)

On initialization, the app passes the id of the default active button to the state manager.

Step 4. Add DHTMLX components: DataView, Chart, Grid
------------

<iframe width="704" height="400" src="https://www.youtube.com/embed/S5qUkoOiBXs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*This step shows how to add DHTMLX widgets to your application.*

{{note The full code for Step 4 is available on <a href="https://github.com/DHTMLX/optimus-starter-app/tree/guide/step-4" target="_blank">GitHub</a>.}}

In this step, you add the DataView, Chart, and Grid widgets to the app. Follow the steps below:

1\. Delete the `EmptyView.js` file. The app no longer needs the `EmptyView` class.

2\. Navigate to the `src/assets` folder and create a new `data.js` file to save the initial data of the app. For example:

~~~js title="src/assets/data.js"
export const data = [
    {
        name: "Theo Fisher",
        post: "Head of department",
        phone: "(405) 632-1372",
        mail: "tfisher@gmail.com",
        birthday: "09.12.1987",
        start: "04.02.2018",
    },
    {
        name: "Francesca Saunders",
        post: "Attending physician",
        phone: "(402) 371-6736",
        mail: "fsaunders@gmail.com",
        birthday: "25.05.1997",
        start: "12.09.2019",
    },
    {
        name: "Jenson Brown",
        post: "Fellow",
        phone: "(346) 622-8633",
        mail: "jbrown@gmail.com",
        birthday: "03.10.1970",
        start: "06.02.1998",
    },
// more options
];
~~~

In a real app, you can get the data from the server with an AJAX request.

3\. Initialize DHTMLX `DataCollection` in the `MyApp` class to simplify data exchange between the DHTMLX widgets:

~~~js title="src/index.js"
...
import { data } from "./assets/data/data";
...

export class MyApp extends App {
    init() {
        ...
        this.persons = new dhx.DataCollection();
        this.persons.parse(data);

        this.show(null, TopLayout, { persons: this.persons });
        ...
    }

    subscribe() {
        ...
    }
}
~~~

- We've initialized `DataCollection` in the public `persons` property.
- To parse data into the data collection, we've used the `parse()` method. When you work with a server, you can use other data loading methods, for example, the [`load()`](data_collection/api/datacollection_load_method.md) method.
- We've passed the data collection to the `TopLayout` view as the third parameter of the `show()` method.

4\. Create the `views/content` folder and add the DataView, Chart, and Grid views to it:

- Create the `DataView.js` file and add a view based on the Suite [DataView widget](/dataview/):

~~~js title="src/views/content/DataView.js"
import { View } from "dhx-optimus";

export class DataView extends View {
    init() {
        return new dhx.DataView(null, {
            data: this.params.dataCollection,
            itemsInRow: 2,
            gap: 20,
            template: ({ name, post }) => `
                <div class="personal-card">
                    <div class="personal-card__container">
                        <h3>${name}</h3>
                        <p>${post}</p>
                    </div>
                </div>
            `,
        });
    }
}
~~~

- Create the `ChartView.js` file and add a view based on the Suite [Chart widget](/chart/):

~~~js title="src/views/content/ChartView.js"
import { View } from "dhx-optimus";
import { getChartStatistic } from "../../utils/helpers";

export class ChartView extends View {
    init() {
        return new dhx.Chart(null, {
            css: "chart",
            type: "donut",
            series: [
                {
                    value: "value",
                    color: "color",
                    text: "post",
                },
            ],
            legend: {
                values: {
                    id: "id",
                    text: "post",
                    color: "color",
                },
                halign: "center",
                valign: "bottom",
            },
            data: getChartStatistic(this.params.dataCollection.serialize()),
        });
    }
}
~~~

The `getChartStatistic` function prepares the data for Chart. For details on the function, see the <a href="https://github.com/DHTMLX/optimus-starter-app/blob/guide/step-4/src/utils/helpers.js" target="_blank">utils/helpers.js</a> file.

- Create the `GridView.js` file and add a view based on the Suite [Grid widget](/grid/):

~~~js title="src/views/content/GridView.js"
import { View } from "dhx-optimus";

export class GridView extends View {
    init() {
        return new dhx.Grid(null, {
            columns: [
                { id: "name", header: [{ text: "Name" }] },
                { id: "post", header: [{ text: "Post" }] },
                { id: "phone", header: [{ text: "Phone" }] },
                { id: "mail", header: [{ text: "Mail" }] },
                { id: "birthday", header: [{ text: "Birthday" }], type: "date" },
                { id: "start", header: [{ text: "Start" }], type: "date" },
            ],
            autoWidth: true,
            data: this.params.dataCollection,
        });
    }
}
~~~

These three widgets get their data from the `params` property that the parent component passes to them.

- Render the widgets. The app shows a widget depending on the button selected in the toolbar. Open the `TopLayout.js` file and update its code:

~~~js title="src/views/TopLayout.js"
import { View } from "dhx-optimus";

import { ToolbarView } from "./ToolbarView";
import { DataView } from "./content/DataView";
import { ChartView } from "./content/ChartView";
import { GridView } from "./content/GridView";

export class TopLayout extends View {
    init() {
        return (this.layout = new dhx.Layout(null, {
            rows: [
                {
                    id: "toolbar",
                    height: "content",
                    init: cell => this.show(cell, ToolbarView),
                },
                {
                    id: "content"
                },
            ],
        }));
    }

    ready() {
        this.observe(
            state => state.active,
            active => {
                switch (active) {
                    case "first":
                        this.show(this.layout.getCell("content"), DataView, {
                            dataCollection: this.params.persons,
                        });
                        break;
                    case "second":
                        this.show(this.layout.getCell("content"), ChartView, {
                            dataCollection: this.params.persons,
                        });
                        break;
                    case "third":
                        this.show(this.layout.getCell("content"), GridView, {
                            dataCollection: this.params.persons,
                        });
                        break;
                }
            }
        );
    }
}
~~~

As a result, when the active state changes, the app renders the related component on the page.

Run the application. The first page shows the DataView widget:

![DataView widget displaying employee cards with names and positions on the first page in DHTMLX Suite](/img/optimus/dataview.png)

The second page shows the Chart widget:

![Donut chart showing the number of employees by position on the second page in DHTMLX Suite](/img/optimus/chart.png)

The third page shows the Grid widget:

![Grid listing employees with name, post, phone, mail and dates on the third page in DHTMLX Suite](/img/optimus/grid.png)

Step 5. Provide editing data 
--------------

<iframe width="704px" height="400px" src="https://www.youtube.com/embed/B0q1bZm7vFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

*This step describes how to work with DHTMLX Suite widgets. You can skip it if you only want to learn what DHTMLX Optimus can do.*

{{note The full code for Step 5 is available on <a href="https://github.com/DHTMLX/optimus-starter-app/tree/guide/step-5" target="_blank">GitHub</a>.}}

In the previous steps, we've configured data exchange between the components and asynchronous observation of data changes. However, the widgets are still static.

Now make the widgets interactive and let users add and remove data:

1\. Extend the `ToolbarView` class with the "Remove" and "Add" buttons:

~~~js title="src/views/ToolbarView.js"
import { View } from "dhx-optimus";

export class ToolbarView extends View {
    init() {
        return (this.toolbar = new dhx.Toolbar(null, {
            css: "toolbar",
            data: [
                {
                    type: "title",
                    value: "DHTMLX Optimus Started Demo",
                },
                {
                    type: "spacer",
                },
                {
                    id: "first",
                    value: "First",
                    group: "views",
                },
                {
                    id: "second",
                    value: "Second",
                    group: "views",
                },
                {
                    id: "third",
                    value: "Third",
                    group: "views",
                },
                {
                    type: "spacer",
                },
                {
                    id: "remove",
                    icon: "dxi dxi-delete",
                    circle: true,
                },
                {
                    id: "add",
                    icon: "dxi dxi-plus",
                    circle: true,
                },
            ],
        }));
    }
}
~~~

Add the `removeItem` and `addItem` global events to the `ready()` method. Also extend the `observe()` method so that the new buttons are active only in the relevant views:

~~~js title="src/views/ToolbarView.js"
import { View } from "dhx-optimus";

export class ToolbarView extends View {
    init() {
        ...
    }
    ready() {
        this.actionButtons = ["remove", "add"];

        this.observe(
            state => state.active,
            active => {
                this.showActionButtons();

                switch (active) {
                    case "second":
                        this.hideActionButtons();
                        break;

                    case "first":
                        this.toolbar.disable("add");
                        break;
                }

                this.toolbar.select(active);
            }
        );

        this.toolbar.events.on("click", id => {
            switch (id) {
                case "first":
                case "second":
                case "third":
                    this.fire("viewChange", [id]);
                    break;
                case "remove":
                    this.fire("removeItem", []);
                    break;
                case "add":
                    this.fire("addItem", []);
                    break;
            }
        });
    }

    hideActionButtons() {
        this.toolbar.disable(this.actionButtons);
    }

    showActionButtons() {
        this.toolbar.enable(this.actionButtons);
    }
}
~~~

2\. Extend the `DataView` class with a handler for the `removeItem` event:

~~~js title="src/views/content/DataView.js"
import { View } from "dhx-optimus";

export class DataView extends View {
    init() {
        return (this.dataView = new dhx.DataView(null, {
            keyNavigation: true,
            data: this.params.dataCollection,
            itemsInRow: 2,
            gap: 20,
            template: ({ name, post }) => `
                <div class="personal-card">
                    <div class="personal-card__container">
                        <h3>${name}</h3>
                        <p>${post}</p>
                    </div>
                </div>
            `,
        }));
    }

    ready() { 
        this.on("removeItem", () => {
            const selected = this.dataView.selection.getItem();
            if (selected) {
                this.dataView.data.remove(selected.id);
            }
        });
    }
}
~~~

When the `removeItem` event fires, the handler removes the selected card, if any.

3\. Extend the `GridView` class. Set the [`editable: true`](grid/api/grid_editable_config.md) configuration property to make the grid editable, and the [`selection: "row"`](grid/api/grid_selection_config.md) configuration property to enable row selection. The code looks like this:

~~~js title="src/views/content/GridView.js"
import { View } from "dhx-optimus";
import { emptyItem } from "../../assets/data/data";

export class GridView extends View {
    init() {
        const postUniq = this.params.dataCollection
            .map(item => {
                return item.post;
            })
            .filter((value, index, self) => {
                return self.indexOf(value) === index;
            });

        this.grid = new dhx.Grid(null, {
            columns: [
                { id: "name", header: [{ text: "Name" }] },
                { id: "post", header: [{ text: "Post" }], editorType: "select", 
                    options: postUniq },
                { id: "phone", header: [{ text: "Phone" }] },
                { id: "mail", header: [{ text: "Mail" }] },
                { id: "birthday", header: [{ text: "Birthday" }], type: "date", 
                    dateFormat: "%d.%m.%Y" },
                { id: "start", header: [{ text: "Start" }], type: "date", 
                    dateFormat: "%d.%m.%Y" },
            ],
            autoWidth: true,
            selection: "row",
            editable: true,
            data: this.params.dataCollection,
        });

        return this.grid;
    }
}
~~~

Add handlers for the `removeItem` and `addItem` global events:

~~~js title="src/views/content/GridView.js"
...
export class GridView extends View {
  init() {
    ...
    this.on("removeItem", () => {
      const selected = this.grid.selection.getCell();
      if (selected) {
        this.grid.data.remove(selected.row.id);
      }
    });

    this.on("addItem", () => {
      const selected = this.grid.selection.getCell();
      if (selected) {
        this.grid.data.add({ ...emptyItem }, this.grid.data.getIndex(selected.row.id) + 1);
      } else {
        this.grid.data.add({ ...emptyItem }, 0);
      }
    });
    ...
  }
}
~~~

4\. Add the following code to the `src/assets/data/data.js` file:

~~~js
...
export const emptyItem = {
    name: "",
    post: "",
    phone: "",
    mail: "",
    birthday: "",
    start: "",
};
~~~

Open `http://localhost:8080/` to see the DataView:

![DataView of employee cards with a toolbar offering add and remove actions in DHTMLX Suite](/img/optimus/edit_dataview.png)

Click the second button to see the chart view:

![Donut chart of employees by position shown on the second page of the demo in DHTMLX Suite](/img/optimus/edit_chart.png)

Click the third button to see the grid view. Double-click a cell in the grid to edit it.

![Editable employee grid with a mail cell being edited inline in DHTMLX Suite](/img/optimus/edit_grid.png)

Note that when you change data in one widget, the data in the other widgets changes too.

What's next
---------------

Now you know how to build a DHTMLX-based app with DHTMLX Optimus, create your own views, and exchange data between any points of the app with the global event bus and the state manager.

You can find the initial code on <a href="https://github.com/DHTMLX/optimus-starter-app/" target="_blank">GitHub</a>, clone or download it and use it for your projects.

For details about API methods of DHTMLX Optimus, see [the documentation](/optimus_guides/).

See more demos built with Optimus:

- [File Explorer](https://dhtmlx.com/docs/products/demoApps/dhtmlxFileExplorerDemo/)
- [UI Dashboard](https://dhtmlx.com/docs/products/demoApps/dhtmlxDashboard/)
- [Hotel Management Template](https://dhtmlx.com/docs/products/demoApps/dhtmlxHotelManagement/)
- [Geo Tracking](https://dhtmlx.com/docs/products/demoApps/dhtmlxGeoTracking/)
- [Hospital Management](https://dhtmlx.com/docs/products/demoApps/dhtmlxHospital/)
- [Sales KPI Tracking](https://dhtmlx.com/docs/products/demoApps/dhtmlxKPI/)
- [Online Exam System](https://dhtmlx.com/docs/products/demoApps/dhtmlxExam/) 