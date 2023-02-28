---
sidebar_label: afterHide
title: JavaScript Popup - afterHide Event 
description: You can explore the afterHide event of Popup in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterHide

@short: fires after a popup is hidden

@signature: {'afterHide: (e: Event) => void;'}

@params:
- `e: Event` - the native mouse event

@example:
popup.events.on("afterHide", function(e){
    console.log("A popup is hidden");
});

@descr:

**Related sample**: [Popup. Events](https://snippet.dhtmlx.com/ro2lza9t)

[comment]: # (@related: popup/event_handling.md)
