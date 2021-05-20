---
sidebar_label: attach()
title: attach()
---          

@short: attaches a DHTMLX component into a Layout cell

@signature: {'attach(name: string | IViewFn | IView | IViewConstructor, config?: any): IViewLike;'}

@params:
- `component: string | object` - the name or object of a component
- `config: object` - optional, the configuration settings of a component

@returns:
The object of the attached component.

@example:
var layout = new dhx.Layout({
	width:"400px", height:"600px"
});

var sidebar = new dhx.Sidebar(null, {
	css: "dhx_widget--border_right dhx_widget--bg"
});

layout.getCell("sidebar").attach(sidebar);

@descr:

**Related sample**: [Layout. Attach](https://snippet.dhtmlx.com/6wuxj6sh)

[comment]: # (@related: layout/work_with_layout.md#attaching-a-component-to-a-cell)
