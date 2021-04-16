---
sidebar_label: beforeHide
title: beforeHide
---          

@short: fires before a cell is hidden

@signature: beforeHide: (id: string) => boolean | void;

@params:
- id		string		the id of a cell

@example:
layout.events.on("BeforeHide", function(id){
	// your logic here
    return false;
});

@returns:
- result	boolean		false - to prevent a cell from being hidden, otherwise true


@example:



@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/fyxw0map	Layout. Events

@changelog:
added in v6.2

