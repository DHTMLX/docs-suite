---
sidebar_label: Configuration
title: JavaScript Tabbar - Configuration 
description: You can explore the configuration of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Configuration

## Close buttons for tabs

![Tabbar with a close button next to each tab and the active Paris tab in DHTMLX Suite](/img/tabbar/close_button.png)

**Related sample**: [Tabbar. Close button](https://snippet.dhtmlx.com/cysre4v8)

The [`closable`](tabbar/api/tabbar_closable_config.md) property adds close buttons to tabs. Users can click a close button to close the tab. Set the property to `true` to add close buttons to all tabs:

~~~jsx
const tabbar = new dhx.Tabbar("tabbar_container", {
    closable: true
});
~~~

To add close buttons only to specific tabs, set the [`closable`](tabbar/api/tabbar_closable_config.md) property to an array of tab ids:

~~~jsx
const tabbar = new dhx.Tabbar("tabbar_container", {
    closable: ["paris", "london"]
});
~~~

## Disabled tabs

![Tabbar with grayed out disabled Paris and Rome tabs and active London tab in DHTMLX Suite](/img/tabbar/disabled_tab.png)

If you don't set the [`disabled`](tabbar/api/tabbar_disabled_config.md) property, all tabs are enabled. Set the property to disable one or several tabs:

~~~jsx
// make one tab disabled
const tabbar = new dhx.Tabbar("tabbar_container", {
    disabled: "London"
});

// make several tabs disabled
const tabbar = new dhx.Tabbar("tabbar_container", {
    disabled: ["Paris", "Rome"]
});
~~~

**Related sample**: [Tabbar. Rich configuration (close, disable, overflow, active tab)](https://snippet.dhtmlx.com/xqthiy66)

## Position of tabbar

![Tabbar in left mode with tabs stacked vertically beside the content in DHTMLX Suite](/img/tabbar/mode.png)

**Related sample**: [Tabbar. Mode: top, left, right, bottom](https://snippet.dhtmlx.com/xq6k0tts)

The [`mode`](tabbar/api/tabbar_mode_config.md) property sets the side of Tabbar where tabs appear. The default value is `"top"`. You can also set the property to `"bottom"`, `"left"`, or `"right"`:

~~~jsx
const tabbar = new dhx.Tabbar("tabbar_container", {
    mode: "left"
});
~~~

## Size of tabs

The [`tabWidth`](tabbar/api/tabbar_tabwidth_config.md) and [`tabHeight`](tabbar/api/tabbar_tabheight_config.md) properties set the width and height of tabs. The default width is 200px, and the default height is 45px. Set the properties to change the default tab size:

~~~jsx
const tabbar = new dhx.Tabbar("tabbar_container", {
    tabWidth: 190,
    tabHeight: 50
});
~~~

**Related sample**: [Tabbar. Tab size](https://snippet.dhtmlx.com/yy841z3j)

## Structure of tabs

Define the structure of Tabbar in the [`views`](tabbar/api/tabbar_views_config.md) property when you initialize the component. Each tab is an object that can include the following properties:

- `id` — the id of a tab
- `tab` — the name of a tab
- `tabCss` — the name of the CSS class used for a tab
- `css` — the name of the CSS class used for a cell
- `header` — the header of a cell
- `html` — HTML content of a cell
- `padding` — the distance between the content of a cell and the border of tabbar
- `tabWidth` — the width of a tab (for more information, see [`views`](tabbar/api/tabbar_views_config.md))
- `tabHeight` — the height of a tab (for more information, see [`views`](tabbar/api/tabbar_views_config.md))


~~~jsx
const tabbar = new dhx.Tabbar("tabbar_container", {
    views: [
        { tab: "left", css: "panel flex", header: "Left" },
        { tab: "west", css: "panel flex", header: "West" },
        { tab: "east", css: "panel flex", header: "East" },
        { tab: "right", css: "panel flex", header: "Right" }
    ]
});
~~~

**Related sample**: [Tabbar. Tab size](https://snippet.dhtmlx.com/yy841z3j)

## HTML content in tab titles

![Tabbar with icons and temperature badges in tab titles in DHTMLX Suite](/img/tabbar/tab_template.png)

Use the [`tabTemplate`](tabbar/api/tabbar_tabtemplate_config.md) option to render HTML content in tab titles, for example, an icon next to the tab name. The option is a callback function that defines the template for the titles of all tabs.

Tabbar calls the function for each tab with the following parameters:

- `cell` — (`object`) the configuration object of the current tab (`id`, `tab`, `html`, and other tab properties)
- `activeTab` — (`string`) the id of the active tab

The function returns an HTML string, and Tabbar inserts it into the DOM of the tab:

~~~html
<script>
    const tabbar = new dhx.Tabbar("tabbar_container", {
        mode: "top",
        css: "dhx_widget--bordered",
        tabTemplate: (cell, activeTab) => {
            const isActive = cell.id === activeTab;
            return `
                <i class="icon icon-${cell.icon}"></i>
                <span class="${isActive ? "tab-title tab-title--active" : "tab-title"}">${cell.tab}</span>
            `;
        },
        views: [
            { id: "vilnius", tab: "Vilnius", icon: "cloud", html: "..." },
            { id: "paris",   tab: "Paris",   icon: "sun",   html: "..." },
            { id: "london",  tab: "London",  icon: "rain",  html: "..." },
            { id: "rome",    tab: "Rome",    icon: "sun",   html: "..." }
        ]
    });
</script>
~~~

Without the `tabTemplate` option, Tabbar renders each tab as plain text. The `tab` property of a tab is always a string, and Tabbar never interprets it as HTML, whether you use `tabTemplate` or not. If you set `tabTemplate`, your function controls the rendering of all tabs and builds their entire markup.

**Related sample**: [Tabbar. Tab with HTML template](https://snippet.dhtmlx.com/3jb49vcx)

## Autosize for tabs

If you don't set the width or height of tabs, you can make the tabs adjust automatically to the size of the Tabbar container. Set the [`tabAutoWidth`](tabbar/api/tabbar_tabautowidth_config.md) or [`tabAutoHeight`](tabbar/api/tabbar_tabautoheight_config.md) property to `true`:

~~~jsx
const tabbar = new dhx.Tabbar("tabbar_container", {
    views: [
        { tab: "left", css: "panel flex", header: "Left" },
        { tab: "west", css: "panel flex", header: "West" },
        { tab: "east", css: "panel flex", header: "East" },
        { tab: "right", css: "panel flex", header: "Right" }
    ],
    tabAutoWidth: true,
    mode: "top"
});
~~~

**Related sample**: [Tabbar. Tab auto width](https://snippet.dhtmlx.com/mlzko8am)

**Related sample**: [Tabbar. Tab auto height](https://snippet.dhtmlx.com/pqvycp1c)

:::note 
The [`tabAutoWidth`](tabbar/api/tabbar_tabautowidth_config.md) option takes effect when [`mode`](tabbar/api/tabbar_mode_config.md) is `"top"` or `"bottom"`. The [`tabAutoHeight`](tabbar/api/tabbar_tabautoheight_config.md) option takes effect when [`mode`](tabbar/api/tabbar_mode_config.md) is `"left"` or `"right"`.
:::

## Tabs without content

![Tabbar rendered with tabs only and an empty content area below in DHTMLX Suite](/img/tabbar/no_content.png)

Set the [`noContent`](tabbar/api/tabbar_nocontent_config.md) option to `true` to render tabs without content:

~~~jsx
const tabbar = new dhx.Tabbar("tabbar_container", {
    noContent: true
});
~~~

**Related sample**: [Tabbar. Without content](https://snippet.dhtmlx.com/7jzrifql)

## Alignment

![Tabbar with center aligned tabs and the active VILNIUS tab showing content in DHTMLX Suite](/img/tabbar/tabbar_align.png)

From v7.0, you can align tabs with the [`tabAlign`](tabbar/api/tabbar_tabalign_config.md) option:

~~~jsx
const tabbar = new dhx.Tabbar("tabbar_container", {
    views: [
        { tab: "left", css: "panel flex", header: "Left" },
        { tab: "west", css: "panel flex", header: "West" },
        { tab: "east", css: "panel flex", header: "East" },
        { tab: "right", css: "panel flex", header: "Right" }
    ],
    tabAlign: "center"
});
~~~

**Related sample**: [Tabbar. Tab align](https://snippet.dhtmlx.com/bctscs71)

The option takes the following values: `"left"` or `"start"`, `"center"` or `"middle"`, and `"right"` or `"end"`.
