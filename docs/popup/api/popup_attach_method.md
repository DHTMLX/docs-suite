---
sidebar_label: attach
title: attach
---          

@short: attaches a DHTMLX component to a dhtmlxPopup

```todoapi 
object attach(string|object component,object config);
attach(name: any, config?: any): VNode;
```

@params:
- component 	string|object		the name or object of a component
- config		object	    		optional, the configuration settings of a component

@returns:
- attached			object			the object of the attached component

@example:
const timepicker = new dhx.Timepicker();
popup.attach(timepicker);
popup.show();

@relatedsample: https://snippet.dhtmlx.com/7x6hlbqx	Popup. Attach Timepicker

@changelog:

