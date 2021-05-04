---
sidebar_label: editable
title: editable
---          

@short: enables editing of Tree items on a double-click 

Starting from v 7.2 you can use multiline editing of Tree items. Use `Shift + Enter` to add a line.

@signature: {'editable?: boolean;'}

@default: false

@example: 
var tree = new dhx.Tree("tree_container", {editable: true});
@examplestop:

**Related sample**: [Tree. Editable](https://snippet.dhtmlx.com/re4h88w7)

@related:tree/configuration.md#editingofitems 
 tree/initialization_of_dhtmlxtree.md#initialize-tree

@relatedapi: tree/api/tree_edititem_method.md

@changelog:
- added in v6.4
- From v7.2 multiline editing
