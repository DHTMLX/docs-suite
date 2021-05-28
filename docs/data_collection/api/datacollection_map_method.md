---
sidebar_label: map()
title: JavaScript DataCollection - map Method 
description: You can explore the map method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# map()

@short: iterates through all items of the component

@signature: {'map(callback: DataCallback<T>): T[];'}

@params:
`callback: function` - a function that will be called for each item of a component

@example:
//getting ids of all items of the component
component.data.map(function(item){
    return item;
});

@descr:

**Related sample**: [Data. Map](https://snippet.dhtmlx.com/louctp61)
