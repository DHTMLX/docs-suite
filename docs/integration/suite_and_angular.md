---
sidebar_label: Integration with Angular
title: Integration DHTML Suite with Angular
description: You can explore how to use DHTMLX Suite Widgets with Angular. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Integration Suite widgets with Angular

:::tip
You should be familiar with basic concepts and patterns of **Angular** before reading this documentation. To refresh your knowledge, please refer to the [**Angular documentation**](https://angular.io/docs).
:::

DHTMLX Suite is compatible with **Angular**. For more information, refer to the corresponding example on GitHub: [DHTMLX Suite with Angular Demo](https://github.com/DHTMLX/angular-suite-demo).

## Create new Angular project

:::info
Before you start to create a new project, install [**Angular CLI**](https://angular.io/cli) and [**Node.js**](https://nodejs.org/en/).
:::

Step 1. Create a project and name it as ***my-angular-suite-app***:

~~~bash
ng new my-angular-suite-app
~~~

:::note
If you want to follow this guide, disable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering) when creating new Angular app!
:::

The command above installs all the necessary tools, so you don't need to run any additional commands.

Step 2. Go to the project directory:

~~~bash
cd my-angular-suite-app
~~~

Step 3. Install dependencies and start the dev server. Use the [**yarn**](https://yarnpkg.com/) package manager:

~~~json
yarn
yarn start
~~~

The app should run on a localhost (for instance `http://localhost:3000`).

## Install Suite sources

Install the DHTMLX Suite library to get access to Suite widgets.

:::important
Download the [**trial Suite package**](../../#installing-trial-dhtmlx-suite-via-npm-or-yarn) and follow steps mentioned in the README file. Note that **trial** Suite is available 30 days only.
:::

## Create Angular component

Now you can create Angular components (wrappers) based on Suite widgets. For each complex Suite widget you can create a separate file (for instance [***grid.component.ts***](https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/MainContainer/Content/LeftContent/Grid/grid.component.ts)) in the [***src/***](https://github.com/DHTMLX/angular-suite-demo/tree/master/src) directory.

### Import source files

Open the ***grid.component.ts*** file and import the corresponding Suite widget. Note that:

- if you use PRO version and install the Suite package from a local folder, the import paths look as follows:

~~~jsx title="grid.component.ts"
import { SuiteWidgetName } from 'dhx-suite-package'; // import { Grid, Pagination, ... } from 'dhx-suite-package';
import 'dhx-suite-package/codebase/suite.css'; // import Suite styles
~~~

Note that depending on the used package, the source files can be minified. In this case, make sure that you import the CSS file as ***suite.min.css***.

- if you use the trial version of Suite, the import paths look as follows:

~~~jsx title="grid.component.ts"
import { SuiteWidgetName } from '@dhx/trial-suite'; // import { Grid, Pagination, ... } from '@dhx/trial-suite';
import "@dhx/trial-suite/codebase/suite.min.css"; // import Suite styles
~~~

In this guide you can find basic concepts on how to utilize the **trial** version of Suite widgets.

### Initialize Suite widget(s) within a container

To display a Suite widget on a page, you need to create a container and initialize a widget through the corresponding constructor:

~~~jsx {2,17,23,29-31} title="grid.component.ts"
// import a Suite widget
import { Grid } from '@dhx/trial-suite';
// import Suite styles
import "@dhx/trial-suite/codebase/suite.min.css"; 

import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild
} from "@angular/core";

@Component({
  selector: 'app-grid',
  template: `<div class="component_container">
                <div #grid_container class="widget"></div>
             </div>`
})

// create and export the Angular component
export class GridComponent implements OnInit, OnDestroy {
    @ViewChild('grid_container', { static: true }) grid_container!: ElementRef;

    private _grid_widget!: Grid;

    ngOnInit() {
        // initialize a Suite widget
        this._grid_widget = new Grid(this.grid_container.nativeElement, {
            // configuration properties here
        });
    }

    ngOnDestroy() {
        this._grid_widget?.destructor(); // destruct a Suite widget
    }
}
~~~

### Load data

To add data into a Suite widget, you need to provide a data set. You can create the [***app.data.ts***](https://github.com/DHTMLX/angular-suite-demo/blob/master/src/app/app.data.ts) file in the ***src/*** directory and add required data sets:

~~~jsx {2,27,29} title="app.data.ts"
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

~~~jsx {1,4,27,30} title="grid.component.ts"
import { Grid } from '@dhx/trial-suite';
import "@dhx/trial-suite/codebase/suite.min.css"; 

import { getData } from "../../../app.data"; // 1. import predefined data

import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild
} from "@angular/core";

@Component({
  selector: 'app-grid',
  template: `<div class="component_container">
                <div #grid_container class="widget"></div>
             </div>`
})

export class GridComponent implements OnInit, OnDestroy {
    @ViewChild('grid_container', { static: true }) grid_container!: ElementRef;

    private _grid_widget!: Grid;

    ngOnInit() {
        const { gridData } = getData(); // 2. initialize the required data set 
        // initialize a Suite widget with data
        this._grid_widget = new Grid(this.grid_container.nativeElement, {
            data: gridData, // 3. set the `data` property to the predefined data set
            // other configuration properties
        });
    }

    ngOnDestroy() {
        this._grid_widget?.destructor(); // destruct a Suite widget
    }
}
~~~

#### Specify data through the method

To load predefined data into a Suite widget, you can also call the `parse()` method:

~~~jsx {1,4,27,33} title="grid.component.ts"
import { Grid } from '@dhx/trial-suite';
import "@dhx/trial-suite/codebase/suite.min.css"; 

import { getData } from "../../../app.data"; // 1. import predefined data

import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  ViewChild
} from "@angular/core";

@Component({
  selector: 'app-grid',
  template: `<div class="component_container">
                <div #grid_container class="widget"></div>
             </div>`
})

export class GridComponent implements OnInit, OnDestroy {
    @ViewChild('grid_container', { static: true }) grid_container!: ElementRef;

    private _grid_widget!: Grid;

    ngOnInit() {
        const { gridData } = getData(); // 2. initialize the required data set 
        // initialize a Suite widget without data
        this._grid_widget = new Grid(this.grid_container.nativeElement, {
            // other configuration properties
        });

        this._grid_widget.data.parse(gridData); // 3. call the parse() method and pass data as a parameter
    }

    ngOnDestroy() {
        this._grid_widget?.destructor(); // destruct a Suite widget
    }
}
~~~

:::tip
You can call any Suite widget method as follows: `this.suite_widget.someMethod()`
:::

### Handle events

When a user performs some action in a Suite widget, an event is fired. You can use this event to detect an action and run the required code.

~~~jsx {6-8} title="grid.component.ts"
// ...

ngOnInit() {
    this._grid_widget = new Grid(this.grid_container.nativeElement, {});

    this._grid_widget.events.on("scroll", function({top,left}){
        console.log("The grid is scrolled to "+top,left);
    });
}

// ...
~~~

Now you know how to integrate and configure any Suite widget with Angular. You can customize the code according to your specific requirements. The extended example you can find on [**GitHub**](https://github.com/DHTMLX/angular-suite-demo).
