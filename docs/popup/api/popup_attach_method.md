---
sidebar_label: attach
title: attach
---          

@short: attaches a DHTMLX component to a dhtmlxPopup

@signature: {'attach(name: string | object, config?: any): VNode;'}

@params:
- name 	string|object		the name or object of a component
- config		object	    		optional, the configuration settings of a component

@returns:
- attached			object			the object of the attached component

@example:
const timepicker = new dhx.Timepicker();
popup.attach(timepicker);
popup.show();

@descr:

**Related sample**: [Popup. Attach Timepicker](https://snippet.dhtmlx.com/7x6hlbqx)

