---
sidebar_label: setOptions
title: setOptions
---          

@short: allows changing a list of Select options dynamically

@params:
- options   array   an array with new options



@example:
form.getItem("select").setOptions([
    { value: "new_1", content: "new_content-1", disabled:true },
    { value: "new_2", content: "new_content-2" }
]);


@template: api_method
@descr:
Each option is an object with a set of *key:value* pairs - attributes of options and
their values:

- **value** - (*string|number*) mandatory, sets the value for the select option
- **content** - (*string*) mandatory, the content displayed in the select option
- **disabled** - (*boolean*) optional, defines whether the option is enabled (*false*) or disabled (*true*)

