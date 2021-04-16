---
sidebar_label: afterShow
title: afterShow
---          

@short: fires after a popup is shown

@signature: afterShow: (node: HTMLElement) => void;

@params:
- node 		HTMLElement		 the container a popup is placed in

@example:
popup.events.on("AfterShow", function(element){
    console.log("A popup is shown");
});


@template: api_event
@descr:

@relatedapi:
popup/api/popup_beforeshow_event.md

@relatedsample: https://snippet.dhtmlx.com/ro2lza9t	Popup. Events

@related: popup/event_handling.md