---
sidebar_label: afterShow
title: JavaScript Form - afterShow Button Event 
description: You can explore the afterShow event of the Button control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterShow

@short: fires after a Button control is shown

@signature: {'afterShow: (text: string) => void;'}

@params:
`text: string` - the current text label of the control

@example:
form.getItem("button").events.on("AfterShow", function(text) {
    console.log("AfterShow", text);
});

@descr:

@changelog: added in v7.0
