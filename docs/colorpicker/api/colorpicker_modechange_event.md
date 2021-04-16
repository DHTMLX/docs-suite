---
sidebar_label: modeChange
title: modeChange
---          

@short: fires on changing the mode of the colorpicker

@signature: modeChange: (mode: string) => void;

@params:
- mode	string		the colorpicker mode ("palette", "picker")

@example:
colorpicker.events.on("ModeChange", function(mode) {
   console.log("Selected mode: " + mode); 
});
 
@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/fllgaabo	Colorpicker. Events

@changelog: added in v6.4
