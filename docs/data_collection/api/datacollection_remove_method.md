---
sidebar_label: remove
title: remove
---          

@short: deletes the specified item from the component

@signature: {'remove(id: Id | Id[]): void;'}

@params:
- id 		string,string[]			the ids of the items that should be deleted 

@example:

component.data.remove("2");
//or
component.data.remove(["2", "4"]);

@descr:

**Related sample**: [Data. Remove](https://snippet.dhtmlx.com/ugdlqgp5)

[comment]: # (@related:window/customization.md#controls-and-operations)
