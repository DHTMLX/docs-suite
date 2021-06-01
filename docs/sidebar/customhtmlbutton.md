---
sidebar_label: Custom HTML
title: JavaScript Sidebar - Custom HTML Button 
description: You can explore the custom HTML button of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Custom HTML

This is an item that contains any custom HTML content (for example, an image, icon or other element).

![](../assets/sidebar/htmlcontent.png)

**Related sample**: [Sidebar. Custom HTML](https://snippet.dhtmlx.com/26ds0gxp)

## Adding Custom HTML

Any custom HTML content can be easily added to a sidebar with the help of the **add()** method of [Tree Collection](tree_collection/index.md):

~~~js
sidebar.data.add({
	type: "customHTML",
	id: "userInfo",
	css: "user-info_item",
	html: "<div class='user-info_container'>" +
			"<img class='user-info_avatar' src='../common/ava.png'/>" +
			"<div class='user-info_title'>" +
			"Gloria McKinney"+
			"</div>" +
			"<div class='user-info_contact'>" +
			"@gmckinney" +
			"</div>" +
			"</div>"
});
~~~

### Properties

You can provide the [following properties](sidebar/api/api_customhtml_properties.md) in the configuration object of a Custom HTML control.

##  Working with Custom HTML

You can perform operations over the **Custom HTML** item with the help of the available [Sidebar API](sidebar/api/api_overview.md) and [Tree Collection API](tree_collection/index.md).
