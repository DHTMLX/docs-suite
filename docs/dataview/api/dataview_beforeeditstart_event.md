---
sidebar_label: beforeEditStart
title: beforeEditStart
---          

@short: fires before editing of an item has started

beforeEditStart: (value: string, id: string | number) => boolean | void;

@params:
- id		string | number		the id of an item

@returns:
- result		boolean | void		false - to block item editing, otherwise true

@example:
dataview.events.on("BeforeEditStart", function(id){
	// your logic here
    return false;
});

@template: api_event
@descr:

**Related sample**:
- [Dataview. Dataview Events](https://snippet.dhtmlx.com/2d74uyoh)

@changelog: added in v6.1