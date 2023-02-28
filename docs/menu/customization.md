---
sidebar_label: Customization
title: JavaScript Menu - Customization 
description: You can explore the customization of Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

## Icons

DHTMLX Menu uses the [icons of the DHTMLX library](helpers/icon.md) by default. However, you can use any other icon font pack, if necessary. For this, you need to include the desired icon font on a page and apply icons for Menu controls.

For example, you can use the [Font Awesome](https://fontawesome.com/) icon pack by including [link to its CDN](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=web-fonts-with-css) 
after the source files of DHTMLX Menu as follows:

~~~html
<script type="text/javascript" src="../../codebase/menu.js"></script>
<link rel="stylesheet" href="../../codebase/menu.css">

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" 
	integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" 
    crossorigin="anonymous">
~~~

Then you can use the name of the icon as the value of the **icon** property in the [object with the control parameters](menu/data_loading.md#json-format-templates) for menu:

~~~js
const dataset = [
	{ value: "File", 
    	items: [
    		{ value: "New File", icon: "fas fa-file"},
    		{ value: "Open File", icon: "fas fa-file"}   
    	]
    },
    { value: "Edit",
	    items: [
			{ value: "Undo", icon: "fas fa-undo"},
			{ value:  "Redo", icon: "fas fa-redo"}						
		]
	}
];
~~~

![](../assets/menu/custom_icons.png)

**Related sample**: [Menu. Custom icons](https://snippet.dhtmlx.com/nkmz6ilv)

{{note You can use the [Material Design](https://materialdesignicons.com/) icon pack by including [link to its CDN](https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/2.5.94/css/materialdesignicons.css) in the same way.}}

## Styling

There is a possibility to make changes in the look and feel of a menu. 

![](../assets/menu/custom_menu.png)

**Related sample**: [Menu. Styling (custom CSS)](https://snippet.dhtmlx.com/kfy2th5n)

For this you need to take the following steps:

- add a new CSS class(es) with desired settings in the &lt;style&gt; section of your HTML page or in your file with styles (don't forget to include your file on the page in this case)

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

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [css](menu/api/menu_css_config.md) property in the Menu configuration:

~~~js
const menu = new dhx.Menu("menu_container", {
    css:"my_first_class my_second_class"
});
~~~

For example:

~~~html
<style>
	.custom,.custom--popup-menu {
		--dhx-background-primary: #3A434A;
		--dhx-background-secondary: #5a6872;
		--dhx-background-additional: #5a6872;
		--dhx-s-toolbar-background: var(--dhx-background-primary);

		--dhx-color-primary: #118d8d;
		--dhx-color-primary-hover: #49e9e9;
		--dhx-color-primary-active: #49e9e9;

		--dhx-font-color-primary: #fff;
		--dhx-font-color-secondary: #fff;
		--dhx-font-color-additional: #fff;
	}
</style>

<script>
	const menu = new dhx.Menu("menu_container", {
	    css: "custom",
	});

	menu.data.parse(dataset);
</script>
~~~
