---
sidebar_label: modeChange
title: modeChange
---          

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
