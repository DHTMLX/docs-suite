---
sidebar_label: viewportOverflow
title: viewportOverflow
---          

@short: defines whether a window can go beyond borders of a browser

@signature: {'viewportOverflow?: boolean;'}

@default: false

@example: 
var dhxWindow = new dhx.Window({
    viewportOverflow:true
});

dhxWindow.show();


@descr:

**Related sample**: [Window. Viewport Overflow](https://snippet.dhtmlx.com/qfhdlzri)

{{note The property makes sense when set together with the [](window/api/window_movable_config.md) property.}}

@related: window/how_to_start.md
window/configuration.md#overflowing-browser-window