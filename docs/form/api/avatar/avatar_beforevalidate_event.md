---
sidebar_label: beforeValidate
title: JavaScript Form - beforeValidate Avatar Event 
description: You can explore the beforeValidate event of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeValidate

@short: fires before the control value is validated

@signature: {'beforeValidate: (value: object) => boolean | void;'}

@params:
- `value: object` - the value to be validated

@returns:
Return `false` to cancel the default action of the event; otherwise, `true`.

@example:
form.getItem("avatar").events.on("beforeValidate", value => {
    console.log("beforeValidate", value);
    return value.src; // if there is a path to the image, validation will be passed
});

@descr: