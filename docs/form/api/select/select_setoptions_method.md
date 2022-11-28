---
sidebar_label: setOptions()
title: JavaScript Form - setOptions Select Method 
description: You can explore the setOptions method of the Select control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# setOptions()

@short: allows changing a list of Select options dynamically

@signature: {'setOptions(options: IOption[]): void;'}

@params:
- `options: array` - an array with new options

@example:
form.getItem("select").setOptions([
    { value: "new_1", content: "new_content-1", disabled:true },
    { value: "new_2", content: "new_content-2" }
]);

@descr:

Each option is an object with a set of *key:value* pairs - attributes of options and
their values:

- **value** - (*string|number*) mandatory, sets the value for the select option
- **content** - (*string*) mandatory, the content displayed in the select option
- **disabled** - (*boolean*) optional, defines whether the option is enabled (*false*) or disabled (*true*)
