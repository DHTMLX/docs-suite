---
sidebar_label: inputFocus
title: JavaScript Sidebar - inputFocus Event 
description: You can explore the inputFocus event of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# inputFocus

@short: fires when a control is focused

@signature: {'inputFocus: (id: string | number) => void;'}

@params:
- `id: string | number` - the ID of a new control

@example:
sidebar.events.on("inputFocus", function(id){
    console.log(id);
});

@descr:

[comment]: # (@related: sidebar/events.md)
