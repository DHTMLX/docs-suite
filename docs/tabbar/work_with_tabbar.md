---
sidebar_label: Work with Tabbar
title: JavaScript Tabbar - Work with Tabbar 
description: You can explore how to work with Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Work with Tabbar

DHTMLX Tabbar inherits its API from dhtmlxLayout. So, you can apply any methods of Layout to manipulate Tabbar.

## Adding/removing tabs

You can quickly add/remove tabs of Tabbar on the fly with the help of the corresponding methods - [](tabbar/api/tabbar_addtab_method.md) and [](tabbar/api/tabbar_removetab_method.md).

The [](tabbar/api/tabbar_addtab_method.md) method takes two parameters:

<table>
	<tbody>
        <tr>
			<td><b>view</b></td>
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
			<td><b>index</b></td>
			<td>(<i>number</i>) the position to add a tab into</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
// adding a new tab
tabbar.addTab({tab: "tab-" + nextTab++, css:"panel flex"}, 0);
~~~

**Related sample**: [Tabbar. Add / remove tab](https://snippet.dhtmlx.com/z5vjj83y)

The [removeTab()](tabbar/api/tabbar_removetab_method.md) method expects the id of a tab you want to remove as its parameter. You can get the id of a tab via the [getId()](tabbar/api/tabbar_getid_method.md) method:

~~~js
// removing a tab
const id = tabbar.getId(0);
tabbar.removeTab(id);
~~~

**Related sample**: [Tabbar. Add / remove tab](https://snippet.dhtmlx.com/z5vjj83y)

## Getting the id of a tab

In order to get the id of a tab, make use of the [getId()](tabbar/api/tabbar_getid_method.md) method. It takes the index of the tab in question as a parameter:

~~~js
const id = tabbar.getId(0);
~~~

## Setting/getting the active tab

It is possible to set the active tab via Tabbar API, i.e. with the help of the [setActive()](tabbar/api/tabbar_setactive_method.md) method. It takes the id of a tab as a parameter:

~~~js
const tabbar = new dhx.Tabbar("tabbar_container", {
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

**Related sample**: [Tabbar. Set active](https://snippet.dhtmlx.com/u9ryz38f)

To identify what tab is currently active, apply the [getActive()](tabbar/api/tabbar_getactive_method.md) method. It will return the id of the active tab.

~~~js
const tabbar = new dhx.Tabbar("tabbar_container", {
	mode: "top",			
	views:[
		{ id: "1", tab: "tab-1", css:"panel flex"},
		{ id: "2", tab: "tab-2", css:"panel flex"},
		{ id: "3", tab: "tab-3", css:"panel flex"},
		{ id: "4", tab: "tab-4", css:"panel flex"}
	]
});

const active = tabbar.getActive(); // -> "2"
~~~

**Related sample**: [Tabbar. Get active](https://snippet.dhtmlx.com/xpvkcwiu)

## Enabling/disabling a tab

To enable a tab, use the [enableTab()](tabbar/api/tabbar_enabletab_method.md) method:

~~~js
tabbar.enableTab("London");
~~~

To disable a tab, use the [disableTab()](tabbar/api/tabbar_disabletab_method.md) method:

~~~js
tabbar.disableTab("London");
// -> true|false
~~~

**Related sample**: [Tabbar. Disable tab](https://snippet.dhtmlx.com/9l3egq3z)

## Checking if a tab is disabled

To check if a tab is disabled, pass the id of the tab as an argument to the [isDisabled()](tabbar/api/tabbar_isdisabled_method.md) method:

~~~js
tabbar.isDisabled("London"); // -> returns true/false
~~~

To check if a currently active tab is disabled, call the [isDisabled()](tabbar/api/tabbar_isdisabled_method.md) method without parameters:

~~~js
tabbar.isDisabled(); // -> returns true/false
~~~

**Related sample**: [Tabbar. Is disabled tab](https://snippet.dhtmlx.com/86er2y7m)

## Attaching a component to a cell

You can easily attach any DHTMLX component (except for Message, Popup, Window) to a cell of Tabbar using the attach method of a cell:

~~~js
const dataview = new dhx.DataView(null, {
	template: dataviewTemplate,
	itemsInRow: 3,
	gap: "10px"
});

dataview.data.parse(dataset);

tabbar.getCell("dataview").attach(dataview);
~~~

**Related sample**: [Tabbar. Attach widget](https://snippet.dhtmlx.com/o1jwmw1l)

{{note The Message, Popup, Window components can't be attached to the Tabbar cell because these components can't have the parent container due to their architecture principles.}}