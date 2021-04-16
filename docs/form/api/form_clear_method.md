---
sidebar_label: clear
title: clear
---          

@short: clears a form

@params:

- mode		string		optional, the mode of clearing a form


@example:
// clears only form validation
form.clear("validation");

// clears only form values
form.clear("value");

// clears both form values and validation
form.clear();


@template: api_method
@descr:
The method may clear a form in one of three modes:

- "value" - clears only form values
- "validation" - clears only form validation
- without parameters - clears both form values and validation



@related:form/work_with_form.md#clearingform

@relatedsample: https://snippet.dhtmlx.com/a64ih4ih	Form. Clear

@changelog: added in v6.1

