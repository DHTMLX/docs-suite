---
sidebar_label: change
title: change
---          

@short: fires on change of the timepicker value

@signature: change: (time: string | hour: number, minute: number, AM?: boolean) => void;


@example:
timepicker.events.on("change", function(value){
	console.log("The value of a timepicker has changed to "+ value);
});


@template: api_event
@descr:
The type of the value parameter depends on the applied [valueFormat](timepicker/api/timepicker_valueformat_config.md) and [timeFormat](timepicker/api/timepicker_timeformat_config.md):

- If *valueFormat: "string"*  and *timeFormat:24* are specified, the string value will include just the hour and minutes: "00:39"
- If *valueFormat: "string"*  and *timeFormat:12* are specified, the string value will include hour, minutes, and am/pm identifiers: "06:00AM"
- If *valueFormat: "timeObject"*  and *timeFormat:24* are specified, the object value will contain key:value pairs for hours, minutes and their values: {hour: 0, minute: 39}
- If *valueFormat: "timeObject"*  and *timeFormat:12* are specified, the object value will contain key:value pairs for hours, minutes, am/pm identifiers and their values: {hour: 6, minute: 0, AM: true}

@relatedapi: 
timepicker/api/timepicker_valueformat_config.md
timepicker/api/timepicker_timeformat_config.md

@relatedsample: https://snippet.dhtmlx.com/5ccptwy7	Timepicker. Timepicker Events

@changelog:
The object type of the **value** parameter is added in v7.0.