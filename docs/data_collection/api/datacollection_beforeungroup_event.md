---
sidebar_label: beforeUnGroup
title: JavaScript DataCollection - beforeUnGroup Event 
description: Learn when the beforeUnGroup event of DataCollection fires before the grouping of the data is reset and how to cancel the ungrouping by returning false. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# beforeUnGroup

@short: fires before the data of the collection is ungrouped

#### Usage

~~~ts
interface IGroupConfig {
    showMissed?: boolean | string; // true by default
    showEmptyGroups?: boolean; // false by default
    field?: string; // "group" by default
}

beforeUnGroup: (grouped: string[], config: IGroupConfig) => boolean | void;
~~~

@params:
- `grouped: string[]` - an array of fields data was grouped by
- `config: IGroupConfig` - the configuration object used for the latest data grouping
    - `showMissed?: boolean | string` - optional, specifies whether the items that don't have the field for grouping are kept in the grouped data, *true* by default
        - if set to *true*, the items that don't have values for grouping are placed one by one after all the data
        - if a *string* value is set, e.g. "Missed", the items that don't have values for grouping are placed into a separate group the name of which will have the specified string value. This group will be placed as the last one
        - if set to *false*, the items that don't suit the grouping criteria are left out of the grouped data
    - `showEmptyGroups?: boolean` - optional, specifies whether a group that loses all its items stays in the collection, *false* by default
    - `field?: string` - optional, the group field name, *"group"* by default

@returns:
Return `false` to prevent data ungrouping; otherwise, `true`.

@example:
grid.data.events.on("beforeUnGroup", (grouped, config) => {
    console.log("Starting deleting grouping. Fields:", grouped);
    return true; // continue deleting grouping
});

@descr:

**Related API**:
- [`ungroup()`](data_collection/api/datacollection_ungroup_method.md)
- [`afterUnGroup`](data_collection/api/datacollection_afterungroup_event.md)

@changelog: added in v9.0