---
sidebar_label: setState
title: setState
---          

@short: sets values/states of controls

@signature: setState(state: object): void;

@params:
- state 		object			a hash of <i>key:value</i> pairs, where the key is the ID of a control and the value is a new value/state of the control

@example:
ribbon.setState({
    "search": "Hello",
    "edit": true,
    "align": "right"
});

@template: api_method
@descr:

@relatedsample: https://snippet.dhtmlx.com/i7kabram	Ribbon. Set State

@related: ribbon/operating_ribbon.md#settinggettingvaluesandstates

@changelog:


