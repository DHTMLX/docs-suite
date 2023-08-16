---
sidebar_label: blur
title: JavaScript Form - blur Checkbox Group Event 
description: You can explore the blur event of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# blur

@short: fires when a CheckboxGroup control has lost focus

@signature: {`blur: (value: {[id: string]: boolean | string}, id: string) => void;`}

@params:
- `value: object` - the current value of the control. The object contains a set of <i>key:value</i> pairs where the <i>key</i> is the id of a checkbox and the <i>value</i> is the value/state of a checkbox
- `id: string` - the id of a checkbox of the CheckboxGroup control

@example:
form.getItem("checkboxGroup").events.on("blur", (value, id) => {
    console.log("blur", value, id);
});
@descr:

@changelog: added in v7.2
