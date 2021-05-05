---
sidebar_label: dateMouseOver
title: dateMouseOver
---          

@short: fires when the mouse pointer is over a date

@signature: dateMouseOver: (date: Date, e: MouseEvent) => void;

@params:
- date  	Date    	the date under the pointer
- e 		Event		a native event object

@example:
calendar.events.on("DateMouseOver", function(date, e) {
    dhx.tooltip(date, {node: e.target, position: "bottom"});
});



@descr:




@related:
calendar/operating_calendar.md#showingtooltips
calendar/handling_events.md

**Related sample**:
- [Calendar. Events](https://snippet.dhtmlx.com/7kj7fiek)


@changelog: added in v6.4