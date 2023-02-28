---
sidebar_label: change
title: JavaScript Tabbar - change Event 
description: You can explore the change event of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# change

@short: fires on changing the active tab

@signature: {'change: (id: string, prev: string) => void;'}

@params:
- `id: string` - the id of a newly active tab
- `prev: string` - the id of a previously active tab

@example:
tabbar.events.on("change", function(id, prev){
    console.log(id);
});

@descr:

**Related sample**: [Tabbar. Events](https://snippet.dhtmlx.com/dld2qo1m)
