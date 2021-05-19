---
sidebar_label: beforeRowHide
title: beforeRowHide
---          

@short: fires before a row is hidden

@signature: {'beforeRowHide: (row: IRow) => boolean | void;'}

@params: 
`row: object` - an object with a row configuration

@returns:
Return `false` to prevent a row from being hidden; otherwise, `true`.

@example:
treegrid.events.on("BeforeRowHide", function(row){
    // your logic here
    return false;
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)

@changelog: added in v7.0