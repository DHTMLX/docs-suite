---
sidebar_label: beforeCollapse
title: beforeCollapse
---          

@short: fires before collapsing a sidebar

@signature: {'beforeCollapse: () => boolean | void;'}

@returns:
Return `false` to prevent collapsing a sidebar; otherwise,`true`.

@example:
sidebar.events.on("BeforeCollapse", function() {
    // your logic here
    return false;
});

@descr:

**Related sample**: [Sidebar. Events](https://snippet.dhtmlx.com/qfddiu3i)

@changelog: added in v6.4

[comment]: # (@related: sidebar/events.md)
