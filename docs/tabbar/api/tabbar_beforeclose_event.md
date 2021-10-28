---
sidebar_label: beforeClose
title: JavaScript Tabbar - beforeClose Event 
description: You can explore the beforeClose event of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeClose

@short: fires before closing a tab in Tabbar

@signature: {'beforeClose: (id: string) => boolean | void;'}

@params:
`id: string` - the id of a closed tab

@returns:
Return `false` to prevent closing of a tab; otherwise, `true`.

@example:
tabbar.events.on("beforeClose", function(id){
    // your logic here
    return true;
});

@descr:

**Related sample**: [Tabbar. Events](https://snippet.dhtmlx.com/dld2qo1m)
