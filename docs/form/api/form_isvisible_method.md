---
sidebar_label: isVisible()
title: JavaScript Form - isVisible Method 
hide_title: true
description: You can explore the isVisible method of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# isVisible()

@short: checks whether a form is visible

@signature: {'isVisible(name?: string): boolean;'}

@params:
`name|id: string` - optional, the name of a Form control or its id (if the name attribute is not defined in the config of the control)

@returns:
`true`, if a form is visible; otherwise, `false`.

@example:
// checks whether a form is visible
form.isVisible(); // -> true/false

// checks whether a form control is visible
form.isVisible("combo"); // -> true/false

@descr:

@changelog: added in v6.5

[comment]: # (@related:form/work_with_form.md#checking-if-a-form-is-visible)

[comment]: # (@relatedapi: form/api/form_hide_method.md form/api/form_show_method.md)
