---
sidebar_label: hide()
title: JavaScript Form - hide Radiogroup Method 
description: You can explore the hide method of the Radiogroup control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# hide()

@short: hides either a radio button of RadioGroup or the whole RadioGroup

@signature: {'hide(id?: string): void;'}

@params:
- `id?: string` - optional, the ID of a radio button to hide

@example:
form.getItem("radiogroup").hide("radiobutton_1"); 

@descr:

If ID of the radio button is not specified, the method hides RadioGroup with all its radio buttons.

@changelog: The **id** parameter was added in v8.0