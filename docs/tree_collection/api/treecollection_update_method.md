---
sidebar_label: update()
title: JavaScript TreeCollection - update Method 
description: You can explore the update method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# update()

@short: updates properties of the item

@signature: {'update(id: string | number, item: object, silent?: boolean): void;'}

@params:
- `id: string | number` - the ID of an item
- `item: object` - new properties for an item
- `silent?: boolean` - optional, if set to *true*, the method will be called without triggering events, *false* by default

:::info
Note that after calling the method with the `silent:true` parameter, you may need to repaint the component with the `paint()` method.
:::

@example:
toolbar.data.update("add_btn", { value:"Add new" });

@descr:
Also note, that for correct work of the method the last update of a data collection should be done with the `silent:false` setting applied, for example:

~~~jsx
const itemsForUpdate = [...]; // items { ... }
const lastIndex = itemsForUpdate.length - 1;

itemsForUpdate.forEach((item, index) => {
    data.update(item.id, {
        param: "change param",
    }, index != lastIndex); // the last update isn't silent, as the `silent:false` parameter is set
});
~~~