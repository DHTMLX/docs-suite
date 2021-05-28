---
sidebar_label: afterEditStart
title: JavaScript Tree - afterEditStart Event 
hide_title: true
description: You can explore the afterEditStart event of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# afterEditStart

@short: fires after editing of a tree item has started

@signature: {'afterEditStart: (value: string, id: string) => void;'}

@params:
- `value: string` - the value of an item
- `id: string` - the id of an item

@example:
tree.events.on("AfterEditStart", function(value, id) {
    // your logic here
});

@descr:

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@changelog: added in v7.0
