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
    - `id: string` - the id of a tab
    - `tab: string` - the name of a tab
    - `tabCss: string` - the name of the CSS class used for a tab
    - `css: string` - the name of the CSS class used for a cell
    - `header: string` - the header of a cell
    - `html: string` - HTML content for a tab
    - `padding: number | string` - the distance between the content of a cell and the border of tabbar
    - `tabWidth: number | string` - the width of a tab
    - `tabHeight: number | string` - the height of a tab 
- `index: number` - the position to add a tab into

:::info
Please note that if you specify the `id` fields for tabs, their values should be **unique**. You can also omit the `id` fields in the configuration of tabs. In this case they will be generated automatically.
:::

@example:
tabbar.addTab({tab: "tab-" + nextTab++, css:"panel flex"}, 0);

@descr:

**Related sample**: [Tabbar. Add / remove tab](https://snippet.dhtmlx.com/z5vjj83y)

@changelog: added in v6.4

[comment]: # (@relatedapi: tabbar/api/tabbar_removetab_method.md)

[comment]: # (@related: tabbar/work_with_tabbar.md#addingremoving-tabs)
