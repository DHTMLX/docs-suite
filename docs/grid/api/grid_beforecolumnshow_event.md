---
sidebar_label: beforeColumnShow
title: beforeColumnShow
---          

@short: fires before a column is shown on a page

@signature: {'beforeColumnShow: (col: object) => boolean | void;'}

@params:
`col: object` - an object with a column configuration

@returns:
Return `false` to prevent a column from being shown; otherwise, `true`.

@example:
grid.events.on("BeforeColumnShow", function(column){
    // your logic here
    return false;
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog: added in v7.0
