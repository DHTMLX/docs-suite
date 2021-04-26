---
sidebar_label: afterShow
title: afterShow
---          

@short: fires after a cell is shown
todoanton any приходит из d.ts
@signature: {'afterShow: (id: string) => any;'}

@params:
- id		string		the id of a cell

@example:
layout.events.on("AfterShow", function(id){
	// your logic here
});

@template: api_event
@descr:

**Related sample**: [Layout. Events](https://snippet.dhtmlx.com/fyxw0map)

@changelog:
added in v6.2
