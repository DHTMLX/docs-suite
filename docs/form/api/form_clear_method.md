---
sidebar_label: clear()
title: JavaScript Form - clear Method 
description: You can explore the clear method of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# clear()

@short: clears a form

@signature: {'clear(method?: ClearMethod): void;'}

@params:

`method: string` - optional, the method of clearing a form

@example:
// clears only form validation
form.clear("validation");

// clears only form values
form.clear("value");

// clears both form values and validation
form.clear();

@descr:

**Related sample**: [Form. Clear](https://snippet.dhtmlx.com/a64ih4ih)

The method may clear a form in one of three ways:

- "value" - clears only form values
- "validation" - clears only form validation
- without parameters - clears both form values and validation

@changelog: added in v6.1

[comment]: # (@related:form/work_with_form.md#clearing-form)
