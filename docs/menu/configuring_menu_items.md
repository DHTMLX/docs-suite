---
sidebar_label: List of Menu controls
title: JavaScript Menu - List of Menu Controls 
description: You can explore the list of Menu controls of Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# List of Menu controls

In this article you'll find the controls you can use in DHTMLX Menu. Their descriptions contain lists of attributes and examples of adding the controls into Menu on the fly.

To operate Menu controls, you can use Menu API and [Tree Collection API](tree_collection.md). Check the [related article](menu/work_with_menu.md).

## MenuItem

MenuItem is a drop-down list of options.

![Menu Item](../assets/menu/menu_item.png)

### Adding menuItem

You can add a MenuItem control into the menu with the help of the **add()** method of Tree Collection:

~~~js
menu.data.add({
	type:"menuItem", value:"Menu", items:[
		{ type:"menuItem", value:"Option 1" },
		{ type:"menuItem", value:"Option 2" },
		{ type:"separator"},
		{ type:"menuItem", value:"Option Infinite" }
	]
});
~~~

**Related sample**: [Menu. Menu Item](https://snippet.dhtmlx.com/qkxeer2h)

#### Properties

See [the full list of properties](menu/api/api_menuitem_properties.md) that you can provide in the configuration object of a MenuItem control.

## Custom HTML

This is an item that contains any custom HTML content (for example, an image, icon or other element).

![](../assets/menu/htmlcontent.png)

### Adding Custom HTML

Any custom HTML content can be easily added to a menu with the help of the **add()** method of [Tree Collection](tree_collection.md):

~~~js
menu.data.add({
    id: "input",
	parent: "edit",
    type: "customHTML",
	html: "<img src='../logo.svg' alt=''/>",
	css: "custom-image"
});
~~~

**Related sample**: [Menu. Custom HTML](https://snippet.dhtmlx.com/nk65jfmx)

#### Properties

See [the full list of properties](menu/api/api_customhtml_properties.md) that you can provide in the configuration object of a Custom HTML control.

## Separator

This is a horizontal (between menu options) or vertical (between menu items) line separating items/groups of items from each other.

![](../assets/menu/separator.png)

### Adding Separator

A new Separator can be created with the help of the **add()** method of Tree Collection:

~~~js
menu.data.add({
	type:"separator"
});
~~~

**Related sample**: [Menu. Separator](https://snippet.dhtmlx.com/71tybx5j)

#### Properties

See [the full list of properties](menu/api/api_separator_properties.md) that you can provide in the configuration object of a Separator control.

## Spacer

This item takes space on the toolbar and is used for aligning controls.

![DHX Toolbar spacer](../assets/menu/spacer.png)

### Adding Spacer

A new Spacer can be created with the help of the **add()** method of Tree Collection:

~~~js
menu.data.add({
	type:"spacer"
});
~~~

**Related sample**: [Menu. Spacer](https://snippet.dhtmlx.com/fjaolual)

#### Properties

See [the full list of properties](menu/api/api_spacer_properties.md) that you can provide in the configuration object of a Spacer control.
