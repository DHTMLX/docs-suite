---
sidebar_label: Configuration
title: JavaScript List - Configuration 
description: You can explore the configuration of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Configuration

## Arrow keys navigation

The List component provides the possibility to navigate its items with arrow keys. You can enable this functionality using the [](list/api/list_keynavigation_config.md) property:

~~~js
const list = new dhx.List("list_container", {keyNavigation:true});
~~~

As a value of this option you can use either *true/false* to switch it on/off, or specify a *function* that will define some custom navigation logic.

### Default shortcut keys

<table>
	<tbody>
        <tr>
			<td><b>ArrowUp</b></td>
			<td>moves focus to the previous item</td>
		</tr>
        <tr>
			<td><b>ArrowDown</b></td>
			<td>moves focus to the next item</td>
		</tr>
        <tr>
			<td><b>Enter/Shift+Enter/Ctrl+Enter</b></td>
			<td>adds selection to a List item in focus</td>
		</tr>
		<tr>
			<td><b>Enter</b></td>
			<td>adds selection to a List item in focus, activates editor for the selected item (when the "editable" property is enabled)</td>
		</tr>
        <tr>
			<td><b>Ctrl+A</b></td>
			<td>selects all items at once (when the "multiselection" property is enabled)</td>
		</tr>
    </tbody>
</table>

## Drag-n-drop of items

DHTMLX List supports drag-n-drop of items between lists in several modes. To begin with, you should specify the [](list/api/list_dragmode_config.md) property in the configuration object of List. Then define which mode you need:

- "target" - a list takes items from other lists, while its items can't be dragged out of it
- "source" - a list allows dragging its items out and can't take items from other lists
- "both" - a list both takes items from other lists and allows dragging its items out as well

~~~js
const list = new dhx.List("list_container", { 
    dragMode:"source"
});
~~~

In order to provide the possiblity of dragging several items between lists, you should enable the [](list/api/list_multiselection_config.md) in addition to the [](list/api/list_dragmode_config.md):

~~~js
const list = new dhx.List("list_container", { 
    dragMode:"source",
    multiselection:true
});
~~~

