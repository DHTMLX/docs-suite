---
sidebar_label: focus
title: JavaScript Form - focus Event 
description: You can explore the focus event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# focus

@short: fires when a control of Form has received focus

@signature: focus: (name: string, value: any, id?: string) => void;

@params:
- `name: string` - the name or id of the control of Form
- `value: any` - the current value of the control
- `id?: string` - optional, the id of the element of the control of Form (for RadioGroup, CheckboxGroup)

@example:
form.events.on("focus", function(name, value, id) {
    console.log(name, value);
});
@examplestop:

**Related sample**: [Form. Events](https://snippet.dhtmlx.com/vyipsaoa)

@changelog: added in v7.2
