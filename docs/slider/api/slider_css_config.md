---
sidebar_label: css
title: JavaScript Slider - css Config 
description: You can explore the css config of Slider in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# css

@short: Optional. Adds style classes for the component

@signature: {'css?: string;'}

@descr:
#### Example

~~~html
<style>
    .custom {
        --dhx-color-primary: #118d8d;
    }
</style>

<script>
    const slider = new dhx.Slider("slider_container", {
        css: "custom"
    });
</script>
~~~

**Related sample**: [Slider. Styling (custom CSS)](https://snippet.dhtmlx.com/ewizud5e)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Slider:

~~~js
const slider = new dhx.Slider("slider_container", {
    css: "dhx_widget--bg_white"
});
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)
