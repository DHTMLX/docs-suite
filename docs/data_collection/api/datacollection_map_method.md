---
sidebar_label: map
title: map
---          

@short: iterates through all items of the component

@signature: {'map(callback: DataCallback<T>): T[];'}

@params:
- callback			function		a function that will be called for each item of a component

@example:
//getting ids of all items of the component
component.data.map(function(item){
    return item;
});

@descr:

**Related sample**: [Data. Map](https://snippet.dhtmlx.com/louctp61)
