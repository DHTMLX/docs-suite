---
sidebar_label: focus
title: JavaScript Form - focus Timepicker Event 
description: You can explore the focus event of the Timepicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# focus

@short: fires when a Timepicker control has received focus

@signature: focus: (value: string | ITimeObject) => void;

@params:
- `value: string | object` - the current value of the control

@example:
form.getItem("timepicker").events.on("focus", (value) => {
    console.log("focus", value);
});
@examplestop:

@changelog: Added in v7.2
