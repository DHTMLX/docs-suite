---
sidebar_label: Separator
title: JavaScript Ribbon - Separator 
description: You can explore the Separator of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Separator

This is a control that adds a line separating items/groups of items from each other.

![DHX Ribbon with separators](../assets/ribbon/separator.png)

## Adding Separator

A separator can be added between menu options:

~~~js
ribbon.data.add({
    type:"separator"
});
~~~

**Related sample**: [Ribbon. Separator](https://snippet.dhtmlx.com/wqhahyw8)

### Properties

You can provide the [following properties](ribbon/api/api_separator_properties.md) in the configuration object of a Separator control.

## Showing/hiding Separator

You can hide and show Separator with the methods of Ribbon:

~~~js
ribbon.showItem(id);
ribbon.hideItem(id);
~~~
