---
sidebar_label: beforeShow
title: beforeShow
---          

@short: fires before a popup is shown

@signature: beforeShow: (node: HTMLElement) => void | boolean;

@params:
- element 		HTMLElement		 the container a popup is placed in

@returns:
- result		boolean			true to show a popup, false to block showing a popup

@example:
popup.events.on("BeforeShow", function(element){
    console.log("A popup will be shown");
    return true;
});


@template: api_event
@descr:
The event is blockable. Return *false* to block showing a popup.

@relatedapi:
popup/api/popup_aftershow_event.md

@relatedsample: 
https://snippet.dhtmlx.com/ro2lza9t	Popup. Events
https://snippet.dhtmlx.com/z788l8r7	Popup. Prevent Show

@related: popup/event_handling.md