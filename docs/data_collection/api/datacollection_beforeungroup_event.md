---
sidebar_label: beforeUnGroup
title: JavaScript DataCollection - beforeUnGroup Event 
description: You can explore the beforeUnGroup event of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# beforeUnGroup

@short: fires before ungrouping of data has started

## Usage

~~~jsx
interface IGroupConfig {
    showMissed?: boolean | string; // true by default
    field?: string; // "group" by default
}

beforeUnGroup: (grouped: string[], config: IGroupConfig) => boolean | void;
~~~

## Parameters

- `grouped` - an array of fields data was grouped by
- `config` - the configuration object used for the latest data grouping
    - `showMissed` - (optional) specifies whether the elements that don't have the field for grouping should be displayed, *true* by default
        - if set to *true*, the rows that don't have values for grouping are rendered row by row after all the data
        - if a *string* value is set, e.g. "Missed", the rows that don't have values for grouping are rendered as a separate group the name of which will have the specified string value. This group will be rendered as the last one
        - if set to *false*, the rows that don't suit the grouping criteria won't be rendered
    - `field` - (optional) the group field name, *"group"* by default

@returns:
Return `false` to prevent data ungrouping; otherwise, `true`.

@example:
grid.data.events.on("beforeUnGroup", (grouped, config) => {
    console.log("Starting deleting grouping. Fields:", grouped);
    return true; // continue deleting grouping
});

@descr:

@changelog: added in v9.0