---
sidebar_label: template
title: template
---          


@short: sets a template of displaying options in the popup list

@signature: template?: (item: any) => string;

@example: 
var combo = new dhx.Combobox("combo_container", {
    template: function (item) {
      return "<div style='display:inline-block'>"
      +"<img style='width:20px;height:20px;margin-right:10px;' src="+item.src+"></div>" 
      + item.value + "</div>";
    }
});

@template:	api_config
@descr: 
The **template** function takes as a parameter an item of data collection and should return a string with a template for rendering options in the list.


@related: combo/how_to_start.md#initializecombobox
combo/configuration.md#templateforcomboboxoptions

@relatedsample: https://snippet.dhtmlx.com/z7cpj76i	Combobox. Template

