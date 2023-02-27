---
sidebar_label: keydown 
title: JavaScript Form - keydown Event
description: You can explore the keydown event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# keydown

@short: fires when any key is pressed

@signature: keydown: (event: KeyboardEvent, name: string, id?: string) => void;

@params:
- `event: KeyboardEvent` - a native KeyboardEvent object
- `name: string` - the name or id of the control of Form
- `id: string` - optional, the id of the element of the control of Form (for RadioGroup, CheckboxGroup, Combo)

@example:
form.events.on("keydown", function(event, name, id) {
    console.log(event, name, id);
});
@examplestop:

**Related sample**: [Form. Events](https://snippet.dhtmlx.com/vyipsaoa)

The event fires when the control of Form or the element of the control of Form is in focus.

@changelog: added in v7.2
