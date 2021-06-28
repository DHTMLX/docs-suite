---
sidebar_label: attach()
title: JavaScript Window - attach Method 
description: You can explore the attach method of Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# attach()

@short: attaches a DHTMLX component to a dhtmlxWindow

@signature: {'attach(name: string | IViewFn | IView | IViewConstructor | any, config?: any): void;'}

@params:
- `name: string, object` -	the name or object of a component
- `config: object` - optional, the configuration settings of a component

@example:
dhxWindow.attach("richtext",{mode: "document"});
dhxWindow.show();

@descr:

**Related sample**: [Window. Attaching Other Components](https://snippet.dhtmlx.com/t9ncuuou)

{{note The DHTMLX Message, Popup, Window components can't be attached to Window because these components can't have the parent container due to their architecture principles.}}

[comment]: # (@related: window/how_to_start.md window/usage.md#attaching-dhtmlx-components)
