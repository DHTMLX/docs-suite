---
sidebar_label: getProperties()
title: JavaScript Form - getProperties Container Method 
description: You can explore the getProperties Container method of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getProperties()

@short: returns an object with the available configuration properties of the control and their values

@signature: getProperties(): IBaseLayoutItem;

@returns:
An object with the available properties of the control and their values.

@example: const form = new dhx.Form("form", {
    css: "dhx_widget--bordered",
    padding: "40px",
    rows: [
        {
            type: "container",
            name: "grid",
            padding: "12px 0px",
            height: "400px",
        },
    ]
});

form.getItem("container").getProperties();
//-> the returned object

{
    "width": "content",
    "height": "400px",
    "padding": 0
},

@descr:
The returned object of the Container control can contain the following properties:

- `width` - *string, number, "content"* - the width of a control
- `height` - *string, number, "content"* - the height of a control
- `padding` - *string, number* - sets padding between a cell and a border of a control

@changelog: added in v7.2
