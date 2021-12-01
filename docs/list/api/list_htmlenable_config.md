---
sidebar_label: htmlEnable
title: JavaScript List - htmlEnable Config 
description: You can explore the htmlEnable config of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# htmlEnable

@short: enables/disables rendering of HTML content (inner HTML) in List options

@signature: {'htmlEnable?: boolean'}

@example:
//specifies a template for List items
function template(item) {
    let template = "<div class='item_name' style='font-weight: 500'>" + item.title;
    template += "</div>";
    template += "<div class='item_author'>";
    template += item.authors + ", ";
    template += item.publication_date.split("/")[2] + "</div>";
    return template;
};

const list = new dhx.List("list", {
    htmlEnable: false, // disables render of HTML content
    template: template,
    data: data
});

@descr:

When the property is set to *true*, the list displays the HTML content for its options but doesn't prevent XSS attacks.

You can disable rendering of the HTML content and display it as plain text via setting the property to *false*.

**Related sample**: [List. Disable HTML in Data](https://snippet.dhtmlx.com/tj0tn7fl)

#### Related article

[HTML content of List options](list/configuration.md/#html-content-of-list-options)

