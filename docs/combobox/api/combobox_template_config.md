---
sidebar_label: template
title: JavaScript Combo Box - template Config 
description: You can explore the template config of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# template

@short: sets a template of displaying options in the popup list

@signature: {'template?: (item: any) => string;'}

@example:
var combo = new dhx.Combobox("combo_container", {
    template: function (item) {
      return "<div style='display:inline-block'>"
      +"<img style='width:20px;height:20px;margin-right:10px;' src="+item.src+"></div>" 
      + item.value + "</div>";
    }
});

@descr:

**Related sample**: [Combobox. HTML template](https://snippet.dhtmlx.com/z7cpj76i)

The **template** function takes as a parameter an item of data collection and should return a string with a template for rendering options in the list.

[comment]: # (@related: combobox/how_to_start.md#initialize-combobox combobox/configuration.md#template-for-combobox-options)
