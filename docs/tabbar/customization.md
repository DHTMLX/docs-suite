---
sidebar_label: Customization
title: JavaScript Tabbar - Customization 
description: You can explore the customization of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

## Use custom CSS classes {#styling-tabbar}

You can change the look and feel of a tabbar.

![Custom styled Tabbar with a red active VILNIUS tab and city tabs in DHTMLX Suite](/img/tabbar/custom_style.png)

**Related sample**: [Tabbar. Styling (custom CSS)](https://snippet.dhtmlx.com/47en9f0a)

Follow these steps:

- Add one or more CSS classes with the settings you need. Place them in the `<style>` section of your HTML page or in a separate stylesheet. If you use a stylesheet, include it on the page:

~~~js
<style>
    .my_first_class {
        /*some styles*/
    }
    
    .my_second_class {
        /*some styles*/
    }
</style>
~~~

- Specify the name of the class you created (or several class names separated by spaces) as the value of the [`css`](tabbar/api/tabbar_css_config.md) property in the Tabbar configuration:

~~~js
const tabbar = new dhx.Tabbar("tabbar_container", {
    css:"my_first_class my_second_class"
});
~~~

For example:

~~~html
<style>
    .custom .dhx_tabbar-tab-button--active {
        background-color: rgb(2, 136, 209);
        color: var(--dhx-color-white);
    }
    .custom .dhx_tabbar-header-active {
        background-color: #ff5252;
    }
</style>

<script>
    const tabbar = new dhx.Tabbar("tabbar_container", {
        mode: "top",
        css: "custom",
        tabAlign: "center",
        views: [
            // view objects
        ]
    });
</script>
~~~

