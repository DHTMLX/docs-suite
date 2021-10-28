---
sidebar_label: dateMouseOver
title: JavaScript Calendar - dateMouseOver Event
description: You can explore the dateMouseOver event of Calendar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# dateMouseOver

@short: fires when the mouse pointer is over a date

@signature: {'dateMouseOver: (date: Date, e: MouseEvent) => void;'}

@params:
- `date: Date` - the date under the pointer
- `e: MouseEvent` - a native HTML event object

@example:
calendar.events.on("dateMouseOver", function(date, e) {
    dhx.tooltip(date, {node: e.target, position: "bottom"});
});

@descr:

**Related sample**: [Calendar. Events](https://snippet.dhtmlx.com/7kj7fiek)

@changelog: added in v6.4

[comment]: # (@related: calendar/operating_calendar.md#showingtooltips calendar/handling_events.md)
