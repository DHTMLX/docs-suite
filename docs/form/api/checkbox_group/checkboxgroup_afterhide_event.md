---
sidebar_label: afterHide
title: JavaScript Form - afterHide Checkbox Group Event 
description: You can explore the afterHide event of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterHide

@short: fires after a control is hidden

@signature: {'afterHide: (value: ICheckboxGroupValue, init: boolean) => void;'} 

@params:
- `value: object` - the current value of the control. The object contains a set of <i>key:value</i> pairs where <i>key</i> is the id of a checkbox and <i>value</i> is the value/state of the checkbox.
- `init: boolean` - *true*, if the event is triggered on the control initialization; otherwise, *false*

@example:
form.getItem("CheckboxGroup").events.on("afterHide", function(value, init) {
    console.log("afterHide", value, init);
});

@descr:
