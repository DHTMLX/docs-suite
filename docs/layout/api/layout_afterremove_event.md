---
sidebar_label: afterRemove
title: afterRemove
---          

@short: fires after removing a cell

@signature: afterRemove: (id: string) => void;

@params:
- id		string		the id of a cell

@example:
layout.events.on("AfterRemove", function(id){
	// your logic here
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/fyxw0map	Layout. Events

@changelog:
added in v6.2

