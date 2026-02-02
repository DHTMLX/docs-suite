---
sidebar_label: dropBehaviour
title: JavaScript Grid - dropBehaviour Config 
description: You can explore the dropBehaviour config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# dropBehaviour

:::tip pro version only
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: Optional. Defines the behaviour of a dragged item in a Grid in the TreeGrid mode

:::note
The `dropBehaviour` property is available only in the TreeGrid mode with the enabled drag-n-drop functionality.

To enable drag-n-drop within Grid in the TreeGrid mode (reorder the items), use the [`dragItem`](/grid/api/grid_dragitem_config/) property, to enable drag-n-drop between Grids in the TreeGrid mode, use the [`dragMode`](/grid/api/grid_dragmode_config/) property.
:::

@signature: {'dropBehaviour?: "child" | "sibling" | "complex";'}

@example:
const grid = new dhx.Grid("treegrid_container", {
    type: "tree",
    columns: [
        { id: "name", header: [{ text: "Book Name" }], gravity: 1.5 },
        { id: "price", type: "string", header: [{ text: "Terms and conditions", colspan: 2 }, { text: "Price" }] },
        { id: "cover", type: "string", header: [{}, { text: "Cover" }] },
        { id: "ships", type: "string", header: [{ text: "Ships in" }] },
        { id: "inStock", type: "string", header: [{ text: "In stock" }] }
    ],
    dragItem: "both", // to activate the functionality for columns or rows separately, set the value to "column" or "row"
    dropBehaviour: "sibling" // enables one of the drop modes: "child" | "sibling" | "complex"
});

@descr:
There are three modes of behaviour of a dragged item, depending on the value set for the `dropBehaviour` option in the configuration object of a grid in the TreeGrid mode:

- "child" - a dragged item becomes a child of the item it is dragged to
- "sibling" - a dragged item becomes a sibling of the item it is dragged to
- "complex" - a dragged item can become both a child or a sibling of a target item, depending on the position specified by highlighting 

**Related sample**: [Grid (TreeGrid). Drop behaviour](https://snippet.dhtmlx.com/o2v3pcg0)

**Related article**: [Drop behaviour](/grid/treegrid_mode/#drop-behaviour)