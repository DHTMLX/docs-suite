---
sidebar_label: css
title: JavaScript TreeGrid - css Config 
description: You can explore the css config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# css

@short: Optional. Adds style classes to TreeGrid

@signature: {'css?: string;'}

@descr:
#### Example

~~~html
<style>
    .custom {
        --dhx-color-primary: #00c2b8;
        --dhx-background-primary: #f2f2f2;
        --dhx-border-color: #fff;
        --dhx-border: var(--dhx-border-width) solid var(--dhx-border-color);
    }
</style>

<script>
    const treeGrid = new dhx.TreeGrid("treegrid_container", {
        columns: [
            { id: "name", header: [{ text: "Name" }], gravity: 1.5 },
            { id: "native", type: "string", header: [{ text: "Native name" }] },
            { id: "capital", type: "string", header: [{ text: "Capital" }] },
            { id: "currency", type: "string", header: [{ text: "Currency" }] }
        ],
        data: dataset,
        autoWidth: true,
        selection: true,
        css: "custom"
    });
</script>
~~~

**Related sample**: [TreeGrid. Styling (custom CSS)](https://snippet.dhtmlx.com/cpvir0od)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of TreeGrid:

~~~js
const treegrid = new dhx.TreeGrid("treegrid_container", {
    css: "dhx_widget--bg_white"
});
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)
