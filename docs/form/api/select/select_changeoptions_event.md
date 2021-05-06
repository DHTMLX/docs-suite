---
sidebar_label: changeOptions
title: changeOptions
---          

@short: fires on changing a list of Select options
 
@signature: {'changeOptions: (options: IOption[]) => void;'}

@params:
- options     array     a new array of Select options


@example:
form.getItem("select").events.on("ChangeOptions", function(options) {
    console.log("ChangeOptions", options);
});



@descr:

@changelog: added in v7.0
