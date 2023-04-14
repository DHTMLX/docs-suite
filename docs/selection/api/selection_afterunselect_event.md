---
sidebar_label: afterUnSelect
title: JavaScript Selection - afterUnSelect Event 
description: You can explore the afterUnSelect event of Selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterUnSelect

@short: fires after unselecting an item

@signature: {'afterUnSelect: (id: string | number) => void;'}

@params:
- `id: string | number` - the id of an item

@example:
component.selection.events.on("afterUnSelect", function(id){
    console.log("An item is unselected");
});

@descr:

{{note The event can be applied to the [DataView](dataview/usage_selection.md), [List](list/usage_selection.md), [Tree](tree/usage_selection.md) components.}}

Starting from v7.0, you can also apply the simplified version of the event:

~~~js
component.events.on("afterUnSelect", function(id) {
    console.log(id);
});
~~~
