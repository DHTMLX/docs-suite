---
sidebar_label: isDisabled()
title: JavaScript Form - isDisabled Checkbox Group Method 
description: You can explore the isDisabled method of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# isDisabled()

@short: checks whether a CheckboxGroup control or a specific element inside the control is disabled

@signature: {'isDisabled(id?: string): boolean;'}

@params:
- `id: string` - optional, the **id** of a specific element inside the CheckboxGroup control

@returns:
`true`, if a control or a specific element is disabled; otherwise, `false`.

@example:
form.getItem("CheckboxGroup").isDisabled("id_1"); // -> true/false

@descr:

**Change log:** The **id** parameter was added in v8.0