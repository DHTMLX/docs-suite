---
sidebar_label: afterAdd
title: afterAdd
---          

@short: fires after adding a new cell

@signature: afterAdd: (id: string) => void;

@params:
- id		string		the id of a cell

@example:
layout.events.on("AfterAdd", function(id){
	// your logic here
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/fyxw0map	Layout. Events

@changelog:
added in v6.2

