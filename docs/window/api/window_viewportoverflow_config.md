---
sidebar_label: viewportOverflow
title: JavaScript Window - viewportOverflow Config 
description: You can explore the viewportOverflow config of Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# viewportOverflow

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

[comment]: # (@related: window/how_to_start.md window/configuration.md#overflowing-browser-window)
