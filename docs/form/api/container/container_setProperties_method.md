---
sidebar_label: setProperties
title: setProperties
---

`to to - Check properties, @changelog: в конец, сейчас @example: захватывает текст в блок до @changelog:, как и @signature:`

@short: allows changing available configuration properties of the control dynamically

@signature:

@example:
form.getItem("container").setProperties({
    height: "200", 
    width: "800",
});

@changelog: added in v7.2

The method invokes the afterChangeProperties and beforeChangeProperties events. `to do - after events ready`

It is possible to change values of the following properties of the Container control:

- `width` - (string|number|"content") the width of a control 
- `height` - (string|number|"content") the height of a control 
- `padding` - (string|number) sets padding between a cell and a border of a control
  