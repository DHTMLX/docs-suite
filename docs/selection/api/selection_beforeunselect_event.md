---
sidebar_label: beforeUnSelect
title: JavaScript Selection - beforeUnSelect Event 
description: You can explore the beforeUnSelect event of Selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeUnSelect

@short: fires on unselecting an item, but before the item is really unselected

@signature: {'beforeUnSelect: (id: string) => void | boolean;'}

@params:
`id: string` - the id of an item

@returns:
Return `false` to prevent unselecting of an item; otherwise, `true`.

@example:
component.selection.events.on("beforeUnSelect", function(id) {
    console.log(id);
    return false;
});

@descr:

{{note The event can be applied to the [DataView](dataview/usage_selection.md), [List](list/usage_selection.md), [Tree](tree/usage_selection.md) components.}}

Starting from v7.0, you can also apply the simplified version of the event:

~~~js
component.events.on("beforeUnSelect", function(id) {
    console.log(id);
    return false;
});
~~~
