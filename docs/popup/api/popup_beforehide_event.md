---
sidebar_label: beforeHide
title: JavaScript Popup - beforeHide Event 
description: You can explore the beforeHide event of Popup in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeHide

@short: fires before a popup is hidden

@signature: {'beforeHide: (fromOuterClick: boolean, e: Event) => void | boolean;'}

@params:
- `fromOuterClick: boolean` - *true*, for a click outside a popup; otherwise, *false*
- `e: Event` - the native mouse event

@returns:
Return `true` to hide a popup, `false` to block hiding a popup.

@example:
popup.events.on("beforeHide", function(fromOuterClick,e){
    console.log("A popup will be hidden");
    return true;
});

@descr:

**Related samples**:
- [Popup. Events](https://snippet.dhtmlx.com/ro2lza9t)
- [Popup. Prevent Hide](https://snippet.dhtmlx.com/aocef9cv)

[comment]: # (@related: popup/event_handling.md)
