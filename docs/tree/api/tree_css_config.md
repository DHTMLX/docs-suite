---
sidebar_label: css
title: JavaScript Tree - css Config 
description: You can explore the css config of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# css

@short: Optional. Adds a CSS class(es) to the component

@signature: {'css?: string;'}

@descr:
#### Example

~~~html
<style>
    .custom {
        --dhx-font-weight-regular: 500;
        --dhx-font-color-primary: #0ab169;
    }
	.custom .dhx_tree-folder  {
        --dhx-font-color-primary: #0288d1;
	}
</style>

<script>
    const tree = new dhx.Tree("tree_container", {
        css: "custom"
    });
</script>
~~~

**Related samples**:
- [Tree. Styling (custom CSS)](https://snippet.dhtmlx.com/ocv4p7zg)
- [Tree. Custom toggle icon](https://snippet.dhtmlx.com/zapehxd3)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Tree:

~~~js
const tree = new dhx.Tree("tree_container", {
	css: "dhx_widget--bg-gray"
});
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)
