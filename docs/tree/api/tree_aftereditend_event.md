---
sidebar_label: afterEditEnd
title: JavaScript Tree - afterEditEnd Event 
description: You can explore the afterEditEnd event of Tree in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterEditEnd

@short: fires after editing of a tree item is finished

@signature: {'afterEditEnd: (value: string, id: Id) => void;'}

@params:
- `value: string` - the value of an item
- `id: string | number` - the id of an item

@example:
tree.events.on("afterEditEnd", function(value, id) {
    // your logic here
});

@descr:

**Related sample**: [Tree. Events](https://snippet.dhtmlx.com/vux1ye9g)

@changelog: added in v7.0
