---
sidebar_label: beforeHide
title: beforeHide
---          

@short: fires before hiding an item of Toolbar

@signature: beforeHide: (id: string, e: Event) => void | boolean;

@params:
- id 		string		the ID of a toolbar item
- e         Event       a native event object

<!-- возможно не полная информация @returns:
- result        boolean     false - to prevent hiding of a toolbar item, otherwise - true -->

@example:
toolbar.events.on("BeforeHide", function(id, event){
    // your code here
    return false;
});

@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/xvak1p5y	Toolbar. Events