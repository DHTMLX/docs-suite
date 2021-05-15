---
sidebar_label: beforeHide
title: beforeHide
---          

@short: fires before hiding an item of Toolbar

@signature: {'beforeHide: (id: string, events: Event) => void | boolean;'}

@params:
- id 		string		the ID of a toolbar item
- events         Event       a native event object

@returns:
- result        void | boolean     false - to prevent hiding of a toolbar item, otherwise - true -->

@example:
toolbar.events.on("BeforeHide", function(id, event){
    // your code here
    return false;
});

@descr:

**Related sample**: [Toolbar. Events](https://snippet.dhtmlx.com/xvak1p5y)
