---
sidebar_label: focus()
title: JavaScript Form - focus Toggle Group Method 
description: You can explore the focus method of the Toggle Group control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# focus()

@short: sets focus to an option of the ToggleGroup control by its id

@signature: {'focus(id?: string): void;'}

@params:
- `id: string` - optional, the id of an option

@example:
form.getItem("ToggleGroup").focus("toggle_1");

@descr:
If "id" is not specified, the method sets focus to the first option of the Toggle Group.