---
sidebar_label: data
title: data
---          

@short: specifies an array of data objects to set into the combobox

```todoapi 
data?: DataCollection<any> | any[];
<any> не компилируется
```

@example:
var combo = new dhx.Combobox("combo_container",{
    data: [
		{
			"value": "Austria",
			"src": "../common/flags/at.png"
		},
		{
			"value": "Belgium",
			"src": "../common/flags/be.png"
		},
		{
			"value": "Bulgaria",
			"src": "../common/flags/bg.png"
		},
		{
			"value": "Cyprus",
			"src": "../common/flags/cy.png"
		}
});


@template:	api_config
@descr: 


@relatedsample: https://snippet.dhtmlx.com/8bsb9dji	Combobox. Config Data

@changelog: added in v6.4

@related: combo/how_to_start.md#initializecombobox	