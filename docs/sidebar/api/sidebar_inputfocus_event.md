---
sidebar_label: inputFocus
title: inputFocus
---          

@short: fires when a control is focused

inputFocus: (id: string) => void;

@params:
- id		string			the ID of a new control


@example:
sidebar.events.on("InputFocus", function(id){
    console.log(id);
});


@template: api_event
@descr:


@related: sidebar/events.md
