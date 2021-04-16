---
sidebar_label: setValue
title: setValue
---          

@short: sets the value for a Combo control

@params:
- value     string|string[]     the value to be set  


@example:
form.getItem("combo").setValue("1");



@template: api_method
@descr:
You should set the value as a string (either as "1" or ["1"]), if *multiselection:false* is set or
the multiselection config is not defined, otherwise - set the value as an array of string values.

