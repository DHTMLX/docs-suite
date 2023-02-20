---
sidebar_label: afterShow
title: JavaScript Form - afterShow Container Event 
description: You can explore the afterShow event of the Container control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterShow

@short: fires after a Container control is shown

@signature: afterShow: () => void;

@example:
form.getItem("container").events.on("afterShow", function() {
    console.log("afterShow");
});

**Change log:**
- The event was added in v7.2
- The **value** parameter was removed in v8.0
