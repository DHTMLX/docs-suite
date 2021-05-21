---
sidebar_label: beforeShow
title: beforeShow
---          

@short: fires before a popup is shown

@signature: beforeShow: (node: HTMLElement) => void | boolean;

@params:
`node: HTMLElement` - the container a popup is placed in

@returns:
Return `true` to show a popup, `false` to block showing a popup.

@example:
popup.events.on("BeforeShow", function(element){
    console.log("A popup will be shown");
    return true;
});

@descr:

**Related samples**:
- [Popup. Events](https://snippet.dhtmlx.com/ro2lza9t)
- [Popup. Prevent Show](https://snippet.dhtmlx.com/z788l8r7)

[comment]: # (@related: popup/event_handling.md)

[comment]: # (@relatedapi: popup/api/popup_aftershow_event.md)