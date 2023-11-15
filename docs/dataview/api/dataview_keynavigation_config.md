---
sidebar_label: keyNavigation
title: JavaScript DataView - keyNavigation Config 
description: You can explore the keyNavigation config of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# keyNavigation

@short: Optional. Enables/disables navigation in DataView by arrow keys

@signature: {'keyNavigation?: boolean | (() => boolean);'}

@default: true

@example:
const dataview = new dhx.DataView("dataview_container", {
    itemsInRow: 5, 
    keyNavigation: false
});

@descr:

**Related sample**: [Dataview. Arrow navigation](https://snippet.dhtmlx.com/u7mgoly9)

[comment]: # (@related: dataview/configuration.md#arrow-keys-navigation)
