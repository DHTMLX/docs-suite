---
sidebar_label: Custom HTML
title: Custom HTML
---          

This is an item that contains any custom HTML content (for example, an image, icon or other element).

![](../assets/sidebar/htmlcontent.png)

{{editor	https://snippet.dhtmlx.com/26ds0gxp	Sidebar. Custom HTML}}

Adding Custom HTML
-----------------

Any custom HTML content can be easily added to a sidebar with the help of the **add()** method of [Tree Collection](tree_collection/api/refs/treecollection.md):

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

Working with Custom HTML
-----------------------

You can perform operations over the **Custom HTML** item with the help of the available [Sidebar API](sidebar/api/refs/sidebar.md) and [Tree Collection API](tree_collection/api/refs/treecollection.md).
