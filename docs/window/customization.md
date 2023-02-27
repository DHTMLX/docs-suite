---
sidebar_label: Customization
title: JavaScript Window - Customization 
description: You can explore the customization of Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

You can customize the look and feel of the header and footer of Window together with their functionality.

## Default and custom icons

DHTMLX Window uses the [Material Design](https://materialdesignicons.com/)-based icons by default. However, you can use any other icon font pack, if necessary. For this, you need to include the desired icon font on 
a page and apply icons in any possible part of the window: in the header or the footer.

For example, you can use the [Font Awesome](https://fontawesome.com/) icon pack by including [link to its CDN](https://fontawesome.com/how-to-use/on-the-web/setup/getting-started?using=web-fonts-with-css) 
after the source files of DHTMLX Window as follows:

~~~html
<script type="text/javascript" src="../../codebase/window.js"></script>
<link rel="stylesheet" href="../../codebase/window.css">

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" 
  integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"  
  crossorigin="anonymous">
~~~

Then you can use the name of the icon as the value of the **icon** property in the object with the control parameters for the header or the footer. [See details below](window/customization.md#updatecontrols).

**Related sample**: [Window. Custom icons](https://snippet.dhtmlx.com/ucozvx01)

## Controls and operations

It is possible to add any Toolbar controls into the header/footer of a window.
You can work with controls in the header/footer of a window in the same way as with [Toolbar](toolbar.md) controls, i.e. add new controls, delete unnecessary ones and update the settings of controls, e.g. labels and icons.

### Adding controls

Besides initial controls, you can add other controls into the header/footer on the fly. 

![](../assets/window/custom_buttons.png)

For this, you should apply the [](../data_collection/api/datacollection_add_method.md) method of Data Collection. It takes the parameters below:

<table>
	<tbody>
        <tr>
			<td><b>config</b></td>
			<td>(<i>object</i>) the configuration object of the added control</td>
		</tr>
        <tr>
			<td><b>index</b></td>
			<td>(<i>number</i>) optional, the position to add a control at</td>
		</tr>
        <tr>
			<td><b>parent</b></td>
			<td>(<i>string</i>) optional, the id of a parent control (for the <i>menuItem</i> control type)</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
dhxWindow.header.data.add({icon: "mdi mdi-fullscreen", id: "fullscreen"}, 2);
dhxWindow.footer.data.add({type: "spacer"});
dhxWindow.footer.data.add({icon: "mdi mdi-thumb-up", id: "like"});
dhxWindow.footer.data.add({icon: "mdi mdi-thumb-down", id: "dislike"})
~~~

**Related sample**: [Window. Custom buttons](https://snippet.dhtmlx.com/o7xlvvv3)

### Updating controls

You can change the icon of the Window control and its other config options with the help of the [](../data_collection/api/datacollection_update_method.md) method of Data Collection. It takes two parameters: 

- the id of an icon button
- an object with a new configuration of the control

~~~js
dhxWindow.header.data.update("close", {
	// using FA icon for the Close button
	icon: "fas fa-times" 
});
~~~

**Related sample**: [Window. Custom icons](https://snippet.dhtmlx.com/ucozvx01)

### Deleting controls

To remove a control from the header/footer, make use of the [](../data_collection/api/datacollection_remove_method.md) method of Data Collection. Pass the id of the control that should be removed to the method:

~~~js
dhxWindow.footer.data.remove("accept");
~~~

## Styling

There is a possibility to make changes in the look and feel of a window. 

![](../assets/window/custom_style.png)

**Related sample**: [Window. Styling (custom CSS)](https://snippet.dhtmlx.com/t5mvhwx8)

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

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [](window/api/window_css_config.md) property in the Window configuration:

~~~js
const dhxWindow = new dhx.Window({
	title: "Window", 
    css:"my-first-class my-second-class"
});
dhxWindow.show();
~~~

For example:

~~~html
<style>
	.custom {
		--dhx-background-primary: #efefef;
	}
</style>

<script>
	const dhxWindow = new dhx.Window({
	    height: 400,
	    width: 400,
	    title: "window",
	    css: "custom",
	    html,
	});
	
	dhxWindow.show();
</script>
~~~
