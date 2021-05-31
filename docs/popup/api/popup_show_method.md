---
sidebar_label: show()
title: JavaScript Popup - show Method 
hide_title: true
description: You can explore the show method of Popup in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# show()

@short: shows a Popup

@signature: {'show(node: HTMLElement, config?: IShowConfig): void;'}

@params:
- `node: HTMLElement` - mandatory, the container to place a popup in
- `config: object` - optional, the configuration object of a popup

@example:
<div id="popup_container"></div>

var popup = new dhx.Popup();

popup.show("popup_container");

@descr:

**Related samples**:
- [Popup. Auto Positioning](https://snippet.dhtmlx.com/bz1ekc71)
- [Popup. Show position](https://snippet.dhtmlx.com/bu4uj2ik)

The **config** object can contain the properties below:

<table>
	<tbody>
        <tr>
			<td><b>centering</b></td>
			<td>(<i>boolean</i>) defines whether a popup should be centered relative to the element, <i>true</i> by default</td>
		</tr>
        <tr>
			<td><b>auto</b></td>
			<td>(<i>boolean</i>) enables autopositioning of a popup, i.e. it will be shown at that side of an element which provides enough space for a popup</td>
		</tr>
        <tr>
			<td><b>mode</b></td>
			<td>(<i>string</i>) the position relative to the element to show a popup at: "left", "right", "bottom" (default), "top"</td>
		</tr>
        <tr>
			<td><b>indent</b></td>
			<td>(<i>number</i>) the offset of a popup relative to the element</td>
		</tr>
    </tbody>
</table>

@changelog:
The **indent** property of the **config** parameter is added in v6.1.

[comment]: # (@related:popup/work_with_popup.md#hidingshowing-popup)

[comment]: # (@relatedapi: popup/api/popup_hide_method.md)
