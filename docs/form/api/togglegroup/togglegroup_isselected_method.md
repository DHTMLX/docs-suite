---
sidebar_label: isSelected()
title: JavaScript Form - isSelected Toggle Group Method 
description: You can explore the isChecked method of the Toggle Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# isSelected()

@short: checks whether a toggle of the ToggleGroup control is selected

@signature: {'isSelected(id?: string): boolean | { [id: string]: boolean };'}

@params:
- `id: string` - optional, the id of a toggle

@returns:
Either a boolean value or an object.

If the id of a toggle is specified, the method returns a boolean value `true`, if the toggle is selected; otherwise, `false`.

If the id of a toggle is not specified, the method returns an object with a set of *key:value* pairs where the *key* is the id of a toggle and the *value* is the state of the toggle.

@example:
form.getItem("ToggleGroup").isSelected("toggle_1"); 
// -> true/false

form.getItem("ToggleGroup").isSelected(); 
// -> { "toggle_1": true, "toggle_2": false }

@descr: