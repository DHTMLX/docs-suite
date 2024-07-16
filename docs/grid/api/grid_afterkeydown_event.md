---
sidebar_label: afterKeyDown
title: JavaScript Grid - afterKeyDown Event 
description: You can explore the afterKeyDown event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterKeyDown

@short: fires after the user is pressing a shortcut key

@signature: {'afterKeyDown: (event: Event) => void;'}

@params:
The callback of the event is called with the following parameter:

- `event: Event` - a native KeyboardEvent object

@example:
grid.events.on("afterKeyDown", (event) => {
    // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog: added in v6.4

[comment]: # (@related: grid/configuration.md#keyboard-navigation)

[comment]: # (@relatedapi: grid/api/grid_beforekeydown_event.md)
