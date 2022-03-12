---
sidebar_label: resize
title: JavaScript Chart - resize Event 
description: You can explore the resize event of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# resize

@short: fires on changing the size of the chart container

@signature: {'resize: (width: number, height: number) => void;'}

@params:
`size: object` - an object with new chart size

@example:
chart.events.on("resize", function({width:500, height:500}){
    console.log("The size of the chart has changed");
});

@descr:


**Related sample**: [Chart. Events](https://snippet.dhtmlx.com/a1b9yfwo)
