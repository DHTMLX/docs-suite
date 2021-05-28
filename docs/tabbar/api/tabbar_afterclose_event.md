---
sidebar_label: afterClose
title: JavaScript Tabbar - afterClose Event 
hide_title: true
description: You can explore the afterClose event of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# afterClose

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
