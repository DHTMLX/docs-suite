---
sidebar_label: rows
title: rows
---          

@short: arranges controls inside the control group vertically

@type: array

@example: 
var form = new dhx.Form("form_container", {
	css: "dhx_widget--bordered",
	rows:[ /*!*/
    	{
			type: "radioGroup",
			name: "dir",
			options: {
				padding: "10px",
				align: "center",
				cols:[
                	{
						type: "radioButton",
                        label: "as rows",
                        labelInline: true,
                        value: "rows",
                        checked: true
					},
					{
						type: "radioButton",
                        label: "as cols",
                        labelInline: true,
                        value: "cols"
                     }
                ]
            }
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

@relatedapi: form/api/form_cols_property.md