---
sidebar_label: beforeHide
title: beforeHide
---          

@short: fires before a popup is hidden

@signature: {'beforeHide: (fromOuterClick: boolean, e: Event) => void | boolean;'}

@params:
- fromOuterClick		boolean			true, for a click outside a popup, otherwise - false
- e						Event			the native mouse event

@returns:
- result		void | boolean			true to hide a popup, false to block hiding a popup

@example:
popup.events.on("BeforeHide", function(fromOuterClick,e){
    console.log("A popup will be hidden");
    return true;
});



@descr:

The event is blockable. Return *false* to block hiding a popup.

**Related samples**:
- [Popup. Events](https://snippet.dhtmlx.com/ro2lza9t)
- [Popup. Prevent Hide](https://snippet.dhtmlx.com/aocef9cv)


@related: popup/event_handling.md
