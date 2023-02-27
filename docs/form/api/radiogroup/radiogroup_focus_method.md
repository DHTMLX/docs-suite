---
sidebar_label: focus()
title: JavaScript Form - focus Radiogroup Method 
description: You can explore the focus method of the Radiogroup control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# focus()

@short: sets focus to the radio button of the RadioGroup control by its id

@signature: {'focus(id?: string): void;'}

@params:
- `id: string` - optional, the id of a radio button

@example:
form.getItem("radiogroup").focus("radiobutton_1");

@descr:

If "id" is not specified, the method sets focus to the first radio button of the RadioGroup.

@changelog: added in v7.0
