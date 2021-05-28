---
sidebar_label: inputFocus
title: JavaScript Menu - inputFocus Event 
hide_title: true
description: You can explore the inputFocus event of Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# inputFocus

@short: fires when a control is focused

@signature: {'inputFocus: (id: string) => void;'}

@params:
`id: string` - the ID of a new control

@example:
menu.events.on("InputFocus", function(id){
    console.log(id);
});

@descr:
