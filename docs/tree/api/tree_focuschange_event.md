---
sidebar_label: focusChange
title: JavaScript Tree - focusChange Event 
description: You can explore the focusChange event of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# focusChange

@short: fires on moving focus to a new item

@signature: {'focusChange: (index: number, id: Id) => void;'}

@params:
- `index: number` - the position of an item
- `id: string | number` - the id of an item

@example:
tree.events.on("FocusChange", function(index, id){
    // your code here
});

@descr:

@changelog: added in v7.0
