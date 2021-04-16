---
sidebar_label: valueFormat
title: valueFormat
---          

@short: defines the format of the value to be applied when working with TimePicker events

@signature: valueFormat?: "string" | "timeObject";

@example: 
var timepicker = new dhx.Timepicker("timepicker", {
	value: "06:00",
	timeFormat: 24,
	valueFormat: "string"
});

// or
var timepicker = new dhx.Timepicker("timepicker", {
	value: {hour: 6, minute: 0, AM: true},
	timeFormat: 12,
	valueFormat: "timeObject"
});


@template:	api_config
@descr:   


@relatedapi:
timepicker/api/timepicker_afterapply_event.md
timepicker/api/timepicker_afterclose_event.md
timepicker/api/timepicker_beforeapply_event.md
timepicker/api/timepicker_beforeclose_event.md
timepicker/api/timepicker_change_event.md

@changelog: added in v7.0

