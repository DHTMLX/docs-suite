---
sidebar_label: click
title: click
---          

@short: fires after a click on a control

@signature: click: (id: string, e: Event) => any;

<!-- void click(string id,Event e){ ... }; -- void??? -->

@params:
- id 		string		the ID of a clicked control
- e 		Event		a native event object


@example:
toolbar.events.on("Click", function(id,e){
    console.log(id);
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/xvak1p5y	Toolbar. Events

