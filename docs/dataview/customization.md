---
sidebar_label: Customization
title: Customization
---          

Сustom styling of widget
----------------

There is a possibility to make changes in the look and feel of a dataview. For this you need to take the following steps:

- add a new CSS class(es) with desired settings in the &lt;style&gt; section of your HTML page or in your file with styles (don't forget to include your file on the page in this case):

~~~html
<style>
	.my_first_class {
		/*some styles*/
	}
    
    .my_second_class {
		/*some styles*/
	}
</style>
~~~

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [](dataview/api/dataview_css_config.md) property in the DataView configuration:

~~~js
var dataview = new dhx.DataView({ 
    css:"my_first_class my_second_class"
});
~~~

![Custom dataview styles](../assets/dataview/custom_widget_styles.png)

{{editor    https://snippet.dhtmlx.com/j1yv94o8	Dataview. Custom Widget Styles}}

Custom styling of items 
----------------

You can style particular cells in the dataview. For example, apply some color to each even item, as in:

~~~js
<style>
	.bg-gray {
		background: #efefef;
	}
</style>

var dataview = new dhx.DataView("dataview", {itemsInRow: 5});

dataview.data.parse(dataset);
dataview.data.map(function (item, i) {
	if (i % 2) {
		dataview.data.update(item.id, {css: "bg-gray"})
	}
});
~~~

The image below and the related sample demonstrate another example of customization of Dataview items:

![Custom items styles](../assets/dataview/custom_items_styles.png)

{{editor    https://snippet.dhtmlx.com/kpnzizbf	Dataview. Custom Item Styles}}

Custom styling of selection and focus
--------------------------

You can apply your own styles for selection of items and focus with the help of the corresponding CSS classes: **.dhx_dataview-item--selected** and **.dhx_dataview-item--focus**. There is no need to use any
additional custom classes.

~~~js
<style>
	.dhx_dataview-item--selected {
		border-color: transparent;
		box-shadow: 0px 1px 5px 0px rgb(2, 136, 209, 0.5), 
    		inset 0px 0px 0px 1px rgb(2, 136, 209, 1);
	}
</style>

var dataview = new dhx.DataView("dataview", {itemsInRow: 3});
~~~

![Custom selection styles](../assets/dataview/custom_selection_styles.png)

{{editor    https://snippet.dhtmlx.com/n98tzmzp	Dataview. Custom Selection Styles}}


