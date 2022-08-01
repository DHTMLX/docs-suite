---
sidebar_label: data
title: JavaScript DataView - data Config 
description: You can explore the data config of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# data

@short: specifies an array of data objects to set into the dataview

@signature: {'data?: DataCollection<any> | any[];'}

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

@descr: 

**Related samples**:
- [Dataview. Initialization with config.data](https://snippet.dhtmlx.com/s547z4xr)
- [Dataview. Initialization with external DataCollection](https://snippet.dhtmlx.com/t632x22i)

[comment]: # (@related: dataview/data_loading.md)
