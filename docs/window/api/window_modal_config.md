---
sidebar_label: modal
title: modal
---          

@short: defines whether a window is modal

@signature: modal?: boolean;

@default: false

@example: 
var dhxWindow = new dhx.Window({
    modal:true
});

dhxWindow.show();


@template:	api_config
@descr: 
A modal window blocks the main browser window when called.

@related: window/how_to_start.md
window/configuration.md#modality
