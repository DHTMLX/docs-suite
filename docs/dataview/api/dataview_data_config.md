---
sidebar_label: data
title: data
---          

@short: specifies an array of data objects to set into the dataview

```todoapi ```

@type: array

@example: 
var dataview = new dhx.DataView("dataview_container", {
    data: [
    	{
			"value": "Ben",
			"short": "Ben is a very cautious 5-year-old Siberian Husky.",
			"thumbnailName": "01.jpg"
		},
		{
			"value": "Izzy",
			"short": "This is our most beloved kingfisher bird Izzy.",
			"thumbnailName": "02.jpg"
		},
		{
			"value": "Momo",
			"short": "Momo is a 25-year-old elephant with a big heart.",
			"thumbnailName": "03.jpg"
		}
	]
});


@template:	api_config
@descr: 

@related: dataview/data_loading.md

@relatedsample: 
https://snippet.dhtmlx.com/s547z4xr	Dataview. Config Data
https://snippet.dhtmlx.com/t632x22i	Dataview. Init With External Data

