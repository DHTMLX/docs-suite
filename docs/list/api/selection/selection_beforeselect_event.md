---
sidebar_label: beforeSelect
title: beforeSelect
---          

@short: fires on selecting an item, but before the item is really selected

@signature: beforeSelect: (id: string) => void | boolean;

@params:
- id    string  the id of an item

@returns:
param   boolean     false - to prevent selecting of an item, otherwise - true


@example:
list.selection.events.on("BeforeSelect", function(id) {
    console.log(id);
    return false;
});

@template: api_method
@descr:
Starting from v7.0, you can also apply the simplified version of the event:

~~~js
list.events.on("BeforeSelect", function(id) {
    console.log(id);
    return false;
});
~~~

@relatedapi: 
list/api/selection/selection_enable_method.md
list/api/list_selection_config.md





