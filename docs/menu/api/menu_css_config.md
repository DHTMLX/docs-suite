---
sidebar_label: css
title: JavaScript Menu - css Config 
description: You can explore the css config of Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# css

@short: Optional. Adds style classes to Menu

@signature: {'css?: string;'}

@descr:
#### Example

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
    const menu = new dhx.Menu("menu_container", {
        css: "custom",
    });
</script>
~~~

**Related sample**: [Menu. Styling (custom CSS)](https://snippet.dhtmlx.com/kfy2th5n)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Menu:

~~~js
const menu = new dhx.Menu("menu_container", {
    css: "dhx_widget--bg_white"
});
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)