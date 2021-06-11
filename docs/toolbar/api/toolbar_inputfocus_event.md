---
sidebar_label: inputFocus
title: JavaScript Toolbar - inputFocus Event 
description: You can explore the inputFocus event of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# inputFocus

@short: fires when a control is focused

@signature: {'inputFocus: (id: Id) => void;'}

@params:
`id: string | number` - the ID of a new control

@example:
toolbar.events.on("inputFocus", function(id){
    console.log(id);
});

@descr:

**Related sample**: [Toolbar. Events](https://snippet.dhtmlx.com/xvak1p5y)
