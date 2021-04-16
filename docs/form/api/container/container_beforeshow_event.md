---
sidebar_label: beforeShow
title: beforeShow
---

`to do Parameters (and Returns if need) after @signature: is ready`

@short: fires before a Container control is shown

@signature:

@params:

@example: form.getItem("container").events.on("BeforeShow", function(text) {
    console.log("BeforeShow", text);
    return true;
});

@changelog: added in v7.2
