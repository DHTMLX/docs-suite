---
sidebar_label: beforeSelect
title: beforeSelect
---          

@short: fires on selecting an item, but before the item is really selected


@params:
- id    string  the id of an item

@returns:
param   boolean     false - to prevent selecting of an item, otherwise - true


@example:
tree.selection.events.on("BeforeSelect", function(id) {
    console.log(id);
    return false;
});

@template: api_method
@descr:
Starting from v7.0, you can also apply the simplified version of the event:

~~~js
tree.events.on("BeforeSelect", function(id) {
    console.log(id);
    return false;
});
~~~

@relatedapi: 
tree/api/selection/selection_enable_method.md
tree/api/tree_selection_config.md




