---
sidebar_label: beforeHide
title: beforeHide
---

`to do Parameters (and Returns if need) after @signature: is ready`

@short: fires before a Container control is hidden

@signature:

@params:

@example: form.getItem("container").events.on("BeforeHide", function(text, init) {
    console.log("BeforeHide", text, init);
    return true;
});

@changelog: added in v7.2
