---
sidebar_label: keyNavigation
title: JavaScript List - keyNavigation Config 
description: You can explore the keyNavigation config of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# keyNavigation

@short: Optional. Enables/disables navigation in List by arrow keys

@signature: {'keyNavigation?: boolean | (() => boolean);'}

@default: true

@example:
const list = new dhx.List("list_container", {
    keyNavigation:true
});

@descr:
:::info
From v8.0, focusing of items isn't available when key navigation is disabled. Use methods of the [Selection](selection.md#methods) object.
:::

[comment]: # (@related: list/configuration.md#arrow-keys-navigation)
