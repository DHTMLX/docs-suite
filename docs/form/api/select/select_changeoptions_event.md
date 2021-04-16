---
sidebar_label: changeOptions
title: changeOptions
---          

@short: fires on changing a list of Select options
 

@params:
- options     array     a new array of Select options


@example:
form.getItem("select").events.on("ChangeOptions", function(options) {
    console.log("ChangeOptions", options);
});


@template: api_event
@descr:

@changelog: added in v7.0
