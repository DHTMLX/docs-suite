---
sidebar_label: uploadFail
title: JavaScript Form - uploadFail Avatar Event 
description: You can explore the uploadFail event of the Avatar control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# uploadFail

@short: fires if the file upload failed

@signature: {'uploadFail: (value: object) => void;'}

@params:
- `value: object` - the current value of the control

@example:
form.getItem("avatar").events.on("uploadFail", (value) => {
    console.log("uploadFail", value);
});

@descr: