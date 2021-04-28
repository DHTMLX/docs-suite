---
sidebar_label: afterSelect
title: afterSelect
---          

@short: fires after selecting an item

@signature: afterSelect: (id: string) => void;

@params:
- id		string		the id of an item

@example:
tree.selection.events.on("AfterSelect", function(id){
    console.log("An item is selected");
});

@template:	api_method
@descr:

{{note The event can be applied to the [DataView](dataview/usage_selection.md), [List](list/usage_selection.md), [Tree](tree/usage_selection.md) components.}}

Starting from v7.0, you can also apply the simplified version of the event:

~~~js
tree.events.on("AfterSelect", function(id) {
    console.log(id);
});
~~~