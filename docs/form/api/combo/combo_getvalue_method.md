---
sidebar_label: getValue
title: getValue
---          

@short: returns the current value of a Combo control

@signature: {'getValue(): string | string[];'}

@returns:
param   string | string[]     the current value of the control

@example:
var value = form.getItem("combo").getValue();
// -> "2"




@descr:
The method returns the current string value, if *multiselection:false* is set or the multiselection
config is not defined, otherwise - returns an array of string value of a Combo control.

