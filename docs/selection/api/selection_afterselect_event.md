---
sidebar_label: afterSelect
title: afterSelect
---          

@short: fires after selecting an item

@signature: todo, not found [here](https://cdn.dhtmlx.com/suite/pro/edge/types/ts-selection/sources/types.d.ts)

@params:
- id		string		the id of an item

@example:
selection.events.on("AfterSelect", function(id){
    console.log("An item is selected");
});

@template:	api_method
@descr:

{{note The event can be applied to the DataView, List, Tree components.}}