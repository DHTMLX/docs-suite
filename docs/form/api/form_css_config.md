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
 
 
var form = new dhx.Form("form", {
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

**Related sample**: [Form. Form Custom Styles](https://snippet.dhtmlx.com/wnscgb50)

Note, that the DHTMLX library provides [a set of own CSS classes](helpers/base_elements.md#list-of-css-classes-for-styling-a-widget) that you can also apply to change the appearance of Form:

~~~js
var form = new dhx.Form("form", {
    css: "dhx_widget--bg_white"
});
~~~

[comment]: # (@related: form/how_to_start.md#initialize-form form/customization.md)
