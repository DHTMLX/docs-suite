---
sidebar_label: beforeChangeProperties
title: beforeChangeProperties
---

`to do Parameters (and Returns if need) after @signature: is ready`

@short: fires before properties of a Container control are changed dynamically

@signature:

@params:

@example: form.getItem("container").events.on("BeforeChangeProperties", function(properties) {
    console.log("BeforeChangeProperties", properties);
    return true;
});

@changelog: added in v7.2
