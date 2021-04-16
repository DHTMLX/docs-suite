---
sidebar_label: resize
title: resize
---          

@short: fires on changing the size of the chart container

```todoapi
void resize(object size){ ... };
resize = "resize",
```

@params:
- size		object	 an object with new chart size


@example:
chart.events.on("Resize", function({width:500, height:500}){
    console.log("The size of the chart has changed");
});


@template: api_event
@descr:


@relatedsample: 
https://snippet.dhtmlx.com/a1b9yfwo	Chart. Events
