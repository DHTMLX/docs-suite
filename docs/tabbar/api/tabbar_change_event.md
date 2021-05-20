---
sidebar_label: change
title: change
---          

@short: fires on changing the active tab

@signature: {'change: (id: string, prev: string) => void;'}

@params:
- `id: string` - the id of a newly active tab
- `prev: string` - the id of a previously active tab

@example:
tabbar.events.on("Change", function(activeId, prevId){
    console.log(activeId);
});

@descr:

**Related sample**: [Tabbar. Events](https://snippet.dhtmlx.com/dld2qo1m)
