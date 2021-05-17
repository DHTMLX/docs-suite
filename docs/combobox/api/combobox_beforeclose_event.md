---
sidebar_label: beforeClose
title: beforeClose
---          

@short: fires before closing a list with options

@signature: {'beforeClose: () => boolean | void;'}

@returns:
Return `false` to prevent closing a combobox, otherwise `true`.

@example:
combobox.events.on("BeforeClose", function( ) {
    // your logic here
    return false;
});

@descr:

**Related sample**: [Combobox. Events](https://snippet.dhtmlx.com/n70eqx5l)

@changelog: added in v6.4
