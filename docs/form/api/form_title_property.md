---
sidebar_label: title
title: title
---          

@short: specifies the title of the control group

@type: string

@example: 
var form = new dhx.Form("form_container", {
	css: "dhx_widget--bordered",
	title: "Form", /*!*/ // title for rows
    rows: [
        {
            title: "Controls", /*!*/ // title for cols
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
form/configuration.md#title