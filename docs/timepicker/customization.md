---
sidebar_label: Customization
title: JavaScript Timepicker - Customization 
description: You can explore the customization of Timepicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

## Styling

There is a possibility to make changes in the look and feel of a timepicker. 

![Styling Timepicker](../assets/timepicker/custom_style.png)

**Related sample**: [Timepicker. Styling (custom CSS)](https://snippet.dhtmlx.com/n4xfu4e9)

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

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [css](timepicker/api/timepicker_css_config.md) property in the TimePicker configuration:

~~~js
const timepicker = new dhx.Timepicker("timepicker_container", { 
    css:"my-first-class my-second-class"
});
~~~

For example:

~~~html
<style>
  .custom {
    --dhx-font-color-primary: #c00;
    --dhx-color-primary: #ff5c5c;
  }
</style>

<script>
    const timepicker = new dhx.Timepicker("timepicker_container", {
          css: "custom dhx_widget--bordered"
    });
</script>
~~~