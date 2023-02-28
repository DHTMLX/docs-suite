---
sidebar_label: afterShow
title: JavaScript Form - afterShow Checkbox Group Event 
description: You can explore the afterShow event of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterShow

@short: fires after a control or its checkbox is shown

@signature: {'afterShow: (value: ICheckboxGroupValue, id?: string) => void;'}

@params:
- `value: object` - the current value of the control. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> is the value/state of the checkbox.
- `id?: string` - optional, the ID of the checkbox of the control

@example:
form.getItem("CheckboxGroup").events.on("afterShow", function(value, id) {
    console.log("afterShow", value, id);
});

@descr:

**Related sample:** [Form. Hide/Show control](https://snippet.dhtmlx.com/w6rr8chf)

@changelog: The **id** parameter was added in v8.0