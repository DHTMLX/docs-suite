---
sidebar_label: value
title: JavaScript Timepicker - value Config 
description: You can explore the value config of Timepicker in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# value

@short: Optional. The time value to be set on initialization of the timepicker

@signature: {'value?: Date | number | string | any[] | object;'}

@example:
// the value as a Date object 
const timepicker = new dhx.Timepicker("timepicker_container", {
	value: new Date()
});

// the value as a number
const timepicker = new dhx.Timepicker("timepicker_container", {
	value: 1232151545
});

// the value as a string
const timepicker = new dhx.Timepicker("timepicker_container", {
	value: "22:30"
});

// the value as an array
const timepicker = new dhx.Timepicker("timepicker_container", {
	value: [6,20,"AM"]
});

// the value as an object
const timepicker = new dhx.Timepicker("timepicker_container", {
	value: {hour: 10, minute: 50, AM: true}
});

@descr:

**Related sample**: [Timepicker. Initialization with button](https://snippet.dhtmlx.com/3d5u4cxx)

1\. The value of timepicker set as an **array** should have the following elements:

- the hour value
- the minutes value
- the "AM/PM" identifier for 12-hour format as a string

2\. The value set as an **object**:

- for the 24-hour format contains *key:value* pairs for hours, minutes and their values: <br/>{hour: 0, minute: 39}
- for the 12-hour format contains *key:value* pairs for hours, minutes, am/pm identifiers and their values: <br/>{hour: 6, minute: 0, AM: true}

3\. The date set as a **number** is the number of milliseconds since January 1, 1970, 00:00:00 UTC returned by the [getTime()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)
method of the **Date** object.

@changelog: added in v7.0

[comment]: # (@related: timepicker/configuration.md#initial-value)
