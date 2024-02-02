---
sidebar_label: addTab()
title: JavaScript Tabbar - addTab Method 
description: You can explore the addTab method of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# addTab()

@short: adds a new tab into a tabbar

@signature: {'addTab(config: object, index: number): void;'}

@params:
- `config: object` - an object of a tab. It may include the following properties:
    - `tab: string` - the name of a tab
    - `tabCss: string` - the name of the CSS class used for a tab
    - `css: string` - the name of the CSS class used for a cell
    - `header: string` - the header of a cell 
- `index: number` - the position to add a tab into

@example:
tabbar.addTab({tab: "tab-" + nextTab++, css:"panel flex"}, 0);

@descr:

**Related sample**: [Tabbar. Add / remove tab](https://snippet.dhtmlx.com/z5vjj83y)

@changelog: added in v6.4

[comment]: # (@relatedapi: tabbar/api/tabbar_removetab_method.md)

[comment]: # (@related: tabbar/work_with_tabbar.md#addingremoving-tabs)
