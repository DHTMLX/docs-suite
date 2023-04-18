---
sidebar_label: exportStyles
title: JavaScript Chart - exportStyles Config 
description: You can explore the exportStyles config of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# exportStyles

@short: Optional. Defines the styles that will be sent to the export service when exporting Chart to PDF/PNG

@signature: {'exportStyles?: boolean | string[];'}

@default: false

@example:
const chart = new dhx.Chart("chart_container", {
    type:"area",
    scales: {
    	"bottom" : {
    		text: 'month'
    	},
    	"left" : {
    		padding: 10,
    		max: 90
    	}
    },
    series: [
        {
           value: 'company A',
           strokeWidth: 2
           // more options   
        }
    ],
	exportStyles: false
});

@descr:
By default, the **exportStyles** property is disabled. Thus, when you export Chart, CSS styles included to the page are not sent to the export service. This reduces the size of the exported data. 

If you want some styles to be exported, set string values with the absolute paths to the desired styles to the **exportStyles** array:

~~~js
const chart = new dhx.Chart("chart_container", {
    type:"area",
    scales: {
    	"bottom" : {
    		text: 'month'
    	},
    	"left" : {
    		padding: 10,
    		max: 90
    	}
    },
    series: [
        {
           value: 'company A',
           strokeWidth: 2
           // more options   
        }
    ],
	exportStyles: [
        "https://mySite.com/exportStyle.css",
        "https://mySite.com/secondExportStyle.css"
    ]
});
~~~

:::tip
You must use only absolute paths not relative ones.
:::

:::info
You need to enable the property if you want to export Chart with a [custom or overridden theme](themes.md).
:::

@descr:

**Related API:**
- [png()](chart/api/export/chart_png_method.md)
- [pdf()](chart/api/export/chart_pdf_method.md)

@changelog: added in v8.1
