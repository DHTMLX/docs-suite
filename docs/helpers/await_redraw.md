---
sidebar_label: AwaitRedraw
title: JavaScript Helpers - AwaitRedraw 
description: You can explore the AwaitRedraw helper in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# AwaitRedraw

You should understand that some API methods of the DHTMLX Suite widgets are implemented after the widget is rendered on the page. But in some cases this process may take some time, so you need to wait until the browser renders the needed component or its element.

To avoid this problem, you can use the **dhx.awaitRedraw** helper, which detects the rendering process and perform the desired code as soon as the component finally finishes its rendering.

The **dhx.awaitRedraw** helper returns a promise:

- **promise** - (*function*) a function to be executed

~~~js
dhx.awaitRedraw().then(function() {
    // your code here
})
~~~

**Related sample**: [Helpers. Await Redraw. Initialization](https://snippet.dhtmlx.com/r4ck0smz)

Here are real-life examples of how you can use the awaitRedraw helper:

- in Grid:

~~~js
grid.events.on("AfterSelect", function (row, col) {
    dhx.awaitRedraw().then(function () {
        console.log(grid.selection.getCells().length);
    })
});
~~~

- in Window:

~~~js
dhxWindowObj.attachHTML("<input id='"myInput"'></input>");

dhxWindowObj.events.on("afterShow", function(id){ 
    dhx.awaitRedraw().then(() => {
        const el = document.getElementById("myInput");
        el.focus();
    })                      
});
~~~