---
sidebar_label: beforeCollapse
title: JavaScript Sidebar - beforeCollapse Event 
description: You can explore the beforeCollapse event of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeCollapse

@short: fires before collapsing a sidebar

@signature: {'beforeCollapse: () => boolean | void;'}

@returns:
Return `false` to prevent collapsing a sidebar; otherwise,`true`.

@example:
sidebar.events.on("beforeCollapse", function() {
    // your logic here
    return false;
});

@descr:

**Related sample**: [Sidebar. Events](https://snippet.dhtmlx.com/qfddiu3i)

@changelog: added in v6.4

[comment]: # (@related: sidebar/events.md)
