---
sidebar_label: Work with DataView
title: Work with DataView
---          



Setting focus on item
--------------------------

To set focus on a DataView item, make use of the [setFocus()](dataview/api/dataview_setfocus_method.md) method. It takes the id of an item as a parameter:

~~~js
dataview.setFocus("7");
~~~

Editing items
-------------

You can edit a particular DataView item with the help of the [editItem()](dataview/api/dataview_edititem_method.md) method. It takes as a parameter the id of an item:

~~~js
dataview.editItem("1");
~~~

{{editor    https://snippet.dhtmlx.com/i09isp2d	Dataview. Edit Item}}

Disabling and enabling selection of an item
----------------------------------

For information on disabling/enabling selection of an item, read [Enabling/Disabling Selection object](dataview/usage_selection.md#enablingdisablingselectionobject).

Using Data Collection API
------------------------

You can manipulate DataView items with the help of the [Data collection API](data_collection/api/refs/datacollection.md). 

### Adding items into DataView

It is possible to add more items into the initialized DataView on the fly. Use the **add()** method of Data Collection. It takes two parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>config</b></td>
			<td>(<i>object</i>) the configuration object of the added item</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>index</b></td>
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

{{editor	https://snippet.dhtmlx.com/k4sbj47b	Dataview. Add}}

### Updating DataView items

You can change config options of the item via the **update()** method of Data Collection. It takes two parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>id</b></td>
			<td>the id of the item</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>config</b></td>
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

{{editor	https://snippet.dhtmlx.com/we9vm6iz	Dataview. Update}}

### Removing items from DataView

To remove an item, make use of the **remove()** method of Data Collection. Pass the id of the item that should be removed to the method:

~~~js
dataview.data.remove("id");
~~~

{{editor	https://snippet.dhtmlx.com/i5cjuj2y	Dataview. Delete}}

### Filtering DataView data

You can filter DataView data by the specified criteria with the help of the [](data_collection/api/filter.md) method of Data collection. Check all details on parameters of the method in the
[Data collection API](data_collection/api/refs/datacollection.md).

~~~js
dataview.data.filter({
	by:"value",
	match:2,
	compare:(value,match,item)=>{ return parseFloat(value) % 2 == 0}
});
~~~

{{editor	https://snippet.dhtmlx.com/8f970hby	Dataview. Filter}}

### Sorting DataView data

It is possible to sort data in DataView via the [](data_collection/api/sort.md) method of Data collection. Check all details on parameters of the method in the [Data collection API](data_collection/api/refs/datacollection.md).

~~~js
dataview.data.sort({ 
	by:"value",
	dir:"desc"
});
~~~

{{editor	https://snippet.dhtmlx.com/mix83emb	Dataview. Sort}}

Using Selection API
-------------

For information on using Selection API, read [Work with Selection Object](dataview/usage_selection.md).

