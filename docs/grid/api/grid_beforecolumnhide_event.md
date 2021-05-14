---
sidebar_label: beforeColumnHide
title: beforeColumnHide
---          

@short: fires before a column is hidden

@signature: {'beforeColumnHide: (col: ICol) => boolean | void;'}

@params: 
- col   object  an object with a column configuration

@returns:
- result	boolean		false - to prevent a column from being hidden, otherwise true

@example:
grid.events.on("BeforeColumnHide", function(column){
    // your logic here
    return false;
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog: added in v7.0
