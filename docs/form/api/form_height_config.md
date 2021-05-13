---
sidebar_label: height
title: height
---          

@short: sets the height of the control group 

@signature: {'height?: string | number | "content";'}

@type: string|number|"content"

@example: 
var form = new dhx.Form("form_container", {
	css: "dhx_widget--bordered",
	height: "400px", /*!*/ // height for rows
    rows: [
        {
            height: "200px", /*!*/ // height for cols
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

[comment]: # (@relatedapi: form/api/form_width_config.md)
