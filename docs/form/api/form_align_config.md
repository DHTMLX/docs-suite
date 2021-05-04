---
sidebar_label: align
title: align
---          

@short: sets the alignment of controls inside the control group 

@signature: {'align?: FlexDirection;'}

@values: "start", "center", "end", "between", "around", "evenly"

@example: 
var form = new dhx.Form("form_container", {
	css: "dhx_widget--bordered",
	align: "center", /*!*/ // sets the alignment for rows 
	rows: [
        {
            align: "start", /*!*/ // sets the alignment for cols
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


**Related sample**: [Form. Blocks](https://snippet.dhtmlx.com/1pzybtja)

@related: form/how_to_start.md#initialize-form
form/configuration.md#alignment

@changelog: added in v6.4