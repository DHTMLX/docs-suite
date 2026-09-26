---
sidebar_label: Initialization
title: JavaScript Roster - Initialization
description: You can explore the initialization of Roster in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Initialization

:::info
[Download the Acme Roster package](https://acme.com/docs/products/suite/download.shtml) as a part of the Acme Suite library
:::

In order to add Roster in your application, you need to follow the steps below:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize Roster](#initialize-roster) with the object constructor
- [Load data into Roster](#load-data-into-roster)

~~~html title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <title>How to start with Acme Roster</title>
        <link rel="stylesheet" href="/codebase/suite.css">
        <script src="/codebase/suite.js"></script>
    </head>
    <body>
        <div id="roster_container"></div>
        <script>
            // the container is created before the widget is initialized
            const roster = new acme.Roster("roster_container", {
                // configuration properties
            });
        </script>
    </body>
</html>
~~~

## Include source files

Unpack the downloaded package into a folder of your project. The package contains the source files of the library, a set of ready-made samples, and the documentation for the current version.

Once the archive is unpacked, the source files can be copied into any folder of your application.

After that, create an HTML file and place full paths to the JS and CSS files of the Acme Suite library into the header of the file. The files are:

- *roster.js*
- *roster.css*

~~~html title="index.html"
<script src="../../codebase/roster.js"></script>
<link rel="stylesheet" href="../../codebase/roster.css">
~~~

## Create a container

Simply add a container for Roster on the page. The container must be present in the document before the constructor runs.

~~~html title="index.html"
<div id="roster_container"></div>
~~~

## Initialize Roster

To initialize Roster, use the `acme.Roster` constructor. The constructor function takes two parameters:

- the id of a container to place the widget into
- an object with configuration properties

After the constructor has been called, the widget will render the header row and an empty body in the container.

~~~js title="index.js"
const roster = new acme.Roster("roster_container", {
    // the rows are repainted each time the data is changed
    columns: [
        { id: "name", header: "Name" },
        { id: "shift", header: "Shift" }
    ]
});
~~~

### Configuration properties

The config object accepts a few properties that control the layout of the widget. Column settings go into the `columns` array, where each entry defines the data field and the header text of a column.

Use the `width` and `height` properties to adjust the size of the roster.

See the detailed description of the options in the [Roster API overview](roster/api/api_overview.md#properties) article.

## Load data into Roster

Call the `parse()` method to load records from a local array or from a server script, e.g. a PHP file. The method expects an array of objects, and the keys of every object match the column ids from the config.

~~~js title="index.js"
roster.data.parse([
    { name: "Alan Fox", shift: "morning" },
    { name: "Nina Ross", shift: "evening" },
    // more records, etc.
]);
~~~

Roster repaints the rows after each call, so you can load a new portion of records at any moment.

## Example

<iframe src="https://snippet.acme.com/9wd41kx7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
