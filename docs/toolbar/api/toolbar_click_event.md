---
sidebar_label: click
title: JavaScript Toolbar - click Event 
description: You can explore the click event of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# click

@short: fires after a click on a control

@signature: {'click: (id: string | number, events: Event) => void;'}

@params:
- `id: string | number` - the ID of a clicked control
- `events: Event` - a native event object

@example:
toolbar.events.on("click", function(id,e){
    console.log(id);
});

@descr:

**Related sample**: [Toolbar. Events](https://snippet.dhtmlx.com/xvak1p5y?tag=toolbar)
