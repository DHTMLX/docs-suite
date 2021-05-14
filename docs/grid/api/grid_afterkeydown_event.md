---
sidebar_label: afterKeyDown
title: afterKeyDown
---          

@short: fires after the user is pressing a shortcut key

@signature: {'afterKeyDown: (e: Event) => void;'}

<!-- @params:

- e		KeyboardEvent		a native KeyboardEvent object -->

@example:
grid.events.on("AfterKeyDown", function (e) {
    // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog: added in v6.4

@related: grid/configuration.md#keyboard-navigation

[comment]: # (@relatedapi: grid/api/grid_beforekeydown_event.md)
