---
sidebar_label: afterHide
title: aftJavaScript Form - afterHide Textarea Event erHide
hide_title: true
description: You can explore the afterHide Textarea event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# afterHide

@short: fires after a control is hidden

@signature: {'afterHide: (value: string, init: boolean) => void;'}

@params:
- `value: string` - the current value of the control
- `init: boolean` - *true*, if the event is triggered on the control initialization

@example:
form.getItem("textarea").events.on("AfterHide", function(value, init) {
    console.log("AfterHide", value, init);
});

@descr:

@changelog: added in v7.0
