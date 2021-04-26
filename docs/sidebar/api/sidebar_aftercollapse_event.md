---
sidebar_label: afterCollapse
title: afterCollapse
---          

@short: fires after collapsing a sidebar
todoanton any приходит из d.ts
@signature: {'afterCollapse: () => any;'}

afterCollapse: () => void;

@example:
sidebar.events.on("AfterCollapse", function() {
    // your logic here
});



@template: api_event
@descr:

**Related sample**: [Sidebar. Events](https://snippet.dhtmlx.com/qfddiu3i)

@changelog: added in v6.4

@related: sidebar/events.md