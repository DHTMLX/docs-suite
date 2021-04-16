---
sidebar_label: beforeClose
title: beforeClose
---          

@short: fires before closing a list with options

@signature: beforeClose: () => boolean | void;

@returns:
param 	boolean		false-to prevent closing a combobox, otherwise true

@example:
combobox.events.on("BeforeClose", function( ) {
    // your logic here
    return false;
});


@template: api_event
@descr:

@changelog: added in v6.4

@relatedsample: https://snippet.dhtmlx.com/n70eqx5l	Combobox. Events