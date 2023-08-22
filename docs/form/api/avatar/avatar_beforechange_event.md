---
sidebar_label: beforeChange
title: JavaScript Form - beforeChange Avatar Event 
description: You can explore the beforeChange event of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeChange

@short: fires before changing the value of a control

@signature: {'beforeChange: (value: object) => boolean | void;'} 

@params: 

- `value: object` - the value expected to be applied after changes 

@returns:
Return `false` to prevent changing the value of the control; otherwise, `true`.

@example:
form.getItem("avatar").events.on("beforeChange", value => {
    return value.file && value.file.size <= 2097152;
    // prevent changes if the size of the uploaded file is
    // more than 2Mb or the file is empty
});

@descr: