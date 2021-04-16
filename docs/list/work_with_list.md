---
sidebar_label: Work with List
title: Work with List

---          

Setting focus on item
--------------------------

To set focus on a List item, make use of the [](list/api/list_setfocus_method.md) method. It takes the id of an item as a parameter:

~~~js
list.setFocus("7");
~~~

{{editor	https://snippet.dhtmlx.com/ermcjx3d	List. Set Active Index}}

To get the id of a List item in focus, use the [](list/api/list_getfocus_method.md) method. It will return the id of an item in focus:

~~~js
list.getFocus(); // -> "6"
~~~

Editing items
-------------

You can edit a particular List item with the help of the [](list/api/list_edititem_method.md) method. It takes as a parameter the id of an item:

~~~js
list.editItem("1");
~~~

{{editor	https://snippet.dhtmlx.com/6wsxgswc	List. Edit Items}}

Disabling and enabling selection of an item
----------------------------------

For information on disabling/enabling selection of an item, read [Enabling/Disabling Selection object](list/usage_selection.md#enablingdisablingselectionobject).


Using Data Collection API
------------------------

You can manipulate List items with the help of the [Data collection API](data_collection/api/refs/datacollection.md). 

### Adding items into List

It is possible to add more items into the initialized List on the fly. Use the **add()** method of Data Collection. It takes two parameters:

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
list.data.add({value:"New item"},1);
~~~

{{editor	https://snippet.dhtmlx.com/f7cbdiqg	List. Add}}

###Updating List items

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

For example, you can change the value of an item:

~~~js
list.data.update("option_id",{
	value:"Nice item"
});
~~~

{{editor	https://snippet.dhtmlx.com/6jpn7a6h	List. Update}}

###Removing items from List

To remove an item, make use of the **remove()** method of Data Collection. Pass the id of the item that should be removed to the method:

~~~js
list.data.remove("option_id");
~~~

{{editor	https://snippet.dhtmlx.com/wmozu18g	List. Delete}}

###Filtering List data

You can filter List data by the specified criteria with the help of the [](data_collection/api/filter.md) method of Data collection. Check all details on parameters of the method in the
[Data collection API](data_collection/api/refs/datacollection.md).

~~~js
list.data.filter({
	by:"value",
	match:2,
	compare:(value,match,item)=>{ return parseFloat(value) % 2 == 0}
});
~~~

{{editor	https://snippet.dhtmlx.com/k8kvmy8v	List. Filter}}

Filtering can be applied to any attribute of a data item.

###Sorting List data

It is possible to sort data in List via the [](data_collection/api/sort.md) method of Data collection. Check all details on parameters of the method in the [Data collection API](data_collection/api/refs/datacollection.md).

~~~js
list.data.sort({ 
	by:"value",
	dir:"desc"
});
~~~

{{editor	https://snippet.dhtmlx.com/876meu9a	List. Sort}}

Sorting can be applied to any attribute of a data item.

Using Selection API
-------------

For information on using Selection API, read [Work with Selection Object](list/usage_selection.md).

