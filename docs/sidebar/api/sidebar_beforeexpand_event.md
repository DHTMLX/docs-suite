---
sidebar_label: beforeExpand
title: beforeExpand
---          

@short: fires before expanding a sidebar

@signature: {'beforeExpand: () => boolean | void;'}

@returns: 
param       boolean | void     false - to prevent expanding a sidebar, otherwise - false


@example:
sidebar.events.on("BeforeExpand", function() {
    // your logic here
    return true;
});



@descr:

**Related sample**: [Sidebar. Events](https://snippet.dhtmlx.com/qfddiu3i)


@related: sidebar/events.md

@changelog: added in v6.4