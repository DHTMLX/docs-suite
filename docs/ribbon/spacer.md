---
sidebar_label: Spacer
title: JavaScript Ribbon - Spacer 
description: You can explore the Spacer of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Spacer

This item takes space on the ribbon and is used for aligning controls.

![DHX Ribbon spacer](../assets/ribbon/spacer.png)

## Adding Spacer

A new Spacer can be created with the help of the **add()** method of Tree Collection:

~~~js
ribbon.data.add({
	type:"spacer"
});
~~~

**Related sample**: [Ribbon. Spacer](https://snippet.dhtmlx.com/a8c6y3ob)

### Properties

You can provide the [following properties](ribbon/api/api_spacer_properties.md) in the configuration object of a Spacer control.

## Showing/hiding spacer

You can hide and show Spacer with the methods of ribbon:

~~~js
ribbon.show(id);
ribbon.hide(id);
~~~
