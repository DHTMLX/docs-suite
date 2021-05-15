---
sidebar_label: click
title: click
---          

@short: fires after a click on a button or a menu option

@signature: {'click: (id: string, events: Event) => void;'}

@params:
- id 		string		the ID of a clicked control
- events	Event		a native event object

@example:
menu.events.on("Click", function(id,e){
    console.log(id);
});

@descr:

**Related sample**: [Menu. Events](https://snippet.dhtmlx.com/yjt39a4k)
