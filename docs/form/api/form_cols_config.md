---
sidebar_label: cols
title: cols
---          

@short: arranges controls inside the control group horizontally

@signature: {'cols?: IBlock;'}

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



@descr: 

**Related sample**:
- [Form. Blocks](https://snippet.dhtmlx.com/1pzybtja)

@related: form/how_to_start.md#initialize-form
form/configuration.md#grouping-controls-in-form

@relatedapi: form/api/form_rows_config.md

@changelog: added in v6.4
