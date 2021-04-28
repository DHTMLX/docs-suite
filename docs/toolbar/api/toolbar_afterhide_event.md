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
@examplestop:

**Related sample**: [Toolbar. Events](https://snippet.dhtmlx.com/xvak1p5y)
