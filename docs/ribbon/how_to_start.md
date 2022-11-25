---
sidebar_label: Initialization
title: JavaScript Ribbon - Initialization 
description: You can explore the initialization of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Initialization

:::info
[Download the DHTMLX Ribbon package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as a part of the DHTMLX Suite library
:::

To add dhtmlxRibbon into an application, you need to take the following simple steps:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Initialize Ribbon](#initialize-ribbon) with the object constructor
- [Load data into Ribbon](#load-data-into-ribbon)

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxRibbon</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="ribbon_container"></div>
        <script>
            // creating dhtmlxRibbon
            const ribbon = new dhx.Ribbon("ribbon_container");
        </script>
    </body>
</html>
~~~

## Include source files

Unpack the downloaded package into a folder of your project.

After that, create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:

- *suite.js*
- *suite.css*

~~~html
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

## Create a container

Add a container for the Ribbon and give it an id, e.g. "ribbon_container":

~~~html
<div id="ribbon_container"></div>
~~~

## Initialize Ribbon

Initialize Ribbon with the `dhx.Ribbon` object constructor. The constructor takes two parameters:

- the HTML object on the page that serves as the toolbar container
- an object with configuration properties

~~~js
const ribbon = new dhx.Ribbon("ribbon_container", {
    // config options
});
~~~

### Configuration properties

The detailed information on Ribbon configuration options can be found in the [Ribbon API overview](ribbon/api/api_overview.md#properties) article.

## Load data into Ribbon

Detailed information on loading data into Ribbon is given in the article [](ribbon/data_loading.md).

## Example

<iframe src="https://snippet.dhtmlx.com/lek4v9m7?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="400"></iframe>