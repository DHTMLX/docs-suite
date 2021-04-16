---
sidebar_label: beforeApply
title: beforeApply
---          

@short: fires before saving the timepicker value

@signature: afterApply: (time: string | hour: number, minute: number, AM?: boolean) => boolean | void;

@params:
- value		string|object	the value of a timepicker	

@returns:
-result		boolean		false - to prevent saving the timepicker value, otherwise true

@example:
timepicker.events.on("BeforeApply", function(value) {
    console.log(value);
    return false;
});


@template: api_event
@descr:
The type of the value parameter depends on the applied [valueFormat](timepicker/api/timepicker_valueformat_config.md) and [timeFormat](timepicker/api/timepicker_timeformat_config.md):

- If *valueFormat: "string"*  and *timeFormat:24* are specified, the string value will include just the hour and minutes: "00:39"
- If *valueFormat: "string"*  and *timeFormat:12* are specified, the string value will include hour, minutes, and am/pm identifiers: "06:00AM"
- If *valueFormat: "timeObject"*  and *timeFormat:24* are specified, the object value will contain key:value pairs for hours, minutes and their values: {hour: 0, minute: 39}
- If *valueFormat: "timeObject"*  and *timeFormat:12* are specified, the object value will contain key:value pairs for hours, minutes, am/pm identifiers and their values: {hour: 6, minute: 0, AM: true}

[Timepicker. Timepicker Events](https://snippet.dhtmlx.com/5ccptwy7)

@relatedapi: 
timepicker/api/timepicker_valueformat_config.md
timepicker/api/timepicker_timeformat_config.md

@changelog: added in v7.0



