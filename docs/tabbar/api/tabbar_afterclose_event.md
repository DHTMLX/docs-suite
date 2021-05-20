---
sidebar_label: afterClose
title: afterClose
---     

@short: fires after closing a tab in Tabbar

@signature: {'afterClose: (id: string) => void;'}

@params:
`id: string` - the id of a closed tab

@example:
tabbar.events.on("AfterClose", function(id){
    console.log(id);
});

@descr:

**Related sample**: [Tabbar. Events](https://snippet.dhtmlx.com/dld2qo1m)

@changelog: added in v6.4
