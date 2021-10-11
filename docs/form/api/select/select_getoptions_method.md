---
sidebar_label: getOptions()
title: JavaScript Form - getOptions Select Method 
description: You can explore the getOptions method of the Select control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getOptions()

@short: returns an array of Select options

@signature: {'getOptions(): IOption[];'}

@returns:
An array with options.

@example:
form.getItem("select").getOptions(); // -> [{…}, {…}]

@descr:

Each option is an object with a set of *key:value* pairs - attributes of options and their values:

- **value** - (*string|number*) mandatory, sets the value for the select option
- **content** - (*string*) mandatory, the content displayed in the select option
- **disabled** - (*boolean*) optional, defines whether the option is enabled (*false*) or disabled (*true*)
