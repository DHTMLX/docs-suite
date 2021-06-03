---
sidebar_label: headerDoubleClick
title: JavaScript Window - headerDoubleClick Event 
description: You can explore the headerDoubleClick event of Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# headerDoubleClick

@short: fires on double clicking the header of a window

@signature: {'headerDoubleClick: (e: Event) => void;'}

@params:
`e: Event` - a native event object

@example:
dhxWindow.events.on("HeaderDoubleclick", function(events) {
   console.log(events)
});

@descr:

**Related sample**: [Window. Events](https://snippet.dhtmlx.com/jfu4upwd)

@changelog:

The **events** parameter has been added in v7.0.

[comment]: # (@related: window/handling_events.md)
