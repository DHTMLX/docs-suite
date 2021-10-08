---
sidebar_label: setProperties()
title: JavaScript Form - setProperties Container Method 
description: You can explore the setProperties method of the Container control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# setProperties()

@short: allows changing available configuration properties of the Container control dynamically

@signature: setProperties(propertyConfig: IBaseLayoutItem): void;

@params:
`propertyConfig: object` - an object with the available properties of the control and their new values

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
