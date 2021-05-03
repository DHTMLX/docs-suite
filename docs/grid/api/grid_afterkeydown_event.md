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


@template: api_event
@descr:

**Related sample**:
- [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@related: grid/configuration.md#keyboardnavigation

@changelog: added in v6.4

@relatedapi: grid/api/grid_beforekeydown_event.md