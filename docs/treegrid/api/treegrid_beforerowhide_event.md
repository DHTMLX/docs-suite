---
sidebar_label: beforeRowHide
title: beforeRowHide
---          

@short: fires before a row is hidden

@signature: beforeRowHide: (row: object) => boolean | void;

@params: 
- row   object  an object with a row configuration

@returns:
- result	boolean		false - to prevent a row from being hidden, otherwise true

@example:
treegrid.events.on("BeforeRowHide", function(row){
    // your logic here
    return false;
});

@template: api_event
@descr:

@changelog: added in v7.0

[TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)