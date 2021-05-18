---
sidebar_label: afterColumnHide
title: afterColumnHide
---          

@short: fires after a column is hidden

@signature: {'afterColumnHide: (col: ICol) => void;'}

@params: 
`col: object` - an object with a column configuration

@example:
treegrid.events.on("AfterColumnHide", function(column){
    // your logic here
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)

@changelog: added in v7.0