---
sidebar_label: afterUnGroup
title: JavaScript DataCollection - afterUnGroup Event 
description: You can explore the afterUnGroup event of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterUnGroup

@short: fires after data is ungrouped

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
    - `showMissed?: boolean | string` - optional, specifies whether the elements that don't have the field for grouping should be displayed, *true* by default
        - if set to *true*, the rows that don't have values for grouping are rendered row by row after all the data
        - if a *string* value is set, e.g. "Missed", the rows that don't have values for grouping are rendered as a separate group the name of which will have the specified string value. This group will be rendered as the last one
        - if set to *false*, the rows that don't suit the grouping criteria won't be rendered
    - `showEmptyGroups?: boolean` - optional, specifies whether a group that loses all its items stays in the collection, *false* by default
    - `field?: string` - optional, the group field name, *"group"* by default

@example:
grid.data.events.on("afterUnGroup", (grouped, config) => {
    console.log("Grouping deletion completed. Fields:", grouped);
});

@descr:

@changelog: added in v9.0