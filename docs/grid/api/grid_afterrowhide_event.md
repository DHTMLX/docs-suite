---
sidebar_label: afterRowHide
title: JavaScript Grid - afterRowHide Event 
description: You can explore the afterRowHide event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterRowHide

@short: fires after a row is hidden

@signature: {'afterRowHide: (row: object) => void;'}

@params:
The callback of the event is called with the following parameters:

- `row: object` - an object with a row configuration

@example:
grid.events.on("afterRowHide", (row) => {
    // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog: added in v7.0
