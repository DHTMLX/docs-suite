---
sidebar_label: attach
title: attach
---          

@short: attaches a DHTMLX component into a Layout cell

```todoapi ```

@params:
- component 		string,object 		the name or object of a component
- config 			object 				optional, the configuration settings of a component

@returns:
- attached			object			the object of the attached component


@example:
var layout = new dhx.Layout({
	width:"400px", height:"600px"
});

var sidebar = new dhx.Sidebar(null, {
	css: "dhx_widget--border_right dhx_widget--bg"
});

layout.getCell("sidebar").attach(sidebar);


@template: api_method
@descr:

@related: layout/work_with_layout.md#attachingacomponenttoacell

@relatedsample: https://snippet.dhtmlx.com/6wuxj6sh	Layout. Attach

@changelog:


