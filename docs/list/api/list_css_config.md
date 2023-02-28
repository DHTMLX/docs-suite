---
sidebar_label: css
title: JavaScript List - css Config 
description: You can explore the css config of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# css

@short: Optional. Adds a CSS class(es) to the component

@signature: {'css?: string;'}

@descr:
#### Example

~~~html
<style>
    .custom {
        --dhx-color-primary: #118d8d;
        --dhx-background-primary: rgba(209, 250, 250, 0.3);
        --dhx-background-secondary: rgba(17, 141, 141, 0.1);
        --dhx-background-additional: rgba(17, 141, 141, 0.3);
    }
</style>

<script>
    const list = new dhx.List("list_container", {
        css: "custom dhx_widget--bordered", //the names of the CSS classes separated by space
        template,
        data,
    });
</script>
~~~

**Related samples**:
- [List. Styling (custom CSS)](https://snippet.dhtmlx.com/s461f09w)
- [List. Styling selection with CSS](https://snippet.dhtmlx.com/6hss19d3)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of List:

~~~js
const list = new dhx.List("list_container", {
	css: "dhx_widget--bg_white"
});
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)