---
sidebar_label: beforeCollapse
title: beforeCollapse
---          

@short: fires before collapsing a sidebar

@signature: {'beforeCollapse: () => boolean | void;'}

@returns:
param   boolean | void         false - to prevent collapsing a sidebar, otherwise - true

@example:
sidebar.events.on("BeforeCollapse", function() {
    // your logic here
    return false;
});

@template: api_event
@descr:

**Related sample**: [Sidebar. Events](https://snippet.dhtmlx.com/qfddiu3i)

@changelog: added in v6.4

@related: sidebar/events.md
