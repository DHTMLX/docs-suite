---
sidebar_label: setState
title: setState
---          

@short: sets values/states of controls

@signature: {'setState(state: IState): void;'}

@params:
- state 		object			a hash of <i>key:value</i> pairs, where the key is the ID of a control and the value is a new value/state of the control

@example:
ribbon.setState({
    "search": "Hello",
    "edit": true,
    "align": "right"
});


@descr:

**Related sample**: [Ribbon. Set State](https://snippet.dhtmlx.com/i7kabram)

@related: ribbon/operating_ribbon.md#settinggettingvaluesandstates




