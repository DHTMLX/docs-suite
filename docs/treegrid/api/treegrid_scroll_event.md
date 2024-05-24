---
sidebar_label: scroll
title: JavaScript TreeGrid - scroll Event 
description: You can explore the scroll event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# scroll

@short: fires on scrolling a grid

@signature: {'scroll: (scrollState: object) => void;'}

@params:
The callback of the event is called with the following parameters:

- `scrollState: object` - an object with the new top and left coordinates

@example:
grid.events.on("scroll", ({ top, left }) => {
    console.log("The grid is scrolled to "+top, left);
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)
