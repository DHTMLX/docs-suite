---
sidebar_label: click
title: click
---          

@short: fires after a click on a Button control

@params:
- events    Event   a native event object




@example:
form.getItem("button").events.on("Click", function(events) {
    console.log("Click", events);
});


@template: api_event
@descr:


@changelog: added in v7.0
