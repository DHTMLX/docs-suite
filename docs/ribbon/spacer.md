---
sidebar_label: Spacer
title: JavaScript Ribbon - Spacer 
description: You can explore the Spacer of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Spacer

The Spacer control adds empty space on the ribbon and helps you align controls.

![Ribbon with a spacer adding empty space between button groups in DHTMLX Suite](/img/ribbon/spacer.png)

## Add Spacer {#adding-spacer}

Use the `add()` method of TreeCollection to add a Spacer control to a ribbon:

~~~js
ribbon.data.add({
    type:"spacer"
});
~~~

**Related sample**: [Ribbon. Spacer](https://snippet.dhtmlx.com/a8c6y3ob)

### Properties

Check the [list of properties](ribbon/api/api_spacer_properties.md) that you can set in the configuration object of a Spacer control.

## Show and hide Spacer {#showinghiding-spacer}

The `show()` and `hide()` methods of Ribbon show and hide a Spacer control by its ID:

~~~js
ribbon.show(id);
ribbon.hide(id);
~~~
