---
sidebar_label: cols
title: cols
---          

@short: arranges controls inside the control group horizontally


@type: array

@example: 
var form = new dhx.Form("form_container", {
	css: "dhx_widget--bordered",
    rows: [
    	{
            title: "Align:",
            padding: "10px",
            css: "dhx_layout-cell--bordered",
            cols: [{ /*!*/
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
form/configuration.md#groupingcontrolsinform

@relatedapi: form/api/form_rows_property.md