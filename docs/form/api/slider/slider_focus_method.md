---
sidebar_label: focus
title: focus
---          

`to do check`

@short: sets focus to a Slider control

@signature: focus(): void;

@example: form.getItem("slider").focus();
@examplestop:

## Range Mode

It is possible to specify a thumb to focus in a range mode of the Slider. Use `true` and `false` as an argument to set focus.

@signature: focus(extra?: boolean): void;

@example: form.getItem("slider").focus(true); 

@changelog: added in v7.2