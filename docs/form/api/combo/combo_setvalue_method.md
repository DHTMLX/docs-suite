---
sidebar_label: setValue()
title: JavaScript Form - setValue Combo Box Method 
description: You can explore the setValue Combo Box method of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# setValue()

@short: sets the value for a Combo control

@signature: {'setValue(value: string | string[]): void;'}

@params:
`value: string | string[]` - the id(s) of items from data collection that should be selected in the control  

@example:
form.getItem("combo").setValue("id_1");

@descr:

You should set the value as a string (either as "id_1" or ["id_1"]), if *multiselection:false* is set or the multiselection config is not defined, otherwise - set the value as an array of string values.
