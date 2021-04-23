---
sidebar_label: modeChange
title: modeChange
---          

@short: fires on change of the calendar mode
todoanton any приходит из d.ts
@signature: {'modeChange: (mode: string) => any;'}

@params:
- mode      string      the calendar mode ("calendar", "year", "month", "timepicker")

@example:
calendar.events.on("ModeChange", function(mode) {
   console.log("Selected mode: " + mode);
});

@template: api_event
@descr:

@relatedsample:
https://snippet.dhtmlx.com/7kj7fiek	Calendar. Events

