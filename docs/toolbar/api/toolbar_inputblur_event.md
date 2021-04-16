---
sidebar_label: inputBlur
title: inputBlur
---          

@short: fires when a control is blurred

@signature: inputBlur: (id: string) => any;

<!-- void inputBlur(string id){ ... }; void??? -->

@params:
- id 		string		the ID of a new control


@example:
toolbar.events.on("InputBlur", function(id){
    console.log(id);
});


@template: api_event
@descr:

@relatedsample: https://snippet.dhtmlx.com/xvak1p5y	Toolbar. Events

