---
sidebar_label: attach
title: attach
---
 `to do Parameters and Returns after @signature: is ready`


@short: attaches a DHTMLX component into a Container control

@signature:

@example: const form = new dhx.Form("form", {
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