---
sidebar_label: setValue
title: setValue
description: description
---          


@short: sets the value for a TimePicker control

@params:
- value     Date|number|string|array|object    the value to be set for the control

``` todo
@example:
// set the value as a string
form.getItem("timepicker").setValue("10:30");

// set the value as a Date object
form.getItem("timepicker").setValue(new Date('January 10, 2019 17:54:00'));

// set the value as an array
form.getItem("timepicker").setValue([6,20,"AM"]);

// set the value as a number
form.getItem("timepicker").setValue(1559288966422);

// set the value as an object
form.getItem("timepicker").setValue({hour: 10, minute: 50, AM: true});

```

@template: api_method
@descr:
1\. The value of a timepicker control set as an array should have the following elements:

- the hour value
- the minutes value
- the "AM/PM" identifier for 12-hour format as a string

2\. The value set as an object:

- for the 24-hour format contains key:value pairs for hours, minutes and their values: <br/>{hour: 0, minute: 39}
- for the 12-hour format contains key:value pairs for for hours, minutes, am/pm identifiers and their values: <br/>{hour: 6, minute: 0, AM: true}

3\. The date set as a number is the number of milliseconds since January 1, 1970, 00:00:00 UTC returned by the [getTime()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)
method of the **Date** object.

@changelog: 
The ability to set the value as a number, as an array, or as an object is added in v7.0.
