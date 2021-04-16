---
sidebar_label: afterHide
title: afterHide
---          

@short: fires after a popup is hidden

@signature: afterHide: (e: Event) => void;

@params:
- e				Event			the native mouse event

@example:
popup.events.on("AfterHide", function(e){
    console.log("A popup is hidden");
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/ro2lza9t	Popup. Events

@related: popup/event_handling.md