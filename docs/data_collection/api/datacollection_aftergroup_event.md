---
sidebar_label: afterGroup
title: JavaScript DataCollection - afterGroup Event 
description: Learn when the afterGroup event of DataCollection fires once the data of a collection is grouped, and which grouping configuration the handler receives. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# afterGroup

@short: fires after the data of the collection is grouped

#### Usage

~~~ts
interface IGroupConfig {
    showMissed?: boolean | string; // true by default
    showEmptyGroups?: boolean; // false by default
    field?: string; // "group" by default
}

afterGroup: (grouped: string[], config: IGroupConfig) => void;
~~~

@params:
- `grouped: string[]` - an array of fields data was grouped by
- `config: IGroupConfig` - the configuration of data grouping
    - `showMissed?: boolean | string` - optional, specifies whether the items that don't have the field for grouping are kept in the grouped data, *true* by default
        - if set to *true*, the items that don't have values for grouping are placed one by one after all the data
        - if a *string* value is set, e.g. "Missed", the items that don't have values for grouping are placed into a separate group the name of which will have the specified string value. This group will be placed as the last one
        - if set to *false*, the items that don't suit the grouping criteria are left out of the grouped data
    - `showEmptyGroups?: boolean` - optional, specifies whether a group that loses all its items stays in the collection, *false* by default
    - `field?: string` - optional, the group field name, *"group"* by default

@example:
component.data.events.on("afterGroup", (grouped, config) => {
    console.log("Grouping complete. Fields:", grouped, "Configuration:", config);
});

@descr:

**Related API**:
- [`group()`](data_collection/api/datacollection_group_method.md)
- [`beforeGroup`](data_collection/api/datacollection_beforegroup_event.md)

@changelog: added in v9.0