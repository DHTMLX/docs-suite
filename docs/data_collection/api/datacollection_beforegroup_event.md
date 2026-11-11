---
sidebar_label: beforeGroup
title: JavaScript DataCollection - beforeGroup Event 
description: Learn when the beforeGroup event of DataCollection fires before the data of a collection is grouped and how to cancel the grouping by returning false. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# beforeGroup

@short: fires before the data of the collection is grouped

#### Usage

~~~ts
interface IGroupConfig {
    showMissed?: boolean | string; // true by default
    showEmptyGroups?: boolean; // false by default
    field?: string; // "group" by default
}

beforeGroup: (config: IGroupConfig) => boolean | void;
~~~

@params:
- `config: IGroupConfig` - the configuration object used for data grouping
    - `showMissed?: boolean | string` - optional, specifies whether the items that don't have the field for grouping are kept in the grouped data, *true* by default
        - if set to *true*, the items that don't have values for grouping are placed one by one after all the data
        - if a *string* value is set, e.g. "Missed", the items that don't have values for grouping are placed into a separate group the name of which will have the specified string value. This group will be placed as the last one
        - if set to *false*, the items that don't suit the grouping criteria are left out of the grouped data
    - `showEmptyGroups?: boolean` - optional, specifies whether a group that loses all its items stays in the collection, *false* by default
    - `field?: string` - optional, the group field name, *"group"* by default

@returns:
Return `false` to prevent data grouping; otherwise, `true`.

@example:
component.data.events.on("beforeGroup", (config) => {
    console.log("Grouping starts:", config);
    return true; // continue grouping
});

@descr:

**Related API**:
- [`group()`](data_collection/api/datacollection_group_method.md)
- [`afterGroup`](data_collection/api/datacollection_aftergroup_event.md)

@changelog: added in v9.0