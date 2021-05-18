---
sidebar_label: attach()
title: attach()
---          

@short: attaches a DHTMLX component to a dhtmlxWindow

@signature: {'attach(name: string | IViewFn | IView | IViewConstructor | any, config?: any): void;'}

@params:
- `component: string, object` -	the name or object of a component
- `config: object` - optional, the configuration settings of a component

@example:
dhxWindow.attach("richtext",{mode: "document"});
dhxWindow.show();

@descr:

**Related sample**: [Window. Attaching Other Components](https://snippet.dhtmlx.com/t9ncuuou)

[comment]: # (@related: window/how_to_start.md window/usage.md#attaching-dhtmlx-components)
