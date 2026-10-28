---
sidebar_label: Work with DataView
title: JavaScript DataView - Work with DataView 
description: You can explore how to work with DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with DataView

## Setting focus on item

Use the [`setFocus()`](dataview/api/dataview_setfocus_method.md) method to set focus on a DataView item. The method takes an item id as a parameter:

~~~js
dataview.setFocus("7");
~~~

## Editing items

You can edit a DataView item with the [`editItem()`](dataview/api/dataview_edititem_method.md) method. The method takes an item id as a parameter:

~~~js
dataview.editItem("1");
~~~

**Related sample**: [Dataview. Edit item using a button](https://snippet.dhtmlx.com/i09isp2d)

## Disabling and enabling selection of an item

For details on how to disable and enable selection of an item, see [Enabling/Disabling Selection object](dataview/usage_selection.md#enablingdisabling-selection-object).

## Using Data Collection API

You can manage DataView items with the [Data Collection API](/data_collection/).

### Adding items into DataView

You can add more items to an initialized DataView on the fly. Use the `add()` method of Data Collection. The method takes two parameters:

<table>
    <tbody>
        <tr>
            <td><b>config</b></td>
            <td>(<i>object</i>) the configuration object of the new item</td>
        </tr>
        <tr>
            <td><b>index</b></td>
            <td>(<i>number</i>) optional, the position for the new item</td>
        </tr>
    </tbody>
</table>
<br/>

~~~js
dataview.data.add({
    "value": "Learning new DHTMLX" + " " + (2019 + i),
    "thumbnailName": "61ot4vfL9HL.jpg",
    "shortDescription": "Create your first single-page JavaScript application"
},0);
~~~

**Related sample**: [Dataview. Add item using Form](https://snippet.dhtmlx.com/k4sbj47b)

### Updating DataView items

You can change item settings with the `update()` method of Data Collection. The method takes two parameters:

<table>
    <tbody>
        <tr>
            <td><b>id</b></td>
            <td>the id of the item</td>
        </tr>
        <tr>
            <td><b>config</b></td>
            <td>an object with the new item configuration</td>
        </tr>
    </tbody>
</table>
<br/>

For example, you can change the value of an item:

~~~js
dataview.data.update("item_id",{
    value:"Nice item"
});
~~~

**Related sample**: [Dataview. Edit item with Form](https://snippet.dhtmlx.com/we9vm6iz)

### Removing items from DataView

Use the `remove()` method of Data Collection to remove an item. Pass the item id to the method:

~~~js
dataview.data.remove("id");
~~~

**Related sample**: [Dataview. Delete item](https://snippet.dhtmlx.com/i5cjuj2y)

### Filtering DataView data

You can filter DataView data by specified criteria with the [](data_collection/api/datacollection_filter_method.md) method of Data Collection. For details on the method parameters, see the [Data Collection API](/data_collection/).

~~~js
dataview.data.filter({
    by:"value",
    match:2,
    compare:(value,match,item)=>{ return parseFloat(value) % 2 == 0}
});
~~~

**Related sample**: [Dataview. Filter](https://snippet.dhtmlx.com/8f970hby)

### Sorting DataView data

You can sort data in DataView with the [](data_collection/api/datacollection_sort_method.md) method of Data Collection.

For details on the method parameters, see the [Data Collection API](/data_collection/).

~~~js
dataview.data.sort({ 
    by:"value",
    dir:"desc"
});
~~~

**Related sample**: [Dataview. Sorting](https://snippet.dhtmlx.com/mix83emb)

## Using Selection API

For details on the Selection API, see [Work with Selection object](dataview/usage_selection.md).
