---
sidebar_label: filter
title: filter
---          

@short: sets a custom function for filtering Combo Box options

@signature: filter?: (item: any, input: string) => boolean;

@example: 
function mySearch(item, target) {
    // your filtering logic here            
}
var combo = new dhx.Combobox("combo_container", {
    filter: mySearch
});



@template:	api_config
@descr: 


@relatedsample:
https://snippet.dhtmlx.com/791incm9	Combobox. Custom Filter

@related: combo/how_to_start.md#initializecombobox
combo/customization.md#customfilterforoptions