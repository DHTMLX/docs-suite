---
sidebar_label: focus
title: JavaScript Form - focus Checkbox Group Event 
description: You can explore the focus event of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# focus

@short: fires when a CheckboxGroup control has received focus

@signature: focus: (value: ICheckboxGroupValue, id: string) => void;

@params:
- `value: object` - the current value of the control
- `id: string` - the id of the checkbox of the CheckboxGroup control

@example:
form.getItem("checkboxGroup").events.on("focus", (value, id) => {
    console.log("focus", value, id);
});
@examplestop:

@changelog: added in v7.2
