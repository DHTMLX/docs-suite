---
sidebar_label: rows
title: rows
---          

@short: arranges controls inside the control group vertically

@signature: {'rows?: IBlock;'}

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

@descr: 

**Related sample**: [Form. Blocks](https://snippet.dhtmlx.com/1pzybtja)

@changelog: added in v6.4

[comment]: # (@related: form/how_to_start.md#initialize-form form/configuration.md#grouping-controls-in-form)

[comment]: # (@relatedapi: form/api/form_cols_config.md)
