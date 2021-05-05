---
sidebar_label: beforeRowShow
title: beforeRowShow
---          

@short: fires before a row is shown on a page

@signature: {'beforeRowShow: (row: IRow) => boolean | void;'}

@params: 
- row   object  an object with a row configuration


@returns:
- result	boolean | void		false - to prevent a row from being shown, otherwise true

@example:
grid.events.on("BeforeRowShow", function(row){
    // your logic here
    return false;
});



@descr:

**Related Sample:** [Grid. Events](https://snippet.dhtmlx.com/9zeyp4ds)


@changelog: added in v7.0