---
sidebar_label: show()
title: JavaScript Popup - show Method 
description: You can explore the show method of Popup in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# show()

@short: shows a Popup

@signature: {'show(node: HTMLElement, config?: object): void;'}

@params:
- `node: HTMLElement` - mandatory, the container to place a popup in
- `config: object` - optional, the configuration object of a popup. It can contain the properties below:
	- `centering: boolean` - defines whether a popup should be centered relative to the element, <i>true</i> by default
	- `auto: boolean` - enables autopositioning of a popup, i.e. it will be shown at that side of an element which provides enough space for a popup
	- `mode: string` - the position relative to the element to show a popup at: "left", "right", "bottom" (default), "top"
	- `indent: number` - the offset of a popup relative to the element

@example:
<div id="popup_container"></div>

const popup = new dhx.Popup();

popup.show("popup_container");

@descr:

**Related samples**:
- [Popup. Auto positioning](https://snippet.dhtmlx.com/bz1ekc71)
- [Popup. Show position](https://snippet.dhtmlx.com/bu4uj2ik)

@changelog:
The **indent** property of the **config** parameter is added in v6.1.

[comment]: # (@related:popup/work_with_popup.md#hidingshowing-popup)

[comment]: # (@relatedapi: popup/api/popup_hide_method.md)
