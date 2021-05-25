---
sidebar_label: setState()
title: JavaScript Ribbon - setState Method 
hide_title: true
description: You can explore the setState method of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# setState()

@short: sets values/states of controls

@signature: {'setState(state: IState): void;'}

@params:
`state: object` - a hash of *key:value* pairs, where the key is the ID of a control and the value is a new value/state of the control

@example:
ribbon.setState({
    "search": "Hello",
    "edit": true,
    "align": "right"
});

@descr:

**Related sample**: [Ribbon. Set State](https://snippet.dhtmlx.com/i7kabram)

[comment]: # (@related: ribbon/operating_ribbon.md#settinggetting-values-and-states)
