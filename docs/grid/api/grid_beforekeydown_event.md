---
sidebar_label: beforeKeyDown
title: beforeKeyDown
---          

@short: fires before the user is pressing a shortcut key

@signature: {'beforeKeyDown: (e: Event) => boolean | void;'}

@params:
- `e: Event` - a native KeyboardEvent object

@returns:
Return `false` to prevent pressing a shortcut key; otherwise, `false`.

@example:
grid.events.on("BeforeKeyDown", function (e) {
    // your logic here
    // return true
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

The event fires when a cell of Grid has a keyboard focus.

@changelog: added in v6.4

[comment]: # (@related: grid/configuration.md#keyboard-navigation)

[comment]: # (@relatedapi: grid/api/grid_afterkeydown_event.md)
