---
sidebar_label: afterHide
title: JavaScript Form - afterHide Button Event 
hide_title: true
description: You can explore the afterHide Button event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# afterHide

@short: fires after a Button control is hidden

@signature: {'afterHide: (text: string, init: boolean) => void;'}

@params:
- `text: string` - the current text label of the control
- `init: boolean` - *true*, if the event is triggered on the button control initialization

@example:
form.getItem("button").events.on("AfterHide", function(text, init) {
    console.log("AfterHide", text, init);
});

@descr:

@changelog: added in v7.0
