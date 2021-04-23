---
sidebar_label: afterUnSelect
title: afterUnSelect
---          

@short: fires after unselecting an item

@params:
- id		string		the id of an item

@example:
selection.events.on("AfterUnSelect", function(id){
    console.log("An item is unselected");
});

@template:	api_method
@descr:

{{note The event can be applied to the DataView, List, Tree components.}}