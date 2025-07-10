---
sidebar_label: blockHandleMouseDown
title: JavaScript Grid - blockHandleMouseDown Event 
description: You can explore the blockHandleMouseDown event of Grid block selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# blockHandleMouseDown

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: triggered when clicking on the selection handle

### Usage

~~~jsx
blockHandleMouseDown: (event: MouseEvent | TouchEvent) => void;
~~~

@params:
The callback of the event is called with the following parameter:

- `event` - the browser event: `MouseEvent` or `TouchEvent`

@example:
grid.block.events.on("blockHandleMouseDown", (event) => {
    console.log("Handle clicked:", event.type);
});

@descr:

@changelog:
added in v9.2