---
sidebar_label: selectAllButton
title: selectAllButton
---          

@short: defines whether the Select All button should be shown

@signature: selectAllButton?: boolean;

@example: 
var combo = new dhx.Combobox("combo_container", {
    // enables multiple selection of options
    multiselection:true,
    // shows the Select All button
    selectAllButton: true
});


@template:	api_config
@descr: 
Note that to select several options you need to enable the **multiselection** option.

@related: combo/how_to_start.md#initializecombobox
combo/configuration.md#selectionofalloptionsinthelist

@relatedsample: https://snippet.dhtmlx.com/ui7pi7ty	Combobox. Select All Button