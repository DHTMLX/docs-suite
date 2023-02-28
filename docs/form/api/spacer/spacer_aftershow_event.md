---
sidebar_label: afterShow
title: JavaScript Form - afterShow Spacer Event 
description: You can explore the afterShow event of the Spacer control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterShow

@short: fires after a control is shown

@signature: {'afterShow: () => void;'}

@example:
form.getItem("spacer").events.on("afterShow", function() {
    console.log("afterShow");
});

@descr:

**Change log:**
- The **value** parameter was removed in v8.0
