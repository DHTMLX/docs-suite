---
sidebar_label: tabTemplate
title: JavaScript Tabbar - tabTemplate Config
description: The tabTemplate config of DHTMLX Tabbar sets a callback function that returns HTML content for the titles of all tabs, such as icons, badges and custom text formatting.
---

# tabTemplate

@short: Optional. A callback function that defines the template for rendering HTML content in the titles of all tabs

#### Usage

~~~ts
tabTemplate?: (cell: object, activeTab: string) => string;
~~~

Tabbar calls the function for each tab with the following parameters:

- `cell` - (*object*) the configuration object of the current tab (`id`, `tab`, `html`, etc.)
- `activeTab` - (*string*) the id of the currently active tab

The function returns an HTML string. Tabbar inserts the returned value into the DOM of the tab.

#### Example

~~~html
<script>
    const tabbar = new dhx.Tabbar("tabbar_container", {
        mode: "top",
        css: "dhx_widget--bordered",
        tabTemplate: (cell, activeTab) => {
            const isActive = cell.id === activeTab;
            return `
                <i class="icon icon-${cell.icon}"></i>
                <span>${cell.tab}</span>
            `;
        },
        views: [
            { id: "vilnius", tab: "Vilnius", html: "..." },
            { id: "paris",   tab: "Paris",   html: "..." },
            { id: "london",  tab: "London",  html: "..." },
            { id: "rome",    tab: "Rome",    html: "..." }
        ]
    });
</script>
~~~

@descr:

The way Tabbar renders tabs depends on the `tabTemplate` option:

- **`tabTemplate` isn't set** - Tabbar renders each tab as plain text
- **`tabTemplate` is set** - Tabbar calls the function for each tab and inserts the returned HTML string into the DOM of the tab

The `tab` property of a tab is always a string. Tabbar never interprets it as HTML, whether you use `tabTemplate` or not. The user-defined `tabTemplate` function controls the rendering of all the tabs of Tabbar and is fully responsible for forming their markup.

**Related sample**: [Tabbar. Tab template](https://snippet.dhtmlx.com/ewmnyv3f)

@changelog: added in v9.4

**Related API**:
- [`views`](tabbar/api/tabbar_views_config.md)
- [`activeTab`](tabbar/api/tabbar_activetab_config.md)
- [`tabWidth`](tabbar/api/tabbar_tabwidth_config.md)
- [`tabHeight`](tabbar/api/tabbar_tabheight_config.md)

**Related article**: [HTML content in tab titles](tabbar/configuring_tabbar.md#html-content-in-tab-titles)
