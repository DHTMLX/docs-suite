---
sidebar_label: afterHide
title: afterHide
---          

@short: fires after hiding an item of Sidebar

afterHide: (e: Event) => void;

@params:
- e         Event       a native event object


@example:
sidebar.events.on("AfterHide", function(event){
    // your code here
});


@template: api_event
@descr:

**Related sample**: [Sidebar. Events](https://snippet.dhtmlx.com/qfddiu3i)

@related: sidebar/events.md