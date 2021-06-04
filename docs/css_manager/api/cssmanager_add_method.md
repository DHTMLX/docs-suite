---
sidebar_label: add()
title: JavaScript CSS Manager - add Method 
description: You can explore the add method of CSS Manager in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# add()

@short: creates a new class with a list of styles

@signature: {'add(cssList: ICssList, customId?: string, silent?: boolean): string;'}

@params:
- `cssList: object` - mandatory, an object with a list of styles
- `customId: string` - optional, a custom name of the class
- `silent: boolean` - optional, if true - a new class will be created but not added to an HTML page

@returns:
A string with the name of the created class.

@example:
// create a new CSS class
const cssClassName = dhx.cssManager.add({
    display: "flex";
    flexDirection: "column"
});

const block = document.createElement("div");
block.classList.add(cssClassName);

// or

dhx.cssManager.add({
    display: "flex";
    flexDirection: "column"
}, "myCustomClass");

const block = document.createElement("div");
block.classList.add("myCustomClass");

@descr:

The new created styles will be added to the &lt;head&gt; section of the HTML document.

If the **silent** parameter is set to *true*, you need to use the [update()](css_manager/api/cssmanager_update_method.md) method after **add** to apply the made changes to the HTML page.
