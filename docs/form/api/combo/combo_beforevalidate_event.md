---
sidebar_label: beforeValidate
title: JavaScript Form - beforeValidate Combo Box Event 
description: You can explore the beforeValidate event of the Combo Box control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeValidate

@short: fires before the control value is validated

@signature: {'beforeValidate: (ids: (string | number) | (string | number)[]) => boolean | void;'}

@params:
- `ids: string | number | (string | number)[]` - the ID(s) of the option(s) from data collection to be validated

@returns:
Return `false` to cancel the default action of the event; otherwise, `true`.

@example:
form.getItem("combo").events.on("beforeValidate", function(ids) {
    console.log("beforeValidate", ids);
    return true;
});

@descr:

@changelog: added in v7.0

[comment]: # (@relatedapi: form/api/combo/combo_validate_method.md)
