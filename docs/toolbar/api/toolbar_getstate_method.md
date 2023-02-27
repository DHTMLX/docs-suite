---
sidebar_label: getState()
title: JavaScript Toolbar - getState Method 
description: You can explore the getState method of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# getState()

@short: gets current values/states of controls

@signature: {'getState(id?: Id): IState;'}

@params:
- `id: string | number` - optional, the id of a Toolbar control

@returns:
Either a string with the value of the control, or a boolean value with the state of the control, or an object with IDs of controls and their values/states.

@example:
const state1 = toolbar.getState("search"); 
// -> "toolbar"

const state2 = toolbar.getState(); 
// -> {"search":"toolbar","edit":true,"align":"right"}

@descr:

**Related sample**: [Toolbar. Get state](https://snippet.dhtmlx.com/kvttdgad)

Starting from v7.0, the method can return the value/state of the control by its id:

~~~js
const state1 = toolbar.getState("search"); // -> "toolbar"

const state2 = toolbar.getState("edit"); // -> true/false
~~~

If id of a control is not passed to the method, the method returns an object with IDs of controls and their values/states:

~~~js
const state = toolbar.getState(); 
// -> {"search":"toolbar","edit":true,"align":"right"}
~~~

@changelog:
The ability to pass the **id** parameter to the method is added in v7.0.

[comment]: # (@related: toolbar/common_methods.md#settinggetting-values-and-states)
