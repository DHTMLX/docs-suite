---
sidebar_label: data
title: JavaScript Combo Box - data Config 
description: You can explore the data config of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# data

@short: specifies an array of data objects to set into the combobox

@signature: {'data?: DataCollection<any> | any[];'}

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

@descr: 

**Related sample**: [Combobox. Config Data](https://snippet.dhtmlx.com/8bsb9dji)

@changelog: added in v6.4

[comment]: # (@related: combobox/how_to_start.md#initialize-combobox)
