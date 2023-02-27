---
sidebar_label: afterAdd
title: JavaScript Layout - afterAdd Event 
description: You can explore the afterAdd event of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterAdd

@short: fires after adding a new cell

@signature: {'afterAdd: (id: string) => void;'}

@params:
- `id: string` - the id of a cell

@example:
layout.events.on("afterAdd", function(id){
	// your logic here
});

@descr:

**Related sample**: [Layout. Events](https://snippet.dhtmlx.com/fyxw0map)

@changelog:
added in v6.2
