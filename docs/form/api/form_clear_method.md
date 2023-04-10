---
sidebar_label: clear()
title: JavaScript Form - clear Method 
description: You can explore the clear method of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# clear()

@short: clears a form

@signature: {'clear(method?: "value" | "validation"): void;'}

@params:
- `method: string` - optional, the method of clearing a form:
    - "value" - clears only form values
    - "validation" - clears only form validation
    - without parameters - clears both form values and validation

@example:
// clears only form validation
form.clear("validation");

// clears only form values
form.clear("value");

// clears both form values and validation
form.clear();

@descr:

**Related sample**: [Form. Clear form](https://snippet.dhtmlx.com/a64ih4ih)

@changelog: added in v6.1

[comment]: # (@related:form/work_with_form.md#clearing-form)
