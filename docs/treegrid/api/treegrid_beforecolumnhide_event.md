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
treegrid.events.on("BeforeColumnHide", function(column){
    // your logic here
    return false;
});


@descr:

@changelog: added in v7.0

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)
