---
sidebar_label: beforeOpen
title: JavaScript Combo Box - beforeOpen Event 
description: You can explore the beforeOpen event of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeOpen

@short: fires before opening a list with options

@signature: {'beforeOpen: () => boolean | void;'}

@returns:
Return `false` to prevent opening a combobox; otherwise, `true`.

@example:
combo.events.on("beforeOpen", function() {
    // your logic here
    return false;
});

@descr:

**Related sample**: [Combobox. Events](https://snippet.dhtmlx.com/n70eqx5l)

@changelog: added in v7.2
