---
sidebar_label: beforeValidate
title: JavaScript Form - beforeValidate Textarea Event 
description: You can explore the beforeValidate Textarea event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeValidate

@short: fires before the control value is validated

@signature: {'beforeValidate: (value: string) => boolean | void;'}

@params:
`value: string` - the value to be validated

@returns:
Return `false` to cancel the default action of the event; otherwise, `true`.

@example:
form.getItem("textarea").events.on("BeforeValidate", function(value) {
    console.log("BeforeValidate", value);
    return true;
});

@descr:

@changelog: added in v7.0

[comment]: # (@relatedapi: form/api/textarea/textarea_validate_method.md)
