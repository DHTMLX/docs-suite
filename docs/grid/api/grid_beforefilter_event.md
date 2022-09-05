---
sidebar_label: beforeFilter
title: JavaScript Grid - beforeFilter Event eSort
description: You can explore the beforeFilter event of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeFilter

@short: fires after the <b>filterChange</b> event is called

@signature: {'beforeFilter:({ value: string, colId?: string | number }) => void | boolean;'}

@params:
- `value: string` - required, the entered value by which data must be filtered
- `colId: string | number` - optional, the ID of a column

@returns:
Return `false` to block the filtering process; otherwise, `true`.

@example:
grid.events.on("beforeFilter", (val, id) => {
	console.log(val);
	console.log(id);
	return false;
})

@descr:
@changelog: added in v8.0
