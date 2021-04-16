---
sidebar_label: getValue
title: getValue
---          

@short: returns the current value of a TimePicker

@signature: getValue(asOBject?: boolean): hour: number, minute: number, AM?: boolean | string;

<!-- string|object getValue( [boolean asObject] ); что на самом деле возвращает? -->


@params:
* asObject 		boolean		 optional, specifies that the value will be returned as an object, false by default

<!-- todo @returns:
- value	 		string,object		 the value of a timepicker -->

@example:
// return value as a string in the 24-hour format
var val1 = timepicker.getValue(); // -> "00:39" 

// return value as an object in the 24-hour format
var val2 = timepicker.getValue(true);// -> {hour: 0, minute: 39}

// return value as a string in the 12-hour format
var val3 = timepicker2.getValue(); // -> "06:00AM"

// return value as an object in the 12-hour format
var val4 = timepicker2.getValue(true); // -> {hour: 6, minute: 0, AM: true}


@template: api_method
@descr:
The returned value can be of several types, depending on the passed parameter and the applied time format:

- for the 24-hour format a return string value will include just the hour and minutes: "00:39"
- for the 12-hour format a return string value will include hour, minutes, and am/pm identifiers: "06:00AM"
- for the 24-hour format a return object value will contain key:value pairs for hours, minutes and their values
- for the 12-hour format a return object value will contain key:value pairs for hours, minutes, am/pm identifiers and their values

@relatedsample: https://snippet.dhtmlx.com/k4atpgnd	Timepicker. Get Timepicker Value

@relatedapi:
timepicker/api/timepicker_setvalue_method.md

@related: timepicker/usage.md#settingvalue

@changelog:


