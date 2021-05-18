---
sidebar_label: afterRowShow
title: afterRowShow
---          

@short: fires after a row is shown on a page

@signature: {'afterRowShow: (row: IRow) => void;'}

@params:
`row: object` - an object with a row configuration

@example:
treegrid.events.on("AfterRowShow", function(row){
    // your logic here
});

@descr:

**Related sample**: [TreeGrid. Events](https://snippet.dhtmlx.com/sgwnxshe)

@changelog: added in v7.0
