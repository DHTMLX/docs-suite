---
sidebar_label: editable
title: JavaScript TreeGrid - editable Config 
description: You can explore the editable config of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# editable

@short: Optional. Enables editing in TreeGrid columns

@signature: {'editable?: boolean;'}

@default: false

@example:
const treegrid = new dhx.TreeGrid("treegrid_container", {
	columns: [ 
		// columns config
	], 
	editable:true,
	data: dataset
});

@descr:

**Related sample**: [TreeGrid. Editing with different editors (multiselect, combobox, select, boolean, date)](https://snippet.dhtmlx.com/sdbfbv2n)

@changelog: added in v6.4

[comment]: # (@related: treegrid/configuration.md#editing-treegrid-and-separate-columns treegrid/initialization.md#initialize-treegrid)
