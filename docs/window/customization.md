---
sidebar_label: Customization
title: JavaScript Window - Customization 
description: You can explore the customization of Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

This article describes how to change icons, manage controls in the header and footer, and apply custom styles to a window.

## Default and custom icons

DHTMLX Window uses default icons based on [Material Design](https://pictogrammers.com/library/mdi/?welcome). However, you can use another icon font pack. To do this, include the icon font on the page and assign its icons to controls in the header or footer.

For example, to use the [Font Awesome](https://fontawesome.com/) icon pack, include a [link to its CDN](https://docs.fontawesome.com/web/setup/get-started) after the source files of DHTMLX Window:

~~~html
<script type="text/javascript" src="../../codebase/window.js"></script>
<link rel="stylesheet" href="../../codebase/window.css">

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" 
  integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"  
  crossorigin="anonymous">
~~~

Then set an icon name as the value of the `icon` property in the object with the control parameters for the header or footer. [See details below](window/customization.md).

**Related sample**: [Window. Custom icons](https://snippet.dhtmlx.com/ucozvx01)

## Controls and operations

The header and footer of a window can contain any Toolbar controls.
You can manage them in the same way as [Toolbar](/toolbar/) controls: add new controls, update control settings such as labels and icons, and delete controls you don't need.

### Add controls {#adding-controls}

You can add more controls to the header or footer at runtime.

![Window with custom thumb up and thumb down buttons added to the footer in DHTMLX Suite](/img/window/custom_buttons.png)

Use the [](data_collection/api/datacollection_add_method.md) method of TreeCollection. The method takes the following parameters:

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
            <td>(<i>string</i>) optional, the id of a parent control (for the <code>menuItem</code> control type)</td>
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

### Update controls {#updating-controls}

Use the [](data_collection/api/datacollection_update_method.md) method of TreeCollection to change the icon or other settings of a control in the header or footer. The method takes two parameters:

- The id of the control
- An object with the new configuration of the control

~~~js
dhxWindow.header.data.update("close", {
    // using FA icon for the Close button
    icon: "fas fa-times" 
});
~~~

**Related sample**: [Window. Custom icons](https://snippet.dhtmlx.com/ucozvx01)

### Delete controls {#deleting-controls}

Use the [](data_collection/api/datacollection_remove_method.md) method of TreeCollection to remove a control from the header or footer. Pass the id of the control to the method:

~~~js
dhxWindow.footer.data.remove("accept");
~~~

## Use custom CSS classes {#styling}

You can change the look and feel of a window.

![Custom styled Window with fullscreen and Close header buttons and footer icons in DHTMLX Suite](/img/window/custom_style.png)

**Related sample**: [Window. Styling (custom CSS)](https://snippet.dhtmlx.com/t5mvhwx8)

Follow these steps:

- Add one or more CSS classes with the settings you need. Place them in the `<style>` section of your HTML page or in a separate stylesheet. If you use a stylesheet, include it on the page:

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

- Specify the name of the class you created (or several class names separated by spaces) as the value of the [](window/api/window_css_config.md) property in the Window configuration:

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
