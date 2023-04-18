---
sidebar_label: attach()
title: JavaScript Popup - attach Method 
description: You can explore the attach method of Popup in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# attach()

@short: attaches a DHTMLX component to a DHTMLX Popup

@signature: {'attach(name: string | object, config?: object): object;'}

@params:
- `name: string | object` - the name or object of a component
- `config: object` - optional, the configuration settings of a component

@returns:
The object of the attached component.

@example:
const timepicker = new dhx.Timepicker();
popup.attach(timepicker);
popup.show();

@descr:

**Related sample**: [Popup. Attach Timepicker](https://snippet.dhtmlx.com/7x6hlbqx)
