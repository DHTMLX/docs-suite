---
sidebar_label: afterHide
title: afterHide
---          

@short: fires after hiding an item of Toolbar

@signature: afterHide: (e: Event) => any;

<!-- void afterHide(Event e){ ... };  void??? -->

@params:
- e         Event       a native event object

@example:
toolbar.events.on("AfterHide", function(event){
    // your code here
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/xvak1p5y	Toolbar. Events