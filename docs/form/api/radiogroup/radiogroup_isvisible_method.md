---
sidebar_label: isVisible()
title: JavaScript Form - isVisible Radiogroup Method 
description: You can explore the isVisible method of the Radiogroup control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# isVisible()

@short: checks whether a RadioGroup control or a specific element inside the control is visible

@signature: {'isVisible(id?: string): boolean;'}

@params:
- `id: string` - optional, the **id** of a specific element inside the RadioGroup control

@returns:
`true`, if a control or a specific element is visible; otherwise, `false`.

@example:
form.getItem("radiogroup").isVisible("id_1"); 
// -> true/false

@descr:

**Change log:** The **id** parameter was added in v8.0
