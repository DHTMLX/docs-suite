---
sidebar_label: beforeRowHide
title: beforeRowHide
---          

@short: fires before a row is hidden

@signature: {'beforeRowHide: (row: object) => boolean | void;'}

@params:
`row: object` - an object with a row configuration

@returns:
Return `false` to prevent a row from being hidden; otherwise, `true`.

@example:
grid.events.on("BeforeRowHide", function(row){
    // your logic here
    return false;
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog: added in v7.0