---
sidebar_label: htmlEnable
title: JavaScript Combo Box - htmlEnable Config 
description: You can explore the htmlEnable config of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# htmlEnable

@short: enables/disables rendering of HTML content (inner HTML) in Combobox options

@signature: {'htmlEnable?: boolean;'}

@default: true

@example:
const combo = new dhx.Combobox("combo_container", { 
    htmlEnable: false, // disables render of HTML-content
    template: function (item) {
        return "<div style='user-select:none; display: flex; justify-content: space-between;'>" +
            "<span>" + item.value + "</span>" +
            "<img style='height: 20px; width: 30px; border: 1px solid gray' src=" + item.src + "></img>" +
            "</div>";
    }
});

@descr: 

When the property is set to *true*, the combobox displays the HTML content in its options and doesn't prevent XSS attacks.

You can disable rendering of the HTML content and display it as plain text via setting the property to *false*.

**Related sample**: [Combobox. Disable HTML in Data](https://snippet.dhtmlx.com/e4dolhfs)

#### Related article

[HTML content of ComboBox options](combobox/configuration.md/#html-content-of-combobox-options)
