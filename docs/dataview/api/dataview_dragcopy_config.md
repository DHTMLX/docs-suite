---
sidebar_label: dragCopy
title: dragCopy
---          

@short: defines that an item is copied to a target during drag-n-drop

@signature: dragCopy?: boolean;

@example: 
var source = new dhx.DataView("dataview-source", {dragMode: "source", dragCopy: true});
var target = new dhx.DataView("dataview-target", {dragMode: "target", dragCopy: true});


@template:	api_config
@descr: 
{{note Don't forget to enable drag-n-drop via the [](dataview/api/dataview_dragmode_config.md) property to use dragCopy.}}

@relatedsample:
https://snippet.dhtmlx.com/h89c3gl3	Dataview. Drag'n'drop Сopy

@relatedapi:
dataview/configuration.md#dragndropofitems