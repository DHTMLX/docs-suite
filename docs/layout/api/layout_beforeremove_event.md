---
sidebar_label: beforeRemove
title: beforeRemove
---          

@short: fires before removing a cell

@signature: beforeRemove: (id: string) => boolean | void;

@params:
- id		string		the id of a cell

@example:
layout.events.on("BeforeRemove", function(id){
	// your logic here
    return false;
});

@returns:
- result	boolean		false - to prevent removing of a cell, otherwise true




@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/fyxw0map	Layout. Events

@changelog:
added in v6.2

