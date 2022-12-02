---
sidebar_label: css
title: JavaScript Form - css Config 
description: You can explore the css Config of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# css

@short: the name of a CSS class(es) applied to the control group

@signature: {'css?: string;'}

@example:
<style>
    .bg-white .dhx_input {
        background: #fff;
    }
</style>
 
 
const form = new dhx.Form("form_container", {
    css:"bg-gray",
    rows: [
        {   
            css:"bg-white",
            type: "input",
            label: "Name",
            placeholder: "John Doe"
        },
        {
            css:"bg-white",
            type: "input",
            label: "Email",
            placeholder: "jd@mail.name"
        },
        // more options
    ]
});

@descr:

**Related sample**: [Form. Styling (custom CSS)](https://snippet.dhtmlx.com/wnscgb50)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Form:

~~~js
const form = new dhx.Form("form_container", {
    css: "dhx_widget--bg_white"
});
~~~

**Related articles**: 
- [List of CSS classes for styling a widget](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget)
- [Themes](themes.md)
