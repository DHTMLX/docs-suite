---
sidebar_label: afterChangeProperties
title: afterChangeProperties
---

`to do Parameters (and Returns if need) after @signature: is ready`

@short: fires after properties of a Container control have been changed dynamically

@signature:

@params:

@example: form.getItem("container").events.on("AfterChangeProperties", function(properties) {
    console.log("AfterChangeProperties", properties);
});

@changelog: added in v7.2
