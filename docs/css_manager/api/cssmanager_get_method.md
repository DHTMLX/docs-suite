---
sidebar_label: get
title: get
---          

@short: returns a list of styles by the class name

@signature: {'get(className: string): ICssList;'}

@params:
- className      string     the name of the class


@returns:

- params      object     an object with a list of the class styles

@example:
const StyleList =  dhx.cssManager.get("myCustomClass");
// -> { color: "black", width: "200px" }

@template:	api_method

@descr:




