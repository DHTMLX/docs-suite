---
sidebar_label: blur
title: JavaScript Form - blur Checkbox Group Event 
description: You can explore the blur event of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# blur

@short: fires when a CheckboxGroup control has lost focus

@signature: blur: (value: ICheckboxGroupValue, id: string) => void;

@params:
- `value: object` - the current value of the control
- `id: string` - the id of the checkbox of the CheckboxGroup control

@example:
form.getItem("checkboxGroup").events.on("blur", (value, id) => {
    console.log("blur", value, id);
});
@examplestop:

@changelog: added in v7.2
