---
sidebar_label: beforeKeyDown
title: JavaScript Grid - beforeKeyDown Event 
description: You can explore the beforeKeyDown event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeKeyDown

@short: fires before the user is pressing a shortcut key

@signature: {'beforeKeyDown: (event: Event) => boolean | void;'}

@params:
The callback of the event is called with the following parameters:
- `event: Event` - a native KeyboardEvent object

@returns:
Return `false` to prevent pressing a shortcut key; otherwise, `true`.

@example:
grid.events.on("beforeKeyDown", (event) => {
    // your logic here
    // return false;
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

The event fires when a cell of Grid has a keyboard focus.

@changelog: added in v6.4

[comment]: # (@related: grid/configuration.md#keyboard-navigation)

[comment]: # (@relatedapi: grid/api/grid_afterkeydown_event.md)
