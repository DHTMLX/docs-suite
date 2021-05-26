---
sidebar_label: afterShow
title: JavaScript Form - afterShow Select Event 
hide_title: true
description: You can explore the afterShow Select event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# afterShow

@short: fires after a control is shown

@signature: {'afterShow: (value: string | number) => void;'}

@params:
`value: string | number` - the current value of the control

@example:
form.getItem("select").events.on("AfterShow", function(value) {
    console.log("AfterShow", value);
});

@descr:

@changelog: added in v7.0
