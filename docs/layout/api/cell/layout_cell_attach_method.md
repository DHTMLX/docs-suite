---
sidebar_label: attach()
title: JavaScript Layout - attach Method 
description: You can explore the attach method of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# attach()

@short: attaches a DHTMLX component into a Layout cell

@signature: {'attach(component: string | IViewFn | IView | IViewConstructor, config?: any): IViewLike;'}

@params:
- `component: string | object` - the name or object of a component
- `config: object` - optional, the configuration settings of a component

@returns:
The object of the attached component.

@example:
const layout = new dhx.Layout("layout_container", {
	width:"400px", height:"600px"
});

const sidebar = new dhx.Sidebar(null, {
	css: "dhx_widget--border_right dhx_widget--bg"
});

layout.getCell("sidebar").attach(sidebar);

@descr:

**Related sample**: [Layout. Attach](https://snippet.dhtmlx.com/6wuxj6sh)

{{note The DHTMLX Message, Popup, Window components can't be attached to the Layout cell because these components can't have the parent container due to their architecture principles.}}

[comment]: # (@related: layout/work_with_layout.md#attaching-a-component-to-a-cell)
