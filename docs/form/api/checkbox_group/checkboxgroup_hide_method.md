---
sidebar_label: hide()
title: JavaScript Form - hide Checkbox Group Method 
description: You can explore the hide method of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# hide()

@short: hides either a checkbox of CheckboxGroup or the whole CheckboxGroup

@signature: {'hide(id?: string): void;'}

@params:
- `id: string` - optional, the **id** of a specific element inside the CheckboxGroup control

@example:
form.getItem("CheckboxGroup").hide("checkbox_1"); 

@descr:

If **id** of the checkbox is not specified, the method hides CheckboxGroup with all its checkboxes.

**Related sample:** [Form. Hide/Show control](https://snippet.dhtmlx.com/w6rr8chf)

**Change log:** The **id** parameter was added in v8.0
