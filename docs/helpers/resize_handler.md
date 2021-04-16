---
sidebar_label: Resizer
title: Resizer
---          

The DHTMLX library provides a helper that changes the width and height of the page content based on the window size. 

To create a responsive web page that will be easily adapted to different dimensions of a browser window, make use of the **dhx.resizeHandler** helper:

~~~js
dhx.resizeHandler(container, function (width, height) {
    // some logic here
});
~~~

{{editor	https://snippet.dhtmlx.com/qf2tb3em	Helpers. Resizer. Initialization}}

The helper takes two parameters:

- **container** - an HTML element where the handler function is added to
- **handler** - (*function*) a callback function that returns the container width and height after its sizes were changed



