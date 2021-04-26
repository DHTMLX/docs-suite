---
sidebar_label: click
title: click
---          

@short: fires after a click on a control

@signature: todo, not found [here](https://cdn.dhtmlx.com/suite/pro/edge/types/ts-toolbar/sources/types.d.ts)

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

**Related sample**: [Toolbar. Events](https://snippet.dhtmlx.com/xvak1p5y)

