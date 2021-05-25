---
sidebar_label: afterSelect
title: JavaScript Selection - afterSelect Event 
hide_title: true
description: You can explore the afterSelect event of Selection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# afterSelect

@short: fires after selecting an item

@signature: {'afterSelect: (id: string) => void;'}

@params:
`id: string` - the id of an item

@example:
tree.selection.events.on("AfterSelect", function(id){
    console.log("An item is selected");
});

@descr:

{{note The event can be applied to the [DataView](dataview/usage_selection.md), [List](list/usage_selection.md), [Tree](tree/usage_selection.md) components.}}

Starting from v7.0, you can also apply the simplified version of the event:

~~~js
tree.events.on("AfterSelect", function(id) {
    console.log(id);
});
~~~
