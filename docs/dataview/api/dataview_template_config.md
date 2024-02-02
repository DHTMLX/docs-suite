---
sidebar_label: template
title: JavaScript DataView - template Config 
description: You can explore the template config of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# template

@short: Optional. Specifies a template for DataView items

@signature: {'template?: (item: object) => string;'}

@params:
The template function takes one parameter:
- `item: object` - an object of a data item

@example:
const dataview = new dhx.DataView("dataview_container", {
    itemsInRow: 4, 
    template: function(item) {
        let template = "<div class='item_wrap'>";
        template += "<img class='image' src=" + "..images/" + item.thumbnailName + " />";
        template += "<h2 class='title'>" + item.value + "</h2>";
        template += "<p class='description'>" + item.shortDescription + "</p>";
        template += "</div>";
        return template;
    }
});

@descr:

**Related sample**: [Dataview. With template](https://snippet.dhtmlx.com/d6l6grr7)

[comment]: # (@related: dataview/configuration.md#template-for-dataview-items)

[comment]: # (@relateapi: dataview/api/dataview_eventhandlers_config.md)
