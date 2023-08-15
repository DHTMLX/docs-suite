---
sidebar_label: getValue()
title: JavaScript Form - getValue Toggle Group Method 
description: You can explore the getValue method of the Toggle Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getValue()

@short: returns the current value/state of a toggle(s)

@signature: {'getValue(id?: string): string | boolean | number | {[id: string]: boolean | string | number};'}

@params:
- `id: string` - optional, the id of a toggle

@returns:
If the id of a toggle is specified, the method returns either a string|number with the current value of the checkbox, or a boolean value with the state of the toggle.

If the id of a toggle is not specified, the method returns an object with the current values/states of toggles. The object contains a set of *key:value* pairs where the *key* is the id of a toggle and the *value* is either the value of a toggle or its state (if the value attribute is not specified for the toggle).

@example:
// returns a string value if the value is specified in the toggle configuration
form.getItem("ToggleGroup").getValue("toggle_1"); //-> "some_value"
 
// returns a boolean state if the value is not specified for the toggle
form.getItem("ToggleGroup").getValue("toggle_2"); //-> true/false

// returns an object with the current values/states of toggles
form.getItem("ToggleGroup").getValue(); 
// -> { "toggle_1": "some_value_1",  "toggle_2": true }

@descr:

