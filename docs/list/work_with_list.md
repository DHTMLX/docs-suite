---
sidebar_label: Work with List
title: JavaScript List - Work with List
description: You can explore how to work with List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with List

## Setting focus on item

To set focus on a List item, make use of the [](list/api/list_setfocus_method.md) method. It takes the id of an item as a parameter:

~~~js
list.setFocus("7");
~~~

**Related sample**: [List. Set active index](https://snippet.dhtmlx.com/ermcjx3d)

To get the id of a List item in focus, use the [](list/api/list_getfocus_method.md) method. It will return the id of an item in focus:

~~~js
list.getFocus(); // -> "6"
~~~

## Editing items

You can edit a particular List item with the help of the [](list/api/list_edititem_method.md) method. It takes as a parameter the id of an item:

~~~js
list.editItem("1");
~~~

**Related sample**: [List. Edit items](https://snippet.dhtmlx.com/6wsxgswc)

## Disabling and enabling selection of an item

For information on disabling/enabling selection of an item, read [Enabling/Disabling Selection object](list/usage_selection.md#enablingdisabling-selection-object).

## Using Data Collection API

You can manipulate List items with the help of the [Data Collection API](data_collection.md).

### Adding items into List

It is possible to add more items into the initialized List on the fly. Use the [add()](../../data_collection/api/datacollection_add_method/) method of Data Collection. It takes two parameters:

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
list.data.add({value:"New item"},1);
~~~

**Related sample**: [List. Add new item with Form](https://snippet.dhtmlx.com/f7cbdiqg)

### Updating List items

You can change config options of the item via the [update()](../../data_collection/api/datacollection_update_method/) method of Data Collection. It takes two parameters:

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

For example, you can change the value of an item:

~~~js
list.data.update("option_id",{
	value:"Nice item"
});
~~~

**Related sample**: [List. Editing item using Form](https://snippet.dhtmlx.com/6jpn7a6h)

### Removing items from List

To remove an item, make use of the [remove()](../../data_collection/api/datacollection_remove_method/) method of Data Collection. Pass the id of the item that should be removed to the method:

~~~js
list.data.remove("option_id");
~~~

To remove all items at once, use the [removeAll()](../../data_collection/api/datacollection_removeall_method/) method of DataCollection:

~~~js
list.data.removeAll();
~~~

**Related sample**: [List. Delete item](https://snippet.dhtmlx.com/wmozu18g)

### Filtering List data

You can filter List data by the specified criteria with the help of the [filter()](../../data_collection/api/datacollection_filter_method/) method of Data Collection.

Check all details on the parameters of the method in the [Data Collection API](data_collection.md).

~~~js
list.data.filter({
	by:"value",
	match:2,
	compare:(value,match,item)=>{ return parseFloat(value) % 2 == 0}
});
~~~

**Related sample**: [List. Filtering](https://snippet.dhtmlx.com/k8kvmy8v)

Filtering can be applied to any attribute of a data item.

### Sorting List data

It is possible to sort data in List via the [sort()](../../data_collection/api/datacollection_sort_method/) method of Data Collection.

Check all details on the parameters of the method in the [Data Collection API](data_collection.md).

~~~js
list.data.sort({ 
	by:"value",
	dir:"desc"
});
~~~

**Related sample**: [List. Sorting](https://snippet.dhtmlx.com/876meu9a)

Sorting can be applied to any attribute of a data item.

## Using selection API

For information on using Selection API, read [Work with Selection Object](list/usage_selection.md).
