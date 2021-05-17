---
sidebar_label: update
title: update
---          

@short: updates properties of the item

@signature: {'updateUrl?: (url?: string, params?: any) => void;'}

@params:
- id			string,number		the id of the item which needs to be updated
- config		object				a hash of properties which need to be updated

@example:
component.data.update(123, { text:"New text" });

@descr:

**Related sample**: [Data. Update](https://snippet.dhtmlx.com/4g90gi6b)

[comment]: # (@related:window/customization.md#controls-and-operations)
