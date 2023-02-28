---
sidebar_label: beforeSelect
title: JavaScript Selection - beforeSelect Event 
description: You can explore the beforeSelect event of Selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeSelect

@short: fires on selecting an item, but before the item is really selected

@signature: {'beforeSelect: (id: string) => void | boolean;'}

@params:
- `id: string` - the id of an item

@returns:
Return `false` to prevent selecting of an item; otherwise, `true`.

@example:
component.selection.events.on("beforeSelect", function(id) {
    console.log(id);
    return false;
});

@descr:

{{note The event can be applied to the [DataView](dataview/usage_selection.md), [List](list/usage_selection.md), [Tree](tree/usage_selection.md) components.}}

Starting from v7.0, you can also apply the simplified version of the event:

~~~js
component.events.on("beforeSelect", function(id) {
    console.log(id);
    return false;
});
~~~
