---
sidebar_label: getValue()
title: JavaScript Form - getValue Combo Box Method 
description: You can explore the getValue method of the Combo Box control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getValue()

@short: returns the current value of a Combo control

@signature: {'getValue(): string | string[];'}

@returns:
A string, or array with the id(s) of the items from data collection that are currently selected in the control.

@example:
const value = form.getItem("combo").getValue();
// -> "id_2"

@descr:

The method returns a string value with the id of the currently selected item, if either *multiselection:false* is set or the multiselection config is not defined, otherwise - returns an array of string values with the ids of the currently selected items.
