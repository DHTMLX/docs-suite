---
sidebar_label: afterColumnShow
title: JavaScript Grid - afterColumnShow Event 
description: You can explore the afterColumnShow event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterColumnShow

@short: fires after a column is shown

@signature: {'afterColumnShow: (column: object) => void;'}

@params:
The callback of the event is called with the following parameters:
- `column: object` - an object with a column configuration

@example:
grid.events.on("afterColumnShow", (column) => {
    // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog: added in v7.0
