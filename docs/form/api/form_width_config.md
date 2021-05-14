---
sidebar_label: width
title: width
---          

@short: sets the width of the control group

@signature: {'width?: string | number | "content";'}

@type: string | number | "content"

@example: 
var form = new dhx.Form("form_container", {
	css: "dhx_widget--bordered",
	width: "500px", /*!*/ // the width for rows
    rows: [
        {
            width: "500px", /*!*/ // the width for cols
            css: "dhx_layout-cell--bordered",
            cols: [{
                type: "checkbox",
                label: "start",
                name: "align",
                labelInline: true,
                value: "start",
                checked: true
            },
            {
                type: "checkbox",
                label: "center",
                name: "align",
                labelInline: true,
                value: "center"
            }]
        }
    ]
});

@descr: 

**Related sample**: [Form. Blocks](https://snippet.dhtmlx.com/1pzybtja)

@changelog: added in v6.4

[comment]: # (@related: form/how_to_start.md#initialize-form form/configuration.md#widthheight)

[comment]: # (@relatedapi: form/api/form_height_config.md)
