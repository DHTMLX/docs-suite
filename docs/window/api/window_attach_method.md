---
sidebar_label: attach
title: attach
---          

@short: attaches a DHTMLX component to a dhtmlxWindow

```todoapi 
<!-- void attach(string|object component,object config);
attach(name: string | IViewFn | IView | IViewConstructor | any, config?: any): void; -->
```

@params:
- component 		string,object 		the name or object of a component
- config 			object 				optional, the configuration settings of a component



@example:
dhxWindow.attach("richtext",{mode: "document"});
dhxWindow.show();


@template: api_method
@descr:


@relatedsample: https://snippet.dhtmlx.com/t9ncuuou	Window. Attaching Other Components


@changelog:

@related: window/how_to_start.md
window/usage.md#attachingdhtmlxcomponents
