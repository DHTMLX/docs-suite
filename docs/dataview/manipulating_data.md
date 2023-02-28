---
sidebar_label: Work with DataView
title: JavaScript DataView - Work with DataView 
description: You can explore how to work with DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with DataView

## Setting focus on item

To set focus on a DataView item, make use of the [setFocus()](dataview/api/dataview_setfocus_method.md) method. It takes the id of an item as a parameter:

~~~js
dataview.setFocus("7");
~~~

## Editing items

You can edit a particular DataView item with the help of the [editItem()](dataview/api/dataview_edititem_method.md) method. It takes as a parameter the id of an item:

~~~js
dataview.editItem("1");
~~~

**Related sample**: [Dataview. Edit item using a button](https://snippet.dhtmlx.com/i09isp2d)

## Disabling and enabling selection of an item

For information on disabling/enabling selection of an item, read [Enabling/Disabling Selection object](dataview/usage_selection.md#enablingdisabling-selection-object).

## Using Data Collection API

You can manipulate DataView items with the help of the [Data Collection API](data_collection.md).

### Adding items into DataView

It is possible to add more items into the initialized DataView on the fly. Use the **add()** method of Data Collection. It takes two parameters:

<table>
	<tbody>
        <tr>
			<td><b>config</b></td>
			<td>(<i>object</i>) the configuration object of the added item</td>
		</tr>
        <tr>
			<td><b>index</b></td>
			<td>(<i>number</i>) optional, the position to add an item at</td>
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

You can change config options of the item via the **update()** method of Data Collection. It takes two parameters:

<table>
	<tbody>
        <tr>
			<td><b>id</b></td>
			<td>the id of the item</td>
		</tr>
        <tr>
			<td><b>config</b></td>
			<td>an object with new configuration of the item</td>
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

To remove an item, make use of the **remove()** method of Data Collection. Pass the id of the item that should be removed to the method:

~~~js
dataview.data.remove("id");
~~~

**Related sample**: [Dataview. Delete item](https://snippet.dhtmlx.com/i5cjuj2y)

### Filtering DataView data

You can filter DataView data by the specified criteria with the help of the [](../data_collection/api/datacollection_filter_method.md) method of Data collection. Check all details on parameters of the method in the
[Data Collection API](data_collection.md).

~~~js
dataview.data.filter({
	by:"value",
	match:2,
	compare:(value,match,item)=>{ return parseFloat(value) % 2 == 0}
});
~~~

**Related sample**: [Dataview. Filter](https://snippet.dhtmlx.com/8f970hby)

### Sorting DataView data

It is possible to sort data in DataView via the [](../data_collection/api/datacollection_sort_method.md) method of Data Collection.

Check all details on the parameters of the method in the [Data Collection API](data_collection.md).

~~~js
dataview.data.sort({ 
	by:"value",
	dir:"desc"
});
~~~

**Related sample**: [Dataview. Sorting](https://snippet.dhtmlx.com/mix83emb)

## Using Selection API

For information on using Selection API, read [Work with Selection Object](dataview/usage_selection.md).
