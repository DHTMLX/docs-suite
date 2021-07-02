---
sidebar_label: blur
title: JavaScript Form - blur Event 
description: You can explore the blur event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# blur

@short: fires when a control of Form has lost focus

@signature: blur: (name: string, value: any, id?: string) => void;

@params:
- `name: string` - the name or id of the control of Form
- `value: any` - the current value of the control
- `id: string` - optional, the id of the element of the control of Form (for RadioGroup, CheckboxGroup)

@example:
form.event.on("blur", function(name, value, id) {
    console.log(name, value, id);
});
@examplestop:

**Related sample**: [Form. Events](https://snippet.dhtmlx.com/vyipsaoa)

@changelog: added v7.2
