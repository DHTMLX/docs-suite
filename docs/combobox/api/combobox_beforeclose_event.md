---
sidebar_label: beforeClose
title: JavaScript Combo Box - beforeClose Event 
description: You can explore the beforeClose event of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeClose

@short: fires before closing a list with options

@signature: {'beforeClose: () => boolean | void;'}

@returns:
Return `false` to prevent closing a combobox; otherwise, `true`.

@example:
combobox.events.on("BeforeClose", function( ) {
    // your logic here
    return false;
});

@descr:

**Related sample**: [Combobox. Events](https://snippet.dhtmlx.com/n70eqx5l)

@changelog: added in v6.4
