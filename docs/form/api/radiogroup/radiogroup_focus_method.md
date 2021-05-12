---
sidebar_label: focus
title: focus
---          

@short: sets focus to the radio button of the RadioGroup control by its id

@signature: {'focus(id?: string): void;'}

@params:
- id    string  optional, the id of a radio button 

@example:
form.getItem("radiogroup").focus("radiobutton_1");


@descr:

If "id" is not specified, the method sets focus to the first radio button of the RadioGroup.

@changelog: added in v7.0
