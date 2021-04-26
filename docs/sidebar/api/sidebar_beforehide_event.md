---
sidebar_label: beforeHide
title: beforeHide
---          

@short: fires before hiding an item of Sidebar

@signature: todo, not found [here](https://cdn.dhtmlx.com/suite/pro/edge/types/ts-sidebar/sources/types.d.ts)

beforeExpand: () => boolean | void;

@params:
- id 		string		the ID of a sidebar item
- e         Event       a native event object

@returns:
- result        boolean     false - to prevent hiding of a sidebar item, otherwise - true

@example:
sidebar.events.on("BeforeHide", function(id, event){
    // your code here
    return false;
});


@template: api_event
@descr:

**Related sample**: [Sidebar. Events](https://snippet.dhtmlx.com/qfddiu3i)

@related: sidebar/events.md