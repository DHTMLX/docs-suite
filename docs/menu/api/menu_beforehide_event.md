---
sidebar_label: beforeHide
title: beforeHide
---          

@short: fires before hiding an item of Menu

@signature: {'beforeHide: (id: string, events: Event) => void | boolean;'}

@params:
- id 		string		the ID of a menu item
- events    Event       a native event object

@returns:
- result        void | boolean     false - to prevent hiding of a menu item, otherwise - true

@example:
menu.events.on("BeforeHide", function(id, event){
    // your code here
    return false;
});



@descr:

