---
sidebar_label: Customization
title: JavaScript Slider - Customization 
description: You can explore the customization of Slider in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

## Use custom CSS classes {#styling}

You can change the look and feel of a slider.

![Custom styled slider with a teal trackbar and tooltip value 33 in DHTMLX Suite](/img/slider/custom_style.png)

**Related sample**: [Slider. Styling (custom CSS)](https://snippet.dhtmlx.com/ewizud5e)

Follow these steps:

- Add one or more CSS classes with the settings you need. Place them in the `<style>` section of your HTML page or in a separate stylesheet. If you use a stylesheet, include it on the page:

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

- Specify the name of the class you created (or several class names separated by spaces) as the value of the [`css`](slider/api/slider_css_config.md) property in the Slider configuration:

~~~js
const slider = new dhx.Slider("slider_container", {
    css:"my_first_class my_second-class"
});
~~~

For example:

~~~html
<style>
    .custom {
        --dhx-color-primary: #118d8d;
    }
</style>

<script>
    const slider = new dhx.Slider("slider_container", {
        css: "custom"
    });
</script>
~~~
