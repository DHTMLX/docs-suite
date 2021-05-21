---
sidebar_label: beforeExpand
title: beforeExpand
---          

@short: fires before expanding a sidebar

@signature: {'beforeExpand: () => boolean | void;'}

@returns:
Return `false` to prevent expanding a sidebar; otherwise, `true`.

@example:
sidebar.events.on("BeforeExpand", function() {
    // your logic here
    return true;
});

@descr:

**Related sample**: [Sidebar. Events](https://snippet.dhtmlx.com/qfddiu3i)

@changelog: added in v6.4

[comment]: # (@related: sidebar/events.md)
