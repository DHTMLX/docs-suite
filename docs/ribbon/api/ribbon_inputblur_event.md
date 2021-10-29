---
sidebar_label: inputBlur
title: JavaScript Ribbon - inputBlur Event 
description: You can explore the inputBlur event of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# inputBlur

@short: fires when a control is blurred

@signature: {'inputBlur: (id: Id) => void;'}

@params:
`id: string | number` - the ID of a new control

@example:
ribbon.events.on("inputBlur", function(id){
    console.log(id);
});

@descr:

**Related sample**: [Ribbon. Events](https://snippet.dhtmlx.com/i7cfddkl)

[comment]: # (@related: ribbon/handling_events.md)
