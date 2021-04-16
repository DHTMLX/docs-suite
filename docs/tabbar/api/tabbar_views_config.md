---
sidebar_label: views
title: views
description: description
---          



@short: defines the configuration of tabs

@signature: views?: ICellConfig[] | ILayoutConfig[];

``` todoapi
 <!-- views?: ICellConfig[] | ILayoutConfig[]; возможо стоит понятнее расписать -->
```
@example: 
var tabbar = new dhx.Tabbar("tabbar_container", {
    views:[
        { tab: "left", css:"panel flex", header:"Left"},
        { tab: "west", css:"panel flex", header:"West"},
        { tab: "east", css:"panel flex", header:"East"},
        { tab: "right", css:"panel flex", header:"Right" }
    ]
});


@template:	api_config
@descr: 
1\. The **views** array contains a set of objects that describe configuration of tabs. Each tab object may include the following properties:

- <b>id</b> - the id of a tab
- <b>tab</b> - the name of a tab
- <b>tabCss</b> - the name of the CSS class used for a tab
- <b>css</b> - the name of the CSS class used for a cell
- <b>header</b> - the header of a cell
- <b>html</b> - HTML content for a tab
- <b>padding</b> - the distance between the content of a cell and the border of tabbar
- <b>tabWidth</b> - the width of a tab
- <b>tabHeight</b> - the height of a tab

2\. In case you specify both the sizes for a separate tab and the sizes for all tabs, the sizes set for a separate tab are a priority. For example:

~~~js
var tabbar = new dhx.Tabbar("tabbar_container",{
    tabHeight: 50,
    tabWidth: 80,
    views:[
        { tab: "left", css:"panel flex", header:"Left", tabHeight: 45, tabWidth: 100},
        // other tabs
    ]
});
~~~

As a result, the height of a tab is 45 and the width is 100.

3\. Here are some notes on defining the sizes of a tab when the [mode](tabbar/api/tabbar_mode_config.md) option is set in the configuration object of a Tabbar:

- If the mode of displaying a tabbar is set to "top"|"bottom", there is no the ability to define the height for a separate tab. <br/>By default, the width of the tabs is adjusted to their content. The default height of the tabs is 45px. 

- If the mode of displaying a tabbar is set to "left"|"right", there is no the ability to define the width for a separate tab. <br/> The default height of the tabs is 45px, default width is 200px.


@related: 
tabbar/init.md#definetabbarstructure
tabbar/configuring_tabbar.md#structureoftabs 

[Tabbar. Tab size](https://snippet.dhtmlx.com/yy841z3j)

@changelog:

**tabWidth** and **tabHeight** properties of a tab object are added in v7.0.
