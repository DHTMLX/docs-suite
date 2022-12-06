---
sidebar_label: Customization
title: JavaScript List - Customization 
description: You can explore the customization of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Customization

## Styling

![Styling List](../assets/list/custom_style.png)

**Related sample**: [List. Styling (custom CSS)](https://snippet.dhtmlx.com/s461f09w)

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
const list = new dhx.List("list_container", { 
    css:"my-first-class my-second-class"
});
~~~

For example:

~~~html
<style>
    .custom {
        --dhx-color-primary: #118d8d;
        --dhx-background-primary: rgba(209, 250, 250, 0.3);
        --dhx-background-secondary: rgba(17, 141, 141, 0.1);
        --dhx-background-additional: rgba(17, 141, 141, 0.3);
    }
</style>

<script>
    const list = new dhx.List("list_container", {
        css: "custom dhx_widget--bordered", //the names of the CSS classes separated by space
        template,
        data,
    });
</script>
~~~

## Styling items

You can style particular cells in the list.

![Styling items](../assets/list/custom_css.png)

**Related sample**: [List. Styling (custom CSS for item)](https://snippet.dhtmlx.com/ipu9yshl)

For example, apply some color to each even item, as in:

~~~html
<style>
	.bg-gray {
		background: #faf9f9;
	}
</style>

<script>
    const list = new dhx.List("list_container");
    list.data.parse(dataset);

    list.data.map(function (item, i) {
    	if (!(i % 2)) {
    		list.data.update(item.id, {css: "bg-gray"})
    	}
    });
</script>
~~~

## Adding custom selection

It is also possible to customize selection of an item.

![Custom selection](../assets/list/custom_selection.png)

**Related sample**: [List. Styling selection with CSS](https://snippet.dhtmlx.com/6hss19d3)

~~~html
<style>
    .custom {
        --dhx-color-primary: #118d8d;
    }
    .custom .dhx_list-item--selected {
        background-color: rgba(17, 141, 141, 0.3);
    }
</style>

<script>
    const list = new dhx.List("list_container", {
        template, 
        css: "custom dhx_widget--bordered"
    });
    list.data.parse(data);
</script>
~~~
