---
sidebar_label: Initialization
title: JavaScript Layout - Initialization 
description: You can explore the initialization of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
[Download the DHTMLX Layout package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as part of the DHTMLX Suite library.
:::

Follow these steps to add DHTMLX Layout to an application:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Define Layout structure](#define-layout-structure)
- [Initialize Layout](#initialize-layout) with the object constructor

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to start with DHTMLX Layout</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="layout_container"></div>
        <script>
            // creating Layout
            const layout = new dhx.Layout("layout_container", {
                cols: [
                    { header: "Column 1" },
                    { header: "Column 2", cols: [
                        { header:"Left cols"},
                        { header:"Center cols",cols: [
                            { header: "Sub Block Header cols 1" },
                            { header: "Sub Block Header cols 2" },
                            { header: "Sub Block Header cols 3" }]
                        }]
                    }
                ]
            });
        </script>
    </body>
</html>
~~~

## Include source files

Unpack the downloaded package into your project folder.

Create an HTML file and add the paths to the JS and CSS files of the DHTMLX Suite library in its header. The files are:

- `suite.js`
- `suite.css`

~~~html
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

## Create a container

Add a container for Layout and give it an id, for example `layout_container`:

~~~html
<div id="layout_container"></div>
~~~

## Define Layout structure

Layout consists of cells arranged in rows or columns. Rows and columns can be nested, so you can build a complex structure.

For example, you can create a three-level layout structure:

~~~js
const cols = [
    {
        header: "Sub Block Header row"
    },
    {
        header: "Sub Block Header row",
        cols: [
            {
                header:"Left cols"
            },
            {
                header:"Center cols",
                cols: [
                    { header: "Sub Block Header cols 1" },
                    { header: "Sub Block Header cols 2" },
                    { header: "Sub Block Header cols 3" }
                ]
            },
            {
                header:"Right"
            }
        ]
    },
    { header: "Sub Block Header" },
    { header: "Sub Block Header" }
]
~~~

## Initialize Layout

Initialize Layout with the `dhx.Layout` object constructor. The constructor takes two parameters:

- The HTML container for Layout
- A configuration object that contains the structure of Layout

~~~js
const layout = new dhx.Layout("layout_container", {cols});
~~~

### Configuration properties

#### Layout object

The properties of the Layout configuration object define the structure of Layout.

You can find the full list of Layout properties in the [Layout API overview](layout/api/api_overview.md#layout-properties) article.

#### Cell object

Each Layout cell has its own set of configuration properties.

You can find the full list of cell properties in the [Layout API overview](layout/api/api_overview.md#cell-properties) article.

## Example

<iframe src="https://snippet.dhtmlx.com/ls3cbcys?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
