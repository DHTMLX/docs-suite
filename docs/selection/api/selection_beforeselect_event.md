---
sidebar_label: beforeSelect
title: beforeSelect
---          

@short: fires on selecting an item, but before the item is really selected

@signature: todo, not found [here](https://cdn.dhtmlx.com/suite/pro/edge/types/ts-selection/sources/types.d.ts)

@params:
- id		string		the id of an item

@returns:
- param		boolean		false - to prevent selecting of an item, otherwise - true

@example:
selection.events.on("BeforeSelect", function(id){
    // your logic here
    return false;
});

@template:	api_method
@descr:

{{note The event can be applied to the DataView, List, Tree components.}}