Read more about multiselection in List [below](#multiple-selection-of-items).

**Related sample**: [List. Drag-n-drop](https://snippet.dhtmlx.com/yfz6ai7j)

## Dynamic rendering of items

All data is loaded into List and rendered at once. In case you use large amounts of data in the list, it may slow down the work of your app.

There is a possibility to increase the speed of your application containing a List by enabling dynamic data rendering. It presupposes that data is rendered by parts and on demand.
To make use of dynamic data rendering, switch the [](list/api/list_virtual_config.md) property on.

~~~js
const list = new dhx.List("list_container", { 
    virtual:true
});
~~~

**Related sample**: [List. Virtual list](https://snippet.dhtmlx.com/x4gxy38e)

## Editing items

![](../assets/list/editable.png)

**Related sample**: [List. Inline editing](https://snippet.dhtmlx.com/f26lfcai)

You can enable the possibility to edit List items with the help of the [](list/api/list_editable_config.md) configuration option:

~~~js
const list = new dhx.List("list_container", {editable:true});
~~~

## Height of an item

![](../assets/list/item_height.png)

**Related sample**: [List. Setup list item height](https://snippet.dhtmlx.com/89buovn2)

You can specify the necessary height of an item and set it before initialization of List via the [itemHeight](list/api/list_itemheight_config.md) property either as a number:

~~~js {3}
// sets the height of an item as a number
const list = new dhx.List("list_container", { 
    itemHeight:30 
});
~~~

or as a string value

~~~js {3}
// sets the height of an item as a string value
const list = new dhx.List("list_container", { 
    itemHeight:"30px"
});
~~~

{{note The usage of the *CSS calc() function* within the [](list/api/list_itemheight_config.md) property is not possible.}}

When the [virtual](list/api/list_virtual_config.md) property is set to *true*, the default height of a list item is 37. To change this value, make use of the **itemHeight** property, as described above.

## Height of the List

![](../assets/list/list_height.png)

**Related sample**: [List. Setup list height](https://snippet.dhtmlx.com/k2mj2sz7)

You can define the desired height of a list via the [height](list/api/list_height_config.md) configuration option as easy as that:

~~~js
const list = new dhx.List("list_container", {height: 700});
~~~

You can also use a string value for setting the height of List:

~~~js
const list = new dhx.List("list_container", {height: "700px"});
~~~

{{note The usage of the *CSS calc() function* within the [](list/api/list_height_config.md) property is not possible.}}

## Multiple selection of items

![](../assets/list/multiselection.png)

**Related sample**: [List. Multiselection](https://snippet.dhtmlx.com/0sorkczm)

By default, you can select only one item in a list, since selection of another item resets selection of the previous one. To enable the possibility to select several List items, make use of the 
[](list/api/list_multiselection_config.md) configuration option:

~~~js
const list = new dhx.List("list_container", {multiselection:true});
~~~

Setting the **multiselection** property to *true* presupposes selection of multiple items by using Ctrl key.
It is also possible to use the "Ctrl+click" combination to select several items. For this, you need to set the 
[](list/api/list_multiselection_config.md) configuration option to *"ctrlClick"*:
~~~js
const list = new dhx.List("list_container", {
    multiselection:"ctrlClick"   
});
~~~

## Selection of items

![](../assets/list/disable_selection.png)

**Related sample**: [List. Disable selection](https://snippet.dhtmlx.com/dk4czs1z)

The default configuration of List provides you with the selection feature that allows highlighting a List item. To disable selection in a List you need to set the [](list/api/list_selection_config.md) configuration property to *false*:

~~~js
const list = new dhx.List("list_container", {selection: false});
~~~

## Template for List items

![](../assets/list/list_template.png)

**Related sample**: [List. HTML template for item](https://snippet.dhtmlx.com/gtzdwpj4)

You can define a template for rendering items in a List with the help of the [](list/api/list_template_config.md) configuration property. Set as its value a function that takes one parameter:

- **item** - (*object*) an object of a data item

~~~js

const list = new dhx.List("list_container", {
	css: "dhx_widget--bordered", 
    template: function(item) {
		const template = "<div class='list_item'>";
		template += "<div class='item_name'>"+item.value;
				
		template+="<span class='item_author'> by "
		template += item.authors.filter(function(item){return item}).join(", ");
		template += item.publishedDate ? ", " 
        template += new Date(item.publishedDate.$date).getFullYear() : "";
		template += "</span>";
		template += "</div>";
				
		template += "<div class='item_categories'>"+item.categories.join(", ")+"</div>";
		template += "</div>";
		return template;
	},
    itemHeight: 72
});
~~~

## Event handlers for the template

Starting from v7.0, it is possible to assign event handlers to HTML elements of a custom template of List items by using the [](list/api/list_eventhandlers_config.md) configuration option:

~~~js {1-13,18-29}
function template(item) {
	let template = "<div class='list_item'>";
	template += "<div class='item_name'>"+item.value;
	template +="<span class='item_author'> by "
	template += item.authors.filter(function(item){return item}).join(", ");
	template += item.publishedDate ? ", " 
	template += new Date(item.publishedDate.$date).getFullYear() : "";
	template += "</span>";
	template += "</div>";
	template += "<span class='item_categories'>"+item.categories.join(", ")+"</span>";
	template += "</div>";
	return template;
}

const list = new dhx.List("list_container", {
	css: "dhx_widget--bordered",
	template: template,
	eventHandlers: { 
		onclick: {
			list_item: function(event) {
				display("You clicked on " + event.target.tagName);
			}, 
		},
		onmouseover: {
			list_item: function(event, id) { 
				display(list.data.getItem(id).value);
			}, 
		} 
	} 
});
~~~

**Related sample**: [List. Handling events in template](https://snippet.dhtmlx.com/7fyilbb7)

## HTML content of List options

By default, List displays HTML content if it is specified for its options.

In case you need to disable rendering of HTML content and show it as plain text to keep your application safe, set the [htmlEnable](../../list/api/list_htmlenable_config/) property to *false*. 

~~~js
const list = new dhx.List("list_container", {
    htmlEnable: false, // disables render of HTML content
    template: template,
    data: data
});
~~~

**Related sample**: [List. Disable HTML rendering](https://snippet.dhtmlx.com/tj0tn7fl)
