---
sidebar_label: getValue()
title: JavaScript Form - getValue Combo Box Method 
description: You can explore the getValue method of the Combo Box control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getValue()

@short: returns IDs of options which are currently selected in the Combo control

@signature: {'getValue(): string | number | (string | number)[];'}

@returns:
A string/number or an array with the ID(s) of the options from data collection that are currently selected in the control.

@descr:

#### Example

When the `multiselection` property of Combo control isn't specified or is set to *false*, the method returns a string/number value with the ID of the currently selected option:

~~~js
const value = form.getItem("combo").getValue();
// -> "id_2"
~~~

If `multiselection` is enabled, the method returns an array of string/number values with the IDs of the currently selected options:

~~~js
const value = form.getItem("combo").getValue();
// -> ['id_1', 'id_2']
~~~
