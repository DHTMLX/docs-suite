---
sidebar_label: modeChange
title: JavaScript Colorpicker - modeChange Event 
hide_title: true
description: You can explore the modeChange event of Colorpicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# modeChange

@short: fires on changing the mode of the colorpicker

@signature: {'modeChange: (view: ViewsMode) => void;'}

@params:
`view: string` - the colorpicker mode ("palette", "picker")

@example:
colorpicker.events.on("ModeChange", function(view) {
   console.log("Selected mode: " + view); 
});
 
@descr:

**Related sample**: [Colorpicker. Events](https://snippet.dhtmlx.com/fllgaabo)

@changelog: added in v6.4
