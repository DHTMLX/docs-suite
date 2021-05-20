---
sidebar_label: afterColumnShow
title: afterColumnShow
---          

@short: fires after a column is shown

@signature: {'afterColumnShow: (col: ICol) => void;'}

@params:
`col: object` - an object with a column configuration

@example:
grid.events.on("AfterColumnShow", function(column){
    // your logic here
});

@descr:

**Related sample**: [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)

@changelog: added in v7.0
