---
sidebar_label: beforeHide
title: beforeHide
---          

@short: fires before hiding an item of Menu

@signature: beforeHide: (id: string, e: Event) => void | boolean;

@params:
- id 		string		the ID of a menu item
- e         Event       a native event object

@returns:
- result        boolean     false - to prevent hiding of a menu item, otherwise - true

@example:
menu.events.on("BeforeHide", function(id, event){
    // your code here
    return false;
});


@template: api_event
@descr:

