---
sidebar_label: getValue
title: getValue
---          

@short: gets current values/states of controls


@params:
- asFormData	boolean		optional, defines whether values of Form controls should be returned as Form Data

@returns:
- state 		object		an object either with the names or IDs of controls (if the name attribute is not defined in the config of the control) and their values/states


@example:
var state = form.getValue();
// -> {"name":"John Doe"}


@template: api_method
@descr:
1\. In case both the name and id of the control are specified in the config of Control, the returned object will contain the name of Control:

~~~js
var state = form.getValue();
// -> {"name":"John Doe"}
~~~

If the name attribute is not specified in the controls config, an object with ID of Control will be returned:

~~~js
var state = form.getValue();
// -> {"id":"John Doe"}
~~~

2\. Starting with v7.0, for the **TimePicker** control the type of the returned value depends on the applied [valueFormat](form/timepicker.md#addingtimepicker) and [timeFormat](form/timepicker.md#addingtimepicker):

- If *valueFormat: "string"*  and *timeFormat:24* are specified, a return string value will include just the hour and minutes: "00:39"
- If *valueFormat: "string"*  and *timeFormat:12* are specified, a return string value will include hour, minutes, and am/pm identifiers: "06:00AM"
- If *valueFormat: "timeObject"*  and *timeFormat:24* are specified, a return object value will contain key:value pairs for hours, minutes and their values: {hour: 0, minute: 39}
- If *valueFormat: "timeObject"*  and *timeFormat:12* are specified, a return object value will contain key:value pairs for hours, minutes, am/pm identifiers and their values: {hour: 6, minute: 0, AM: true}


@related: form/work_with_form.md#gettingvaluesofcontrols

@relatedsample: https://snippet.dhtmlx.com/odod5v12	Form. Get Value




@changelog:

@relatedapi:
form/api/form_setvalue_method.md

