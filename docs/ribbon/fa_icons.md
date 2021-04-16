---
sidebar_label: Customization
title: Customization
---          

Icons
------------

dhtmlxRibbon uses the [icons of the DHTMLX library](helpers/icon.md) by default. However, you can use any other icon font pack, if necessary. For this, you need to include the desired icon font on 
a page and apply icons for Ribbon controls.

For example, you can use the [Material Design](https://materialdesignicons.com/) icon pack by including [link to its CDN](https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/2.5.94/css/materialdesignicons.css)
after the source files of dhtmlxRibbon as follows:

~~~html
<script type="text/javascript" src="../../codebase/ribbon.js"></script>
<link rel="stylesheet" href="../../codebase/ribbon.css">

<link href="https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css?v=6.4.4" 
	media="all" rel="stylesheet" type="text/css">
~~~

Then you can use the name of the icon as the value of the **icon** property in the [object with the control parameters](ribbon/loading_json.md#jsonformattemplates) for ribbon:

![](../assets/ribbon/fa_icons.png)

~~~js
var data = [
	{
		type: "block",
		"items": [
			{
				type: "block",
				"items": [
					{
						value: "New",
						icon: "mdi mdi-file-outline",
						size: "auto",
					}
				]
			},
			{
				type: "block",
				direction: "col",
				"items": [
					{
						value: "Add",
						icon: "mdi mdi-plus",
						size: "small",
					},
					{
						value: "Remove",
						icon: "mdi mdi-minus",
						size: "small",
					}
				]
			}
		]
	}
]
~~~

{{editor	https://snippet.dhtmlx.com/sfkou9gp	Ribbon. Custom Icons}}

{{note You can use the [Font Awesome](https://fontawesome.com/) icon pack by including [link to its CDN](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=web-fonts-with-css) in the same way.}}

Styling 
-----------

There is a possibility to make changes in the look and feel of a ribbon. 

![](../assets/ribbon/custom_style.png)


{{editor	https://snippet.dhtmlx.com/9ckg47ro	Ribbon. Custom Css}}

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

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [css](ribbon/api/ribbon_css_config.md) property in the Ribbon configuration:

~~~js
var ribbon = new dhx.Ribbon({
    css:"my_first_class my_second_class"
});
~~~





