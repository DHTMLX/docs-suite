---
sidebar_label: afterEditStart
title: JavaScript DataView - afterEditStart Event 
description: You can explore the afterEditStart event of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# afterEditStart

@short: fires after editing of an item has started

@signature: {'afterEditStart: (id: string | number) => void;'}

@params:
`id: string | number` - the id of an item

@example:
dataview.events.on("afterEditStart", function(id){
	// your logic here
});

@descr:

**Related sample**: [Dataview. Dataview Events](https://snippet.dhtmlx.com/2d74uyoh)

@changelog: added in v6.1
