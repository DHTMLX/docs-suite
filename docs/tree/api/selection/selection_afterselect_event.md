---
sidebar_label: afterSelect
title: afterSelect
---          

@short: fires after selecting an item

@signature: todo, not found [here](https://cdn.dhtmlx.com/suite/pro/edge/types/ts-tree/sources/types.d.ts)

@params:
- id    string  the id of an item

@example:
tree.selection.events.on("AfterSelect", function(id) {
    console.log(id);
});

@template: api_method
@descr:
Starting from v7.0, you can also apply the simplified version of the event:

~~~js
tree.events.on("AfterSelect", function(id) {
    console.log(id);
});
~~~
