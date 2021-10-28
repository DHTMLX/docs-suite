---
sidebar_label: beforeExpand
title: JavaScript Sidebar - beforeExpand Event 
description: You can explore the beforeExpand event of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeExpand

@short: fires before expanding a sidebar

@signature: {'beforeExpand: () => boolean | void;'}

@returns:
Return `false` to prevent expanding a sidebar; otherwise, `true`.

@example:
sidebar.events.on("beforeExpand", function() {
    // your logic here
    return true;
});

@descr:

**Related sample**: [Sidebar. Events](https://snippet.dhtmlx.com/qfddiu3i)

@changelog: added in v6.4

[comment]: # (@related: sidebar/events.md)
