---
sidebar_label: css
title: JavaScript Pagination - css Config 
description: You can explore the css config of Pagination in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# css

@short: Optional. Adds style classes to the pagination

@signature: {'css?: string;'}

@descr:
#### Example

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

**Related sample**: [Pagination. Styling (custom CSS)](https://snippet.dhtmlx.com/e7bujtsu)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Pagination:

~~~js
const pagination = new dhx.Pagination("pagination_container", {
    css: "dhx_widget--bg_white dhx_widget--bordered"
});
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)