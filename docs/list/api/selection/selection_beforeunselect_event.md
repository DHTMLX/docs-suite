---
sidebar_label: beforeUnSelect
title: beforeUnSelect
---          

@short: fires on unselecting an item, but before the item is really unselected

@signature: beforeUnSelect: (id: string) => void | boolean;

@params:
- id    string  the id of an item

@returns:
param   boolean     false - to prevent unselecting of an item, otherwise - true

@example:
list.selection.events.on("BeforeUnSelect", function(id) {
    console.log(id);
    return false;
});

@template: api_method
@descr:
Starting from v7.0, you can also apply the simplified version of the event:

~~~js
list.events.on("BeforeUnSelect", function(id) {
    console.log(id);
    return false;
});
~~~

@relatedapi: 
list/api/selection/selection_enable_method.md
list/api/list_selection_config.md 





