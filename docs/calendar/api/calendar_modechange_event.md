---
sidebar_label: modeChange
title: JavaScript Calendar - modeChange Event
description: You can explore the modeChange event of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# modeChange

@short: fires on change of the calendar mode

@signature: {'modeChange: (mode: string) => void;'}

@params:
- `mode: string` - the calendar mode ("calendar", "year", "month", "timepicker")

@example:
calendar.events.on("modeChange", function(mode) {
   console.log("Selected mode: " + mode);
});

@descr:

**Related sample**: [Calendar. Events](https://snippet.dhtmlx.com/7kj7fiek)
