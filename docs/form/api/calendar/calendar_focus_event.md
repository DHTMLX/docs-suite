---
sidebar_label: focus
title: JavaScript Form - focus Datepicker Event 
description: You can explore the focus event of the Datepicker control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# focus

@short: fires when a Datepicker control has received focus

@signature: focus: (value: string | Date) => void;

@params:
`value: string | Date` - the current value of the control

@example:
form.getItem("datepicker").events.on("focus", (value) => {
    console.log("focus", value);
});
@examplestop:

@changelog: Added in v7.2
