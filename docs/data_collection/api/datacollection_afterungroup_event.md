---
sidebar_label: afterUnGroup
title: JavaScript DataCollection - afterUnGroup Event 
description: Learn when the afterUnGroup event of DataCollection fires once the grouping of the data is reset, and which grouping configuration the handler receives. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# afterUnGroup

@short: fires after the data of the collection is ungrouped

#### Usage

~~~ts
interface IGroupConfig {
    showMissed?: boolean | string; // true by default
    showEmptyGroups?: boolean; // false by default
    field?: string; // "group" by default
}

afterUnGroup: (grouped: string[], config: IGroupConfig) => void;
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

@example:
grid.data.events.on("afterUnGroup", (grouped, config) => {
    console.log("Grouping deletion completed. Fields:", grouped);
});

@descr:

**Related API**:
- [`ungroup()`](data_collection/api/datacollection_ungroup_method.md)
- [`beforeUnGroup`](data_collection/api/datacollection_beforeungroup_event.md)

@changelog: added in v9.0