---
sidebar_label: keydown 
title: JavaScript Combo Box - keydown Event
description: You can explore the keydown event of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# keydown

@short: fires when any key is pressed and the element of Combobox is in focus

@signature: keydown: (event: KeyboardEvent, id: string | number | undefined) => void;

@params:
- `event` - a native KeyboardEvent object
- `id` - the id of the option of Combobox in focus

@example:
combobox.events.on("keydown", function(event, id) {
    console.log(event, id);
});

@descr:

**Related sample**: [Combobox. Events](https://snippet.dhtmlx.com/n70eqx5l)

@changelog: added in v7.2
