---
sidebar_label: afterShow
title: JavaScript Form - afterShow Checkbox Group Event 
hide_title: true
description: You can explore the afterShow Checkbox Group event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# afterShow

@short: fires after a control is shown

@signature: {'afterShow: (value: ICheckboxGroupValue) => void;'}

@params:
`value: object` - the current value of the control. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> is the value/state of the checkbox.

@example:
form.getItem("CheckboxGroup").events.on("AfterShow", function(value) {
    console.log("AfterShow", value);
});

@descr:
