---
sidebar_label: setState
title: setState
---          

@short: sets values/states of controls

``` todoapi - не компилируется из-за скобок
<!-- @signature: setState(state: {[key: string]: string}): void -->
```

@params:
- state 		object			a hash of <i>key:value</i> pairs, where the key is the ID of a control and the value is a new value/state of the control

@example:
toolbar.setState({
    "search": "Hello",
    "edit": true,
    "align": "right"
});


@template: api_method
@descr:

@relatedsample: https://snippet.dhtmlx.com/h34uh1dr	Toolbar. Set State

@related: toolbar/common_methods.md#settinggettingvaluesandstates

@changelog:


