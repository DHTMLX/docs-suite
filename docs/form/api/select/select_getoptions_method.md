---
sidebar_label: getOptions
title: getOptions
---          

@short: returns an array of Select options

@returns:
- param   array   an array with options



@example:
form.getItem("select").getOptions(); --> [{…}, {…}]


@template: api_method
@descr:
Each option is an object with a set of *key:value* pairs - attributes of options and
their values:

- **value** - (*string|number*) mandatory, sets the value for the select option
- **content** - (*string*) mandatory, the content displayed in the select option
- **disabled** - (*boolean*) optional, defines whether the option is enabled (*false*) or disabled (*true*)

