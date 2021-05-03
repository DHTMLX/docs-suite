---
sidebar_label: beforeUnSelect
title: beforeUnSelect
---          

@short: fires on unselecting an item, but before the item is really unselected

@signature: {'beforeUnSelect: (id: string) => void | boolean;'}

@params:
- id		string		the id of an item

@returns:
- param		void | boolean		false - to prevent unselecting of an item, otherwise - true

@example:
selection.events.on("BeforeUnSelect", function(id){
    // your logic here
    return false;
});

@template:	api_method
@descr:

{{note The event can be applied to the DataView, List, Tree components.}}
