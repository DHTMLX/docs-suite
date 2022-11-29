---
sidebar_label: valueFormat
title: JavaScript Timepicker - valueFormat Config 
description: You can explore the valueFormat config of Timepicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# valueFormat

@short: defines the format of the value to be applied when working with TimePicker events

@signature: {'valueFormat?: "string" | "timeObject";'}

@example:
const timepicker = new dhx.Timepicker("timepicker_container", {
	value: "06:00",
	timeFormat: 24,
	valueFormat: "string"
});

// or
const timepicker = new dhx.Timepicker("timepicker_container", {
	value: {hour: 6, minute: 0, AM: true},
	timeFormat: 12,
	valueFormat: "timeObject"
});

@descr:

@changelog: added in v7.0

[comment]: # (@relatedapi: timepicker/api/timepicker_afterapply_event.md timepicker/api/timepicker_afterclose_event.md timepicker/api/timepicker_beforeapply_event.md timepicker/api/timepicker_beforeclose_event.md timepicker/api/timepicker_change_event.md)
