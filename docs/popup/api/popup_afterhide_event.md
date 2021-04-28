---
sidebar_label: afterHide
title: afterHide
---          

@short: fires after a popup is hidden

@signature: {'afterHide: (e: Event) => void;'}

@params:
- e				Event			the native mouse event

@example:
popup.events.on("AfterHide", function(e){
    console.log("A popup is hidden");
});


@template: api_event
@descr:

**Related sample**: [Popup. Events](https://snippet.dhtmlx.com/ro2lza9t)

@related: popup/event_handling.md
