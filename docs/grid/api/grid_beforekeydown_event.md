---
sidebar_label: beforeKeyDown
title: beforeKeyDown
---          

@short: fires before the user is pressing a shortcut key

@signature: beforeKeyDown: (e: Event) => boolean | void;

<!-- @params:
- e		KeyboardEvent		a native KeyboardEvent object -->

@returns:

- param		boolean			false - to prevent pressing a shortcut key, otherwise false

@example:
grid.events.on("BeforeKeyDown", function (e) {
    // your logic here
    // return true
});


@template: api_event
@descr:
The event fires when a cell of Grid has a keyboard focus.

@relatedsample:
https://snippet.dhtmlx.com/9zeyp4ds	Grid. Events

@changelog: added in v6.4

@related: grid/configuration.md#keyboardnavigation

@relatedapi: grid/api/grid_afterkeydown_event.md