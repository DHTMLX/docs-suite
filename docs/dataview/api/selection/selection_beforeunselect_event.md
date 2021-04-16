---
sidebar_label: beforeUnSelect
title: beforeUnSelect
---          

@short: fires on unselecting an item, but before the item is really unselected

```todoapi ```

@params:
- id    string  the id of an item

@returns:
param   boolean     false - to prevent unselecting of an item, otherwise - true


@example:
dataview.selection.events.on("BeforeUnSelect", function(id) {
    console.log(id);
    return false;
});

@template: api_method
@descr:
Starting from v7.0, you can also apply the simplified version of the event:

~~~js
dataview.events.on("BeforeUnSelect", function(id) {
    console.log(id);
    return false;
});
~~~

@relatedapi: 
dataview/api/selection/selection_enable_method.md
dataview/api/dataview_selection_config.md 




