---
sidebar_label: beforeSelect
title: beforeSelect
---          

@short: fires on selecting an item, but before the item is really selected

@signature: beforeSelect: (id: string) => void | boolean;

@params:
- id		string		the id of an item

@returns:
- param		boolean		false - to prevent selecting of an item, otherwise - true

@example:
tree.selection.events.on("BeforeSelect", function(id) {
    console.log(id);
    return false;
});

@template:	api_method
@descr:

{{note The event can be applied to the [DataView](dataview/usage_selection.md), [List](list/usage_selection.md), [Tree](tree/usage_selection.md) components.}}

Starting from v7.0, you can also apply the simplified version of the event:

~~~js
tree.events.on("BeforeSelect", function(id) {
    console.log(id);
    return false;
});
~~~