---
sidebar_label: click
title: JavaScript Menu - click Event 
hide_title: true
description: You can explore the click event of Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# click

@short: fires after a click on a button or a menu option

@signature: {'click: (id: string, events: Event) => void;'}

@params:
- `id: string` - the ID of a clicked control
- `events: Event` - a native event object

@example:
menu.events.on("Click", function(id,e){
    console.log(id);
});

@descr:

**Related sample**: [Menu. Events](https://snippet.dhtmlx.com/yjt39a4k)
