---
sidebar_label: Customization
title: JavaScript Pagination - Customization 
description: You can explore the customization of Pagination in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

## Use custom CSS classes {#styling}

You can change the look and feel of a pagination.

![DHTMLX Pagination with a purple custom-styled navigation bar below a grid of sections in DHTMLX Suite](/img/pagination/styling.png)

**Related sample**: [Pagination. Styling (custom CSS)](https://snippet.dhtmlx.com/e7bujtsu)

Follow these steps:

- Add one or more CSS classes with the settings you need. Place them in the `<style>` section of your HTML page or in a separate stylesheet. If you use a stylesheet, include it on the page:

~~~html
<style>
    .my_first_class {
        /*some styles*/
    }
    
    .my_second-class {
        /*some styles*/
    }
</style>
~~~

- Specify the name of the class you created (or several class names separated by spaces) as the value of the [`css`](pagination/api/pagination_css_config.md) property in the Pagination configuration:

~~~js
const pagination = new dhx.Pagination("pagination_container",{
    css:"my_first_class my_second_class"    
});
~~~

For example:

~~~html
<style>
    .custom {
        --dhx-background-primary: #3A434A;
        --dhx-background-secondary: #5e6d78;
        --dhx-color-primary: #118d8d;
        --dhx-font-color-primary: #fff;
    }
</style>

<script>
    const pagination = new dhx.Pagination("pagination_container", {
        css: "custom dhx_widget--bordered dhx_widget--no-border_top",
        data: list.data
    });
</script>
~~~
