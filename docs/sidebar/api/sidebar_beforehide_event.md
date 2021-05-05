---
sidebar_label: beforeHide
title: beforeHide
---          

@short: fires before hiding an item of Sidebar

@signature: {'beforeHide: (id: string, events: Event) => void | boolean;'}

@params:
- id 		string		the ID of a sidebar item
- events         Event       a native event object

@returns:
- result        void | boolean     false - to prevent hiding of a sidebar item, otherwise - true

@example:
sidebar.events.on("BeforeHide", function(id, event){
    // your code here
    return false;
});



@descr:

**Related sample**: [Sidebar. Events](https://snippet.dhtmlx.com/qfddiu3i)

@related: sidebar/events.md
