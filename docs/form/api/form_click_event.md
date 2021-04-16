---
sidebar_label: click
title: click
---          

@short: fires after a click on a button in a form

@params:
- name 	string	 	the name  (or id, if the name is not specified) of a clicked button
- e 	Event 		a native event object


@example:
form.events.on("Click", function(name, events) {
    console.log("Click", name, events); 
});


@template: api_event
@descr:

@changelog: added in v7.0

