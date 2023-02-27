---
sidebar_label: isDisabled()
title: JavaScript Form - isDisabled Select Method 
description: You can explore the isDisabled method of the Select control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# isDisabled()

@short: checks whether a Select control or a specific option inside the control is disabled

@signature: {'isDisabled(value?: string | number): boolean;'}

@params:
- `value: string | number` - optional, the **value** of a specific option inside the control

@returns:
`true`, if a control or a specific option is disabled; otherwise, `false`.

@example:
form.getItem("select").isDisabled(1); // -> true/false

@descr:

**Change log:** The **value** parameter was added in v8.0