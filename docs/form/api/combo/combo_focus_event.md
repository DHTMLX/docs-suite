---
sidebar_label: focus
title: JavaScript Form - focus Combo Box Event 
description: You can explore the focus event of the Combo Box control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# focus

@short: fires when a Combo control has received focus

@signature: focus: (ids: (string | number) | (string | number)[]) => void;

@params:
- `ids: (string | number) | (string | number)[]` - the ID(s) of the option(s) from data collection that are currently selected in the control

@example:
form.getItem("combo").events.on("focus", (ids) => {
    console.log("focus", ids);
});
@examplestop:

@changelog: Added in v7.2
