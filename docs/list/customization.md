---
sidebar_label: Customization
title: JavaScript List - Customization 
description: You can explore the customization of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Customization

## Styling

![](../assets/list/custom_style.png)

There is a possibility to make changes in the look and feel of a list. For this you need to take the following steps:

- add a new CSS class(es) with desired settings in the &lt;style&gt; section of your HTML page or in your file with styles (don't forget to include your file on the page in this case):

~~~html
<style>
	.my-first-class {
		/*some styles*/
	}
    
    .my-second-class {
		/*some styles*/
	}
</style>
~~~

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [css](list/api/list_css_config.md) property in the List configuration:

~~~js
var list = new dhx.List({ 
    css:"my-first-class my-second-class"
});
~~~

**Related sample**: [List. Custom Styles](https://snippet.dhtmlx.com/s461f09w)

## Styling items

You can style particular cells in the list.

![](../assets/list/custom_css.png)

For example, apply some color to each even item, as in:

~~~js
var list = new dhx.List("list");
list.data.parse(dataset);

list.data.map(function (item, i) {
	if (!(i % 2)) {
		list.data.update(item.id, {css: "bg-gray"})
	}
})

<style>
	.bg-gray {
		background: #faf9f9;
	}
</style>
~~~

**Related sample**: [List. Custom item Styles](https://snippet.dhtmlx.com/ipu9yshl)

## Adding custom selection

It is also possible to customize selection of an item.

![](../assets/list/custom_selection.png)

**Related sample**: [List. Add Custom Selection With Custom Css](https://snippet.dhtmlx.com/6hss19d3)

~~~js
<style>
  .custom-class {
    padding: 20px;
  }
  .custom-class.dhx_list-item--selected {
    background-color: rgba(2, 136, 209, 0.3);
    box-shadow: inset 2px 0 0 0 rgb(2, 136, 209),
      inset -2px 0 0 0 #0288d1,
      inset 0 -2px 0 0 #0288d1,
      inset 0 2px 0 0 #0288d1;
  }
</style>

var list = new dhx.List("list");
list.data.parse(dataset);
 
list.data.map(function (item, i) {
	list.data.update(item.id, {css: "custom-class"})
});
~~~
