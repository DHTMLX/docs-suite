---
sidebar_label: show()
title: JavaScript Form - show Checkbox Group Method 
description: You can explore the show method of the Checkbox Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# show()

@short: shows either a checkbox of CheckboxGroup or the whole CheckboxGroup

@signature: {'show(id?: string): void;'}

@params:
- `id?: string` - optional, the ID of a checkbox to show

@example:
form.getItem("CheckboxGroup").show("checkbox_1"); 

@descr:

If ID of the checkbox is not specified, the method shows CheckboxGroup with all its checkboxes.

@changelog: The **id** parameter was added in v8.0
