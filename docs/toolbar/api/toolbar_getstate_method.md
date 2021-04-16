---
sidebar_label: getState
title: getState
---          

@short: gets current values/states of controls

@signature: getState(id?: string | number): [key: string]: string;;

@params:
- id    string|number   optional, the id of a Toolbar control

@returns:
- state		string|boolean|object		the value/state of the control, or an object with IDs of controls and their values/states


@example:
var state1 = toolbar.getState("search"); 
// -> "toolbar"

var state2 = toolbar.getState(); 
// -> {"search":"toolbar","edit":true,"align":"right"}


@template: api_method
@descr:
Starting from v7.0, the method can return the value/state of the control by its id:

~~~js
var state1 = toolbar.getState("search"); // -> "toolbar"

var state2 = toolbar.getState("edit"); // -> true/false
~~~

If id of a control is not passed to the method, the method returns an object with IDs of controls and their values/states:

~~~js
var state = toolbar.getState(); 
// -> {"search":"toolbar","edit":true,"align":"right"}
~~~


@relatedsample: https://snippet.dhtmlx.com/kvttdgad	Toolbar. Get State

@related: toolbar/common_methods.md#settinggettingvaluesandstates

@changelog:
The ability to pass the **id** parameter to the method is added in v7.0.

