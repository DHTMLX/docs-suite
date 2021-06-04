---
sidebar_label: afterEditEnd
title: JavaScript List - afterEditEnd Event 
description: You can explore the afterEditEnd event of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterEditEnd

@short: fires after editing of an item is ended

@signature: {'afterEditEnd: (value: string, id: string | number) => void;'}

@params:
- `value: string` - the value of an item
- `id: string | number` - the id of an item

@example:
list.events.on("AfterEditEnd", function(value,id){
	// your logic here
});

@descr:

**Related sample**: [List. List Events	](https://snippet.dhtmlx.com/iwt1yd61)

@changelog: added in v6.1
