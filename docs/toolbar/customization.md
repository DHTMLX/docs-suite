---
sidebar_label: Customization
title: JavaScript Toolbar - Customization 
description: You can explore the customization of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

## Icons

DHTMLX Toolbar uses the [default icons of the DHTMLX library](helpers/icon.md). However, you can use another icon font pack. To do this, include the icon font on the page and assign its icons to Toolbar controls.

For example, to use the [Font Awesome](https://fontawesome.com/) icon pack, include a [link to its CDN](https://docs.fontawesome.com/web/setup/get-started) after the source files of DHTMLX Toolbar:

~~~html
<script type="text/javascript" src="../../codebase/toolbar.js"></script>
<link rel="stylesheet" href="../../codebase/toolbar.css">

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" 
    integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" 
    crossorigin="anonymous">
~~~

Then set an icon name as the value of the `icon` property in the [object with the control parameters](toolbar/load_data.md#json-format-templates):

~~~js
const toolbarData = [
    { type: "button", icon: "fas fa-bold", twoState: true },
    { type: "button", icon: "fas fa-underline", twoState: true },
    { type: "button", icon: "fas fa-italic", twoState: true },
    { type: "button", icon: "fas fa-strikethrough", twoState: true }
];
~~~

![Toolbar with Font Awesome bold, underline, italic, and strikethrough two-state buttons in DHTMLX Suite](/img/toolbar/fa_icons.png)

**Related sample**: [Toolbar. Custom icons](https://snippet.dhtmlx.com/4aiwvow7)

{{note You can add the [Material Design](https://pictogrammers.com/library/mdi/?welcome) icon pack in the same way: include a [link to its CDN](https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/2.5.94/css/materialdesignicons.css) on the page.}}

## Use custom CSS classes {#styling}

You can change the look and feel of a toolbar.

![Dark-themed Toolbar with custom CSS styling for buttons, search, and login links in DHTMLX Suite](/img/toolbar/custom_style.png)

**Related sample**: [Toolbar. Styling (custom CSS)](https://snippet.dhtmlx.com/uekgjwsi)

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

- Specify the name of the class you created (or several class names separated by spaces) as the value of the [`css`](toolbar/api/toolbar_css_config.md) property in the Toolbar configuration:

~~~js
 
const toolbar = new dhx.Toolbar("toolbar_container", {
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
        --dhx-font-color-secondary: #fff;
        --dhx-font-color-additional: #fff;
    }
</style>

<script>
    const toolbar = new dhx.Toolbar("toolbar", {
        css: "custom"
    });
    toolbar.data.parse(data);
</script>
~~~