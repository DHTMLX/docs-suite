---
sidebar_label: Customization
title: JavaScript Ribbon - Customization 
description: You can explore the customization of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

## Icons

DHTMLX Ribbon uses the [default icons of the DHTMLX library](helpers/icon.md). However, you can use another icon font pack. To do this, include the icon font on the page and assign its icons to Ribbon controls.

For example, to use the [Material Design](https://pictogrammers.com/library/mdi/?welcome) icon pack, include a [link to its CDN](https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/2.5.94/css/materialdesignicons.css) after the source files of DHTMLX Ribbon:

~~~html
<script type="text/javascript" src="../../codebase/ribbon.js"></script>
<link rel="stylesheet" href="../../codebase/ribbon.css">

<link href="https://cdn.materialdesignicons.com/3.6.95/css/materialdesignicons.min.css?v=6.4.4" 
    media="all" rel="stylesheet" type="text/css">
~~~

Then set an icon name as the value of the `icon` property in the [object with the control parameters](ribbon/data_loading.md#json-format-templates):

![Ribbon buttons with custom icon font showing New, Add and Remove in DHTMLX Suite](/img/ribbon/fa_icons.png)

~~~js
const data = [
    {
        type: "block",
        "items": [
            {
                type: "block",
                "items": [
                    {
                        value: "New",
                        icon: "mdi mdi-file-outline",
                        size: "auto",
                    }
                ]
            },
            {
                type: "block",
                direction: "col",
                "items": [
                    {
                        value: "Add",
                        icon: "mdi mdi-plus",
                        size: "small",
                    },
                    {
                        value: "Remove",
                        icon: "mdi mdi-minus",
                        size: "small",
                    }
                ]
            }
        ]
    }
];
~~~

**Related sample**: [Ribbon. Custom icons](https://snippet.dhtmlx.com/sfkou9gp)

{{note To use the [Font Awesome](https://fontawesome.com/) icon pack, include a [link to its CDN](https://docs.fontawesome.com/web/setup/get-started) in the same way.}}

## Use custom CSS classes {#styling}

You can change the look and feel of a ribbon.

![Ribbon with a highlighted Left button showing custom CSS styling in DHTMLX Suite](/img/ribbon/custom_style.png)

**Related sample**: [Ribbon. Styling (custom CSS)](https://snippet.dhtmlx.com/9ckg47ro)

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

- Specify the name of the class you created (or several class names separated by spaces) as the value of the [`css`](ribbon/api/ribbon_css_config.md) property in the Ribbon configuration:

~~~js
const ribbon = new dhx.Ribbon("ribbon_container", {
    css:"my_first_class my_second_class"
});
~~~

For example:

~~~html
<style>
    .custom {
        --dhx-background-secondary: var(--dhx-color-white);
        --dhx-color-primary-light-hover: #aefafa;
        --dhx-color-primary-light-active: #118d8d;
    }
</style>

<script>
    const ribbon = new dhx.Ribbon("ribbon_container", {
        css: "custom dhx_widget--bordered"
    });

    ribbon.data.parse(data);
</script>
~~~
