---
sidebar_label: setProperties
title: setProperties
---

@short: allows changing available configuration properties of the control dynamically

@signature:

@example:
form.getItem("container").setProperties({
    height: "200", 
    width: "800",
    padding: "10"
});

@descr:
The method invokes the [afterChangeProperties](form/api/container/container_afterchangeproperties_event.md) and [beforeChangeProperties](form/api/container/container_beforechangeproperties_event.md) events.

It is possible to change values of the following properties of the Container control:

- `width` - *string, number, "content"* - the width of a control 
- `height` - *string, number, "content"* - the height of a control 
- `padding` - *string, number* - sets padding between a cell and a border of a control
  
@changelog: added in v7.2
