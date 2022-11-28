---
sidebar_label: attach()
title: JavaScript Form - attach Container Method 
description: You can explore the attach method of the Container control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# attach()

@short: attaches a DHTMLX widget into a Container control

@signature: attach(widget: any): void;

@params:
- `widget` - the DHTMLX widget

@example: const form = new dhx.Form("form_container", {
    css: "dhx_widget--bordered",
    padding: "40px",
    rows: [
        {
            type: "container",
            name: "grid",
            padding: "12px 0px",
            height: "100px"
        },
    ]
});

const grid = new dhx.Grid(null, {
    columns: [
        { width: 200, id: "country", header: [{ text: "Country" }] },
        { width: 200, id: "population", header: [{ text: "Population" }] },
        { width: 200, id: "yearlyChange", header: [{ text: "Yearly Change" }] },
    ],
});

form.getItem("grid").attach(grid);

@changelog: added in v7.2
