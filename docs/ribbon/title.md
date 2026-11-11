---
sidebar_label: Title
title: JavaScript Ribbon - Title 
description: You can explore the Title of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Title

The Title control displays text on a ribbon.

## Add Title {#adding-title-control}

Use the `add()` method of TreeCollection to add a Title control to a ribbon:

~~~js
ribbon.data.add({
    type: "title",
    value: "APP NAME"
});
~~~

### Properties

Check the [list of properties](ribbon/api/api_title_properties.md) that you can set in the configuration object of a Title control.

## Show and hide Title {#showinghiding-title}

The `show()` and `hide()` methods of Ribbon show and hide a Title control by its ID:

~~~js
ribbon.show(id);
ribbon.hide(id);
~~~
