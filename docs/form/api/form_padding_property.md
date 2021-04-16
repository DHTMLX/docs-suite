---
sidebar_label: padding
title: padding
---          

@short: sets padding for content inside the control group

@type: string

@example: 
var form = new dhx.Form("form_container", {
	css: "dhx_widget--bordered",
	padding: "10px", /*!*/ // padding for rows
    rows: [
        {
            padding: "10px", /*!*/ // padding for cols
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


@template:	api_config
@descr: 


@relatedsample:
https://snippet.dhtmlx.com/1pzybtja	Form. Blocks

@changelog: added in v6.4

@related: form/how_to_start.md#initializeform
form/configuration.md#padding