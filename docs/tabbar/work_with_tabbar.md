---
sidebar_label: Work with Tabbar
title: JavaScript Tabbar - Work with Tabbar 
description: You can explore how to work with Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with Tabbar

DHTMLX Tabbar inherits its API from DHTMLX Layout, so you can manage Tabbar with Layout methods.

## Add and remove tabs {#addingremoving-tabs}

Use the [](tabbar/api/tabbar_addtab_method.md) and [](tabbar/api/tabbar_removetab_method.md) methods to add and remove tabs.

The [](tabbar/api/tabbar_addtab_method.md) method takes two parameters:

<table>
    <tbody>
        <tr>
            <td><code>view</code></td>
            <td>(<code>object</code>) an object of a tab. It may include the following properties:<ul><li><code>tab</code> — the name of a tab</li><li><code>tabCss</code> — the name of the CSS class used for a tab</li><li><code>css</code> — the name of the CSS class used for a cell</li><li><code>header</code> — the header of a cell</li></ul></td>
        </tr>
        <tr>
            <td><code>index</code></td>
            <td>(<code>number</code>) the position to add a tab into</td>
        </tr>
    </tbody>
</table>
<br/>

~~~js
// adding a new tab
tabbar.addTab({tab: "tab-" + nextTab++, css:"panel flex"}, 0);
~~~

**Related sample**: [Tabbar. Add / remove tab](https://snippet.dhtmlx.com/z5vjj83y)

The [`removeTab()`](tabbar/api/tabbar_removetab_method.md) method takes the id of the tab to remove as a parameter. Call the [`getId()`](tabbar/api/tabbar_getid_method.md) method to get the id of a tab:

~~~js
// removing a tab
const id = tabbar.getId(0);
tabbar.removeTab(id);
~~~

**Related sample**: [Tabbar. Add / remove tab](https://snippet.dhtmlx.com/z5vjj83y)

## Get the id of a tab {#getting-the-id-of-a-tab}

The [`getId()`](tabbar/api/tabbar_getid_method.md) method returns the id of a tab. It takes the index of the tab as a parameter:

~~~js
const id = tabbar.getId(0);
~~~

## Iterate over cells {#iterating-over-cells}

The [`forEach()`](tabbar/api/tabbar_foreach_method.md) method iterates over the cells of Tabbar. Tabbar calls the passed callback function for each cell with the following parameters:

- `cell` — the object of a cell
- `index` — the index of a cell
- `array` — an array with the cells

~~~jsx
tabbar.forEach((cell, index, array) => {
    console.log(index, cell.id);
});
~~~

## Set and get the active tab {#settinggetting-the-active-tab}

The [`setActive()`](tabbar/api/tabbar_setactive_method.md) method sets the active tab. It takes the id of a tab as a parameter:

~~~js
const tabbar = new dhx.Tabbar("tabbar_container", {
    mode: "top",            
    views:[
        { id: "1", tab: "tab-1", css:"panel flex"},
        { id: "2", tab: "tab-2", css:"panel flex"},
        { id: "3", tab: "tab-3", css:"panel flex"},
        { id: "4", tab: "tab-4", css:"panel flex"}
    ]
});

tabbar.setActive("2");
~~~

**Related sample**: [Tabbar. Set active](https://snippet.dhtmlx.com/u9ryz38f)

The [`getActive()`](tabbar/api/tabbar_getactive_method.md) method returns the id of the active tab:

~~~js
const tabbar = new dhx.Tabbar("tabbar_container", {
    mode: "top",            
    views:[
        { id: "1", tab: "tab-1", css:"panel flex"},
        { id: "2", tab: "tab-2", css:"panel flex"},
        { id: "3", tab: "tab-3", css:"panel flex"},
        { id: "4", tab: "tab-4", css:"panel flex"}
    ]
});

const active = tabbar.getActive(); // -> "2"
~~~

**Related sample**: [Tabbar. Get active](https://snippet.dhtmlx.com/xpvkcwiu)

## Enable and disable a tab {#enablingdisabling-a-tab}

The [`enableTab()`](tabbar/api/tabbar_enabletab_method.md) method enables a tab:

~~~js
tabbar.enableTab("London");
~~~

To disable a tab, use the [`disableTab()`](tabbar/api/tabbar_disabletab_method.md) method:

~~~js
tabbar.disableTab("London");
// -> true|false
~~~

**Related sample**: [Tabbar. Disable tab](https://snippet.dhtmlx.com/9l3egq3z)

## Check if a tab is disabled {#checking-if-a-tab-is-disabled}

The [`isDisabled()`](tabbar/api/tabbar_isdisabled_method.md) method checks whether a tab is disabled. It takes the id of the tab as a parameter:

~~~js
tabbar.isDisabled("London"); // -> returns true/false
~~~

To check whether the active tab is disabled, call the [`isDisabled()`](tabbar/api/tabbar_isdisabled_method.md) method without parameters:

~~~js
tabbar.isDisabled(); // -> returns true/false
~~~

**Related sample**: [Tabbar. Is disabled tab](https://snippet.dhtmlx.com/86er2y7m)

## Attach a component to a cell {#attaching-a-component-to-a-cell}

Call the [`attach()`](tabbar/api/cell/tabbar_cell_attach_method.md) method of a Tabbar cell to attach a DHTMLX component to the cell:

~~~js
const dataview = new dhx.DataView(null, {
    template: dataviewTemplate,
    itemsInRow: 3,
    gap: "10px"
});

dataview.data.parse(dataset);

tabbar.getCell("dataview").attach(dataview);
~~~

**Related sample**: [Tabbar. Attach widget](https://snippet.dhtmlx.com/o1jwmw1l)

:::note
You can't attach Message, Popup, or Window to a Tabbar cell: these components can't have a parent container.
:::

## Attach HTML content to a cell {#attaching-an-html-content-to-a-cell}

Call the [](tabbar/api/cell/tabbar_cell_attachhtml_method.md) method of a Tabbar cell to attach HTML content to the cell. The method takes a string with HTML as a parameter.

~~~js
const tabbar = new dhx.Tabbar("tabbar_container", {
    mode: "top",
    css: "dhx_widget--bordered",
    views: [
        { id: "vilnius", tab: "Vilnius" },
    ]
});

tabbar.getCell("vilnius").attachHTML("<p>Information about Vilnius</p>");
~~~
