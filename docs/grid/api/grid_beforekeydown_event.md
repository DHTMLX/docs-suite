---
sidebar_label: beforeKeyDown
title: JavaScript Grid - beforeKeyDown Event 
description: You can explore the beforeKeyDown event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeKeyDown

@short: fires before the user is pressing a shortcut key

@signature: {'beforeKeyDown: (e: Event) => boolean | void;'}

@params:
`e: Event` - a native KeyboardEvent object

@returns:
Return `false` to prevent pressing a shortcut key; otherwise, `false`.

@example:
grid.events.on("beforeKeyDown", function (e) {
    // your logic here
    // return true
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

The event fires when a cell of Grid has a keyboard focus.

@changelog: added in v6.4

[comment]: # (@related: grid/configuration.md#keyboard-navigation)

[comment]: # (@relatedapi: grid/api/grid_afterkeydown_event.md)
