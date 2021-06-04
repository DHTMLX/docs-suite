---
sidebar_label: afterShow
title: JavaScript Popup - afterShow Event 
description: You can explore the afterShow event of Popup in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterShow

@short: fires after a popup is shown

@signature: {'afterShow: (node: HTMLElement) => void;'}

@params:
`node: HTMLElement` - the container a popup is placed in

@example:
popup.events.on("AfterShow", function(element){
    console.log("A popup is shown");
});

@descr:

**Related sample**: [Popup. Events](https://snippet.dhtmlx.com/ro2lza9t)

[comment]: # (@relatedapi: popup/api/popup_beforeshow_event.md)

[comment]: # (@related: popup/event_handling.md)
