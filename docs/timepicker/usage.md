---
sidebar_label: Work with TimePicker
title: Work with TimePicker
---          

You can change the value of the TimePicker or get its current value via the related API methods.

Setting value
---------------

There is the [setValue()](timepicker/api/timepicker_setvalue_method.md) method that makes it easy to change the value of the timepicker on the fly. The method takes as a parameter the value which can be passed in several formats:

- as a Date object
- as a string
- as an array with the following elements:
	- the hour value
    - the minutes value
    - the "AM/PM" identifier for 12-hour format as a string
- as a number of milliseconds since January 1, 1970, 00:00:00 UTC returned by the [getTime()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)
method of the **Date** object

For example:

~~~js
// set the value as a string
timepicker.setValue("00:39");

// set the value as a Date object
timepicker.setValue(new Date('January 10, 2019 17:54:00'));

// set the value as an array
timepicker.setValue([6,20,"AM"]);

// set the value as a number
timepicker.setValue(1559288966422);
~~~

{{editor	https://snippet.dhtmlx.com/6r8lkhbg	Timepicker. Set Timepicker Value}}

Getting value 
------------------

You can get the value of TimePicker either as an object or as a string via the [getValue()](timepicker/api/timepicker_getvalue_method.md) method. It takes one parameter: 

- **asObject** - (*boolean*) optional, specifies that the value will be returned as an object, false by default

~~~js
// return value as a string in the 24-hour format
var val1 = timepicker.getValue(); // -> "00:39"

// return value as an object in the 24-hour format
var val2 = timepicker.getValue(true);// -> {hour: 0, minute: 39}

// return value as a string in the 12-hour format
var val3 = timepicker2.getValue(); // -> "06:00AM"

// return value as an object in the 12-hour format
var val4 = timepicker2.getValue(true); // -> {hour: 6, minute: 0, AM: true}
~~~

{{editor	https://snippet.dhtmlx.com/k4atpgnd	Timepicker. Get Timepicker Value}}

The returned value can be of several types, depending on the passed parameter and the applied time format:

- for the 24-hour format a return string value will include just the hour and minutes: "00:39"
- for the 12-hour format a return string value will include hour, minutes, and am/pm identifiers: "06:00AM"
- for the 24-hour format a return object value will contain key:value pairs for hours, minutes and their values
- for the 12-hour format a return object value will contain key:value pairs for hours, minutes, am/pm identifiers and their values

