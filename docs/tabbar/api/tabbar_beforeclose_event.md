---
sidebar_label: beforeClose
title: beforeClose
---          

@short: fires before closing a tab in Tabbar

@signature: {'beforeClose: (id: string) => boolean | void;'}

@params:
`id: string` - the id of a closed tab

@returns:
Return `false` to prevent closing of a tab; otherwise, `true`.
<!-- boolean | void; ??? -->

@example:
tabbar.events.on("BeforeClose", function(id){
    // your logic here
    return true;
});

@descr:

**Related sample**: [Tabbar. Events](https://snippet.dhtmlx.com/dld2qo1m)
