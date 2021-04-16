---
sidebar_label: itemsCount
title: itemsCount
---          

@short: shows the total number of selected options

@signature: showItemsCount?: boolean | ((count: number) => string);

@example: 
var combo = new dhx.Combobox("combo_container", {
    multiselection: true,
    itemsCount: function (num) {
        return num + (num === 1 ? " item" : " items") + " selected";
    }
});


@template:	api_config
@descr: 
As a function takes one parameter:

- **count** - (*number*) the number of options

and should return a template for displaying a result.

Note that to select several options you need to enable the **multiselection** option.
 
@relatedsample: https://snippet.dhtmlx.com/fw2u2bww	Combobox. Items Count

@changelog: added in v6.4 


@related: combo/how_to_start.md#initializecombobox
combo/configuration.md#numberofselectedoptions