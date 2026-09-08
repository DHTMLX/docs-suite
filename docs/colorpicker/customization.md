---
sidebar_label: Customization
title: JavaScript Colorpicker - Customization 
description: You can explore the customization of Colorpicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

## Styling

You can change the look and feel of Colorpicker.

![ColorPicker palette customized with circular color cells via custom CSS in DHTMLX Suite](/img/colorpicker/colorpicker_css.png)

**Related sample**: [Colorpicker. Styling (custom CSS)](https://snippet.dhtmlx.com/mnwi3sp0)

Follow these steps:

- Add new CSS classes with the styles you need to the `<style>` section of your HTML page or to your stylesheet (remember to link the stylesheet on the page):

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

- Specify the class name (or several names separated by spaces) as the value of the [](colorpicker/api/colorpicker_css_config.md) property:

~~~js
const colorpicker = new dhx.Colorpicker("colorpicker_container", {
    css:"my-first-class my-second-class"
});
~~~

For instance:

~~~html
<style>
    .custom-class {
        background: #f2f2f2;
        border: solid 1px lightblue;
    }

    .custom-class .dhx_palette__cell {
        border-radius: 50%;
    }

    .custom-class .dhx_palette__cell:after {
        border-radius: 50%;
    }

    .custom-class .dhx_colorpicker-custom-colors__picker {
        border-radius: 50%;
    }
</style>

<script>
    const colorpicker = new dhx.Colorpicker("colorpicker_container", {
        css: "custom-class dhx_widget--bordered",
    });
</script>
~~~
