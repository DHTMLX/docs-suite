---
sidebar_label: beforeExpand
title: beforeExpand
---          

@short: fires before expanding a Layout cell

@signature: beforeExpand: (id: string) => boolean | void;

@params:
- id		string		the id of a cell

@returns:
param       boolean     false - to block expanding a cell, otherwise true

@example:
layout.events.on("BeforeExpand", function(id){
	// your logic here
    return false;
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/fyxw0map	Layout. Events

@changelog:
added in v6.4


