---
sidebar_label: setFilter()
title: JavaScript Roster - setFilter Method
description: You can explore the setFilter method of Roster in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# setFilter()

@short: sets a rule that is applied to roster rows

@signature: {'setFilter(rule: object, config?: object): void;'}

@params:
- `rule: object` - an object with the filter rule. The object contains the following properties:
    - `field: string` - mandatory, the id of a column
    - `match: string | number` - mandatory, the value that will be compared with cell values
    - `mode: string` - optional, the name of the comparison mode
- `config: object` - optional, an object with additional settings of a filter

@example:
roster.setFilter({
    field: "city",
    match: "Berlin"
});

@descr:

### Filtering rows

Prior to the first call, the roster displays every loaded row. The rule is applied to all loaded rows by the widget, and the footer counter shows the new total. The `mode` property accepts `"equal"`, `"contains"`, and `"between"`.

~~~js
roster.setFilter({
    field: "city",
    match: "Berlin",
    mode: "contains"
});
~~~

### Combining rules

The second call replaces the previous rule. The widget keeps the rule in the internal state object. It survives a page reload.

You can match a range of values by setting the `mode` property to `"between"`. The `config` object takes two optional settings: the id of a target view and a custom comparison function. Finally, call `refresh()` to repaint the rows without a request to the server.

[comment]: # (@relatedapi: roster/api/roster_filter_config.md roster/api/roster_clearfilter_method.md)

[comment]: # (@related: roster/usage.md#filtering-rows)
