---
sidebar_label: Customization
title: JavaScript Timepicker - Customization 
description: You can explore the customization of Timepicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

## Use custom CSS classes {#styling}

You can change the look and feel of a timepicker.

![Timepicker styled with a custom red color showing hour and minute sliders in DHTMLX Suite](/img/timepicker/custom_style.png)

**Related sample**: [Timepicker. Styling (custom CSS)](https://snippet.dhtmlx.com/n4xfu4e9)

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

- Specify the name of the class you created (or several class names separated by spaces) as the value of the [`css`](timepicker/api/timepicker_css_config.md) property in the Timepicker configuration:

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