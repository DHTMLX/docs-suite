---
sidebar_label: afterUnSelect
title: afterUnSelect
---          

@short: fires after unselecting an item


```todoapi ```

@params:
- id    string  the id of an item




@example:
dataview.selection.events.on("AfterUnSelect", function(id) {
    console.log(id);
});

@template: api_method
@descr:
Starting from v7.0, you can also apply the simplified version of the event:

~~~js
dataview.events.on("AfterUnSelect", function(id) {
    console.log(id);
});
~~~

@relatedapi: 
dataview/api/selection/selection_enable_method.md
dataview/api/dataview_selection_config.md






