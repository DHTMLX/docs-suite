---
sidebar_label: isVisible
title: isVisible
---          

@short: checks whether a form is visible

@params:
- name|id			string		the name of a Form control or its id (if the name attribute is not defined in the config of the control)

@returns:
- param	boolean     true, if a form is visible, otherwise false

@example:
// checks whether a form is visible
form.isVisible(); // -> true/false

// checks whether a form control is visible
form.isVisible("combo"); // -> true/false


@template: api_method
@descr:




@related:form/work_with_form.md#checkingifaformisvisible

@relatedapi: 
form/api/form_hide_method.md
form/api/form_show_method.md



@changelog: added in v6.5

