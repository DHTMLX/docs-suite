---
sidebar_label: inputBlur
title: JavaScript Sidebar - inputBlur Event 
description: You can explore the inputBlur event of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# inputBlur

@short: fires when a control is blurred

@signature: {'inputBlur: (id: string | number) => void;'}

@params:
- `id: string | number` - the ID of a new control

@example:
sidebar.events.on("inputBlur", function(id){
    console.log(id);
});

@descr:

[comment]: # (@related: sidebar/events.md)
