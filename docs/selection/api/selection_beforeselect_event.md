---
sidebar_label: beforeSelect
title: beforeSelect
---          

@short: fires on selecting an item, but before the item is really selected

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
