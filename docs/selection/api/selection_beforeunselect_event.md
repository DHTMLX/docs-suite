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
tree.selection.events.on("BeforeUnSelect", function(id) {
    console.log(id);
    return false;
});


@descr:

{{note The event can be applied to the [DataView](dataview/usage_selection.md), [List](list/usage_selection.md), [Tree](tree/usage_selection.md) components.}}

Starting from v7.0, you can also apply the simplified version of the event:

~~~js
tree.events.on("BeforeUnSelect", function(id) {
    console.log(id);
    return false;
});
~~~
