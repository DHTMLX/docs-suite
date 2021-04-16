---
sidebar_label: isDisabled
title: isDisabled
---          

@short: checks whether a form is disabled



@returns:
- param	boolean     true, if a form is disabled, otherwise false


@example:
form.isDisabled(); // -> true/false


@template: api_method
@descr:
To check whether a form control is disabled, pass either the name of the control or its id (if the name attribute is not defined in the config of the control) as a parameter to the **isDisabled()** method:

~~~js
form.isDisabled("combo"); // -> true/false
~~~

@related: form/work_with_form.md#checkingifaformisdisabled

@relatedapi: form/api/form_disable_method.md
form/api/form_enable_method.md

@changelog: added in v6.4

@relatedsample: https://snippet.dhtmlx.com/lthu8p6p	Form. Is Disabled
