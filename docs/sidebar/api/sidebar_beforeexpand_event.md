---
sidebar_label: beforeExpand
title: beforeExpand
---          

@short: fires before expanding a sidebar

beforeExpand: () => boolean | void;

@returns: 
param       boolean     false - to prevent expanding a sidebar, otherwise - false


@example:
sidebar.events.on("BeforeExpand", function() {
    // your logic here
    return true;
});


@template: api_event
@descr:

**Related sample**: [Sidebar. Events](https://snippet.dhtmlx.com/qfddiu3i)

@changelog: added in v6.4

@related: sidebar/events.md