---
sidebar_label: modeChange
title: modeChange
---          

@short: fires on change of the calendar mode

@signature: modeChange: (mode: string) => void;

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

