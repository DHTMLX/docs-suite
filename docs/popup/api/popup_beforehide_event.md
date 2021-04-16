---
sidebar_label: beforeHide
title: beforeHide
---          

@short: fires before a popup is hidden

@signature: beforeHide: (fromOuterClick: boolean, e: Event) => void | boolean;

@params:
- fromOuterClick		boolean			true, for a click outside a popup, otherwise - false
- e						Event			the native mouse event

@returns:
- result		boolean			true to hide a popup, false to block hiding a popup

@example:
popup.events.on("BeforeHide", function(fromOuterClick,e){
    console.log("A popup will be hidden");
    return true;
});


@template: api_event
@descr:
The event is blockable. Return *false* to block hiding a popup.

@relatedsample:
https://snippet.dhtmlx.com/ro2lza9t	Popup. Events
https://snippet.dhtmlx.com/aocef9cv	Popup. Prevent Hide


@related: popup/event_handling.md