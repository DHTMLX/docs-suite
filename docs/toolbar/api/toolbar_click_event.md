---
sidebar_label: click
title: click
---          

@short: fires after a click on a control

@signature: {'click: (id: string, events: Event) => void;'}

@params:
- id 		string		the ID of a clicked control
- events 		Event		a native event object


@example:
toolbar.events.on("Click", function(id,e){
    console.log(id);
});



@descr:

**Related sample**: [Toolbar. Events](https://snippet.dhtmlx.com/xvak1p5y)

