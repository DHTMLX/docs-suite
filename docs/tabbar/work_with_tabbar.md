---
sidebar_label: Work with Tabbar
title: Work with Tabbar
---          


dhtmlxTabbar inherits its API from dhtmlxLayout. So, you can apply any methods of Layout to manipulate Tabbar.

Adding/removing tabs
---------------

You can quickly add/remove tabs of Tabbar on the fly with the help of the corresponding methods - [](tabbar/api/tabbar_addtab_method.md) and tabbar/api/tabbar_removetab_method.md.

The [](tabbar/api/tabbar_addtab_method.md) method takes two parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>view</b></td>
			<td>(<i>object</i>) an object of a tab. It may include the following properties:
				<ul>
					<li>tab - the name of a tab</li>
					<li>tabCss - the name of the CSS class used for a tab</li>
					<li>css - the name of the CSS class used for a cell</li>
					<li>header - the header of a cell</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td class="webixdoc_links0"><b>index</b></td>
			<td>(<i>number</i>) the position to add a tab into</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
// adding a new tab
tabbar.addTab({tab: "tab-" + nextTab++, css:"panel flex"}, 0);
~~~

{{editor	https://snippet.dhtmlx.com/ekke2q8t	Tabbar. Add Tab}}

The [removeTab()](tabbar/api/tabbar_removetab_method.md) method expects the id of a tab you want to remove as its parameter. You can get the id of a tab via the [getId()](tabbar/api/tabbar_getid_method.md) method:

~~~js
// removing a tab
var id = tabbar.getId(0);
tabbar.removeTab(id);
~~~

{{editor	https://snippet.dhtmlx.com/z5vjj83y	Tabbar. Remove Tab}}

Getting the id of a tab
---------------

In order to get the id of a tab, make use of the [getId()](tabbar/api/tabbar_getid_method.md) method. It takes the index of the tab in question as a parameter:

~~~js
var id = tabbar.getId(0);
~~~

Setting/getting the active tab
------------------

It is possible to set the active tab via Tabbar API, i.e. with the help of the [setActive()](tabbar/api/tabbar_setactive_method.md) method. It takes the id of a tab as a parameter:

~~~js
var tabbar = new dhx.Tabbar("tabbar_container", {
	mode: "top",			
	views:[
		{ id: "1", tab: "tab-1", css:"panel flex"},
		{ id: "2", tab: "tab-2", css:"panel flex"},
		{ id: "3", tab: "tab-3", css:"panel flex"},
		{ id: "4", tab: "tab-4", css:"panel flex"}
	]
});

tabbar.setActive("2");
~~~

{{editor	https://snippet.dhtmlx.com/u9ryz38f	Tabbar. Set Active}}

To identify what tab is currently active, apply the [getActive()](tabbar/api/tabbar_getactive_method.md) method. It will return the id of the active tab.

~~~js
var tabbar = new dhx.Tabbar("tabbar_container", {
	mode: "top",			
	views:[
		{ id: "1", tab: "tab-1", css:"panel flex"},
		{ id: "2", tab: "tab-2", css:"panel flex"},
		{ id: "3", tab: "tab-3", css:"panel flex"},
		{ id: "4", tab: "tab-4", css:"panel flex"}
	]
});

var active = tabbar.getActive(); // -> "2"
~~~

{{editor	https://snippet.dhtmlx.com/xpvkcwiu	Tabbar. Get Active}}

Enabling/Disabling a tab
--------------------------
To enable a tab, use the [enableTab()](tabbar/api/tabbar_enabletab_method.md) method:

~~~js
tabbar.enableTab("London");
~~~

To disable a tab, use the [disableTab()](tabbar/api/tabbar_disabletab_method.md) method:

~~~js
tabbar.disableTab("London");
// -> true|false
~~~

{{editor	https://snippet.dhtmlx.com/9l3egq3z	Tabbar. Disable Tab}}

Checking if a tab is disabled
-----------------------------

To check if a tab is disabled, pass the id of the tab as an argument to the [isDisabled()](tabbar/api/tabbar_isdisabled_method.md) method:

~~~js
tabbar.isDisabled("London"); // -> returns true/false
~~~

To check if a currently active tab is disabled, call the [isDisabled()](tabbar/api/tabbar_isdisabled_method.md) method without parameters:

~~~js
tabbar.isDisabled(); // -> returns true/false
~~~

{{editor	https://snippet.dhtmlx.com/86er2y7m	Tabbar. Is Disabled Tab}}

Attaching a component to a cell
---------------------------------------
You can easily attach any DHTMLX component to a cell of Tabbar using the attach method of a cell:

~~~js
var dataview = new dhx.DataView(null, {
	template: dataviewTemplate,
	itemsInRow: 3,
	gap: "10px"
});

dataview.data.parse(dataset);

tabbar.getCell("dataview").attach(dataview);
~~~

{{editor	https://snippet.dhtmlx.com/o1jwmw1l	Tabbar. Attach}}

