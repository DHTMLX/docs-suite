---
sidebar_label: focus
title: JavaScript Form - focus Avatar Event 
description: You can explore the focus event of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# focus

@short: fires when an Avatar control has received focus

@signature: {'focus: (value: object) => void;'}

@params:
- `value: object` - the current value of the control

@example:
form.getItem("avatar").events.on("focus", value => {
    console.log("focus", value);
});

@descr:

