---
sidebar_label: afterUnSelect
title: afterUnSelect
---          

@short: fires after unselecting an item


@params:
- id    string  the id of an item




@example:
tree.selection.events.on("AfterUnSelect", function(id) {
    console.log(id);
});

@template: api_method
@descr:
Starting from v7.0, you can also apply the simplified version of the event:

~~~js
tree.events.on("AfterUnSelect", function(id) {
    console.log(id);
});
~~~

@relatedapi: 
tree/api/selection/selection_enable_method.md
tree/api/tree_selection_config.md





