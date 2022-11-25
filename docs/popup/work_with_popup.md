---
sidebar_label: Work with Popup
title: JavaScript Popup - Work with Popup 
description: You can explore how to work with Popup in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

#  Work with Popup

## Hiding/showing Popup

You can hide and show a popup using the [hide()](popup/api/popup_hide_method.md) and [show()](popup/api/popup_show_method.md) methods. The **show()** method takes the following parameters:

<table>
	<tbody>
        <tr>
			<td><b>element</b></td>
			<td>(<i>HTMLElement</i>) mandatory, the container to place a popup in</td>
		</tr>
        <tr>
			<td><b>config</b></td>
			<td>(<i>object</i>) optional, the configuration object of a popup. Can contain the properties below:
            <ul>
                <li><b>centering</b> - (<i>boolean</i>) defines whether a popup should be centered relative to the element, <i>true</i> by default</li>
                <li><b>auto</b> - (<i>boolean</i>) enables auto-positioning of a popup, i.e. it will be shown at that side of an element which provides enough space for a popup</li>
                <li><b>mode</b> - (<i>string</i>) the position relative to the element to show a popup at:"left","right","bottom" (default),"top"</li>
                <li><b>indent</b> - (<i>number</i>) the offset of a popup relative to the element</li>
            </ul></td>
		</tr>
    </tbody>
</table> 

This method should be called each time you need to render a popup on a page.

~~~js
popup.show("popup_container");
~~~

This is how you can hide a popup:

~~~js
popup.hide();
~~~

**Related sample**: [Popup. Show/Hide](https://snippet.dhtmlx.com/aqzy536h)

## Checking visibility of Popup

You can easily check whether a popup is visible with the help of the [isVisible()](popup/api/popup_isvisible_method.md) method. It returns *true*, if a popup is visible.

~~~js
popup.isVisible(); // -> true/false
~~~

**Related sample**: [Popup. Is visible](https://snippet.dhtmlx.com/f614sdm3)

## Attaching content

You can easily attach some HTML content to a popup via the [attachHTML()](popup/api/popup_attachhtml_method.md) method. It takes as a parameter a string with HTML.

~~~js
const popup = new dhx.Popup();
popup.attachHTML("<h1>Hello, I'm popup</h1>");
popup.show("popup");
~~~

**Related sample**: [Popup. HTML content](https://snippet.dhtmlx.com/ajv5qqxq)

## Attaching DHTMLX components

dhtmlxPopup allows attaching other components of the library using the [attach()](popup/api/popup_attach_method.md) method. It takes two parameters:

<table>
	<tbody>
        <tr>
			<td><b>name</b></td>
			<td>(<i>string</i>) the name of a component</td>
		</tr>
        <tr>
			<td><b>config</b></td>
			<td>(<i>object</i>) optional, the configuration settings of a component</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
popup.attach("Timepicker"); 

popup.show();
~~~

**Related sample**: [Popup. Attach Timepicker](https://snippet.dhtmlx.com/7x6hlbqx)
