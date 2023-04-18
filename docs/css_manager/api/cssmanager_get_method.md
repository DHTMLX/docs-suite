---
sidebar_label: get()
title: JavaScript CSS Manager - get Method 
description: You can explore the get method of CSS Manager in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# get()

@short: returns a list of styles by the class name

@signature: {'get(className: string): object;'}

@params:
- `className: string` - the name of the class

@returns:
An object with a list of the class styles.

@example:
const StyleList =  dhx.cssManager.get("myCustomClass");
// -> { color: "black", width: "200px" }

@descr:
