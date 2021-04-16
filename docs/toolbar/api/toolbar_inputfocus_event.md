---
sidebar_label: inputFocus
title: inputFocus
---          

@short: fires when a control is focused

@signature: inputFocus: (id: string) => any;

@params:
- id		string			the ID of a new control

@example:
toolbar.events.on("inputFocus", function(id){
    console.log(id);
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/xvak1p5y	Toolbar. Events

