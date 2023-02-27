---
sidebar_label: show()
title: JavaScript Form - show Radiogroup Method 
description: You can explore the show method of the Radiogroup control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# show()

@short: shows either a radio button of RadioGroup or the whole RadioGroup

@signature: {'show(id?: string): void;'}

@params:
- `id?: string` - optional, the ID of a radio button to show

@example:
form.getItem("radiogroup").show("radiobutton_1");

@descr:

If ID of the radio button is not specified, the method shows RadioGroup with all its radio buttons.

@changelog: The **id** parameter was added in v8.0