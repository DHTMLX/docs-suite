---
sidebar_label: click
title: click
---          

@short: fires after a click on a button or a menu option

@signature: click: (id: string, e: Event) => void;

@params:
- id 		string		the ID of a clicked control
- e 		Event		a native event object


@example:
menu.events.on("Click", function(id,e){
    console.log(id);
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/yjt39a4k	Menu. Events

