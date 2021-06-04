---
sidebar_label: setState()
title: JavaScript Toolbar - setState Method 
description: You can explore the setState method of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# setState()

@short: sets values/states of controls

@signature: {'setState(state: IState): void;'}

@params:
`state: object` - a hash of <i>key:value</i> pairs, where the key is the ID of a control and the value is a new value/state of the control

@example:
toolbar.setState({
    "search": "Hello",
    "edit": true,
    "align": "right"
});

@descr:

**Related sample**: [Toolbar. Set State](https://snippet.dhtmlx.com/h34uh1dr)

[comment]: # (@related: toolbar/common_methods.md#settinggetting-values-and-states)
