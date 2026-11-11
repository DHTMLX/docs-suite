---
sidebar_label: Customization
title: JavaScript Sidebar - Customization 
description: You can explore the customization of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

## Icons

DHTMLX Sidebar uses the [default icons of the DHTMLX library](helpers/icon.md). However, you can use another icon font pack. To do this, include the icon font on the page and assign its icons to Sidebar controls.

For example, to use the [Font Awesome](https://fontawesome.com/) icon pack, include a [link to its CDN](https://docs.fontawesome.com/web/setup/get-started) after the source files of DHTMLX Sidebar:

~~~html
<script type="text/javascript" src="../../codebase/sidebar.js"></script>
<link rel="stylesheet" href="../../codebase/sidebar.css">

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" 
    integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" 
    crossorigin="anonymous">
~~~

Then set an icon name as the value of the `icon` property in the [object with the control parameters](sidebar/data_loading.md#json-format-templates):

~~~js
const sidebarData = [
    {
        icon: "fas fa-bold",
        twoState: true,
        value: "Bold"
    },
    {
        icon: "fas fa-underline",
        twoState: true,
        value: "Underline"
    },
    {        
        icon: "fas fa-italic",
        twoState: true,
        value: "Italic"
    },
    {
        icon: "fas fa-strikethrough",
        twoState: true,
        value: "Strikethrough"
    }
];
~~~

![Sidebar items using Font Awesome icons for Bold, Underline, Italic and Strikethrough in DHTMLX Suite](/img/sidebar/fa_icons.png)

{{note To use the [Material Design](https://pictogrammers.com/library/mdi/?welcome) icon pack, include a [link to its CDN](https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/2.5.94/css/materialdesignicons.css) in the same way.}}

## Use custom CSS classes {#styling}

You can change the look and feel of a sidebar.

![Dark themed Sidebar styled with custom CSS showing navigation items, badges and a submenu in DHTMLX Suite](/img/sidebar/custom_style.png)

**Related sample**: [Sidebar. Styling (custom CSS)](https://snippet.dhtmlx.com/3mhhvvcr)

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

- Specify the name of the class you created (or several class names separated by spaces) as the value of the [`css`](sidebar/api/sidebar_css_config.md) property in the Sidebar configuration:

~~~js
const sidebar = new dhx.Sidebar("sidebar_container", {
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
        --dhx-font-color-secondary: rgba(255, 255, 255, 0.75);
        --dhx-font-color-additional: #fff;
    }
</style>

<script>
    const sidebar = new dhx.Sidebar("sidebar_container", {
        css: "custom",
    });

    sidebar.data.parse(data);
</script>
~~~
