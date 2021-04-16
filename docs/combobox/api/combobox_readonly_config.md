---
sidebar_label: readOnly
title: readOnly
---          

@short: makes Combo Box readonly

@signature: readOnly?: boolean;

@default: false

@example: 
var combo = new dhx.Combobox("combo_container", { 
    readOnly:true
});

@template:	api_config
@descr: 

{{note Note, that in v7.0, the **readonly** property have been deprecated and renamed to **readOnly**. }}

In this mode it is only possible to select options from the list, without entering words in the input.

@related: combo/how_to_start.md#initializecombobox
combo/configuration.md#readonlymode

@relatedsample: https://snippet.dhtmlx.com/igjsuf7y	Combobox. Readonly

@changelog:
