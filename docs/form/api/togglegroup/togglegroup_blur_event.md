---
sidebar_label: blur
title: JavaScript Form - blur Toggle Group Event 
description: You can explore the blur event of the Toggle Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# blur

@short: fires when a ToggleGroup control has lost focus

@signature: {`blur: (value: {[id: string]: boolean | string | number}, id: string) => void;`}

@params:
- `value: object` - the current value of the control. The object contains a set of <i>key:value</i> pairs where the <i>key</i> is the id of a toggle and the <i>value</i> is the value/state of a toggle
- `id: string` - the id of a toggle of the ToggleGroup control

@example:
form.getItem("toggleGroup").events.on("blur", (value, id) => {
    console.log("blur", value, id);
});

@descr: