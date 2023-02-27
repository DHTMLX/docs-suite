---
sidebar_label: isVisible()
title: JavaScript Form - isVisible Checkbox Group Method 
description: You can explore the isVisible method of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# isVisible()

@short: checks whether a CheckboxGroup control or a specific element inside the control is visible

@signature: {'isVisible(id?: string): boolean;'}

@params:
- `id: string` - optional, the **id** of a specific element inside the CheckboxGroup control

@returns:
`true`, if a control or a specific element is visible; otherwise, `false`.

@example:
form.getItem("CheckboxGroup").isVisible("id_1"); // -> true/false

@descr:

**Change log:** The **id** parameter was added in v8.0