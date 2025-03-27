---
sidebar_label: update()
title: JavaScript DataCollection - update Method 
description: You can explore the update method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# update()

@short: updates properties of the item

@signature: {'update?: (id: string | number, newItem: object, silent?: boolean) => void;'}

@params:
- `id: string | number` - the id of the item which needs to be updated
- `newItem: object` - a hash of properties which need to be updated
- `silent?: boolean` - optional, if set to *true*, the method will be called without triggering events, *false* by default

:::info
Note that after calling the method with the `silent:true` parameter, you may need to repaint the component with the `paint()` method.
:::

@example:
component.data.update(123, { text:"New text" });

@descr:
Also note, that for correct work of the method the last update of a data collection should be done with the `silent:false` setting applied, for example:

~~~jsx
const lastIndex = data.getLength() - 1;

data.forEach((item, index) => {
    data.update(item.id, {
        param: "change param",
    }, index != lastIndex); // the last update isn't silent, as the `silent:false` parameter is set
});
~~~

**Related sample**: [Data. Update](https://snippet.dhtmlx.com/4g90gi6b)

[comment]: # (@related:window/customization.md#controls-and-operations)
