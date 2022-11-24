---
sidebar_label: Message properties
title: JavaScript Message - Message Properties 
description: You can explore the Message properties in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Message properties

## Message box

The configuration object of a message box may take the following parameters:

<table>
	<tbody>
        <tr>
			<td><b>text</b></td>
			<td>(<i>string</i>) required, the text of a message box</td>
		</tr>
        <tr>
			<td><b>icon</b></td>
			<td>(<i>string</i>) optional, an an <a href="../../../helpers/icon">icon</a> from the used icon font</td>
		</tr>
        <tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) optional, the style of a message box</td>
		</tr>
        <tr>
			<td><b>html</b></td>
			<td>(<i>string</i>) optional, the HTML content to be displayed in a message box <br/> 
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/1stqqejp" target="_blank">Message. Message with HTML content</a>
			</td>
		</tr>
        <tr>
			<td><b>node</b></td>
			<td>(<i>HTMLELement | string</i>) optional, the container for a message box or its id</td>
		</tr>
        <tr>
			<td><b>position</b></td>
			<td>(<i>string</i>) optional, the position of a message box: "top-left" | "top-right" | "bottom-left" | "bottom-right" <br/> 
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/3wxrafmo" target="_blank">Message. Message positioning and container</a>
			</td>
		</tr>
        <tr>
			<td><b>expire</b></td>
			<td>(<i>number</i>) optional, the time period of displaying a message box before it disappears, in ms</td>
		</tr>
    </tbody>
</table>

~~~js
dhx.message({
    text:"Message text", 
    icon:"dxi-clock", 
    css:"expire", 
    expire:1000
});
~~~

## Alert box

The configuration object of an alert box may take the following parameters:

<table>
	<tbody>
        <tr>
			<td><b>text</b></td>
			<td>(<i>string</i>) required, the text of an alert box</td>
		</tr>
        <tr>
			<td><b>header</b></td>
			<td>(<i>string</i>) optional, the text of an alert box header</td>
		</tr>
        <tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) optional, the style of an alert box</td>
		</tr>
        <tr>
			<td><b>buttons</b></td>
			<td>(<i>array</i>) optional, an array with the name of the alert button. By default, the button's name is "Apply"</td>
		</tr>
        <tr>
			<td><b>buttonsAlignment</b></td>
			<td>(<i>string</i>) optional, the position of buttons: "left" | "center" | "right"</td>
		</tr>
        <tr>
			<td><b>blockerCss</b></td>
			<td>(<i>string</i>) optional, the style of blocking the window when an alert box appears</td>
		</tr>
		<tr>
			<td><b>htmlEnable</b></td>
			<td>(<i>boolean</i>) optional, enables/disables the HTML content to be displayed in an alert box; <i>true</i> by default <br>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/0id8455k">Message. Disable HTML content</a>
			</td>
		</tr>
    </tbody>
</table>

~~~js
dhx.alert({
    header:"Alert Header",
    text:"Alert text",
    buttonsAlignment:"center",
	htmlEnable: false
});
~~~

## Confirm box

The configuration object of a confirm box may take the following parameters:

<table>
	<tbody>
        <tr>
			<td><b>text</b></td>
			<td>(<i>string</i>) required, the text of a confirm box</td>
		</tr>
        <tr>
			<td><b>header</b></td>
			<td>(<i>string</i>) optional, the text of a confirm box header</td>
		</tr>
        <tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) optional, the style of a confirm box</td>
		</tr>
        <tr>
			<td><b>buttons</b></td>
			<td>(<i>array</i>) optional, an array with the names of the confirm buttons. By default, the buttons' names are "Reject" and "Apply"</td>
		</tr>
        <tr>
			<td><b>buttonsAlignment</b></td>
			<td>(<i>string</i>) optional, the position of the button: "left", "center", or "right" (by default)</td>
		</tr>
        <tr>
			<td><b>blockerCss</b></td>
			<td>(<i>string</i>) optional, the style of blocking the window when a confirm box appears</td>
		</tr>
		<tr>
			<td><b>htmlEnable</b></td>
			<td>(<i>boolean</i>) optional, enables/disables the HTML content to be displayed in a confirm box; <i>true</i> by default<br>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/0id8455k">Message. Disable HTML content</a>
			</td>
		</tr>
    </tbody>
</table>

~~~js
dhx.confirm({
    header:"Confirm Header",
    text:"Confirm text",
    buttons:["cancel", "apply"],
    buttonsAlignment:"center",
	htmlEnable: false
});
~~~

## Tooltip

The configuration object of a tooltip may take the following parameters:

<table>
	<tbody>
        <tr>
			<td><b>node</b></td>
			<td>(<i>HTMLELement | string</i>) required, the target of tooltip or its id</td>
		</tr>
        <tr>
			<td><b>position</b></td>
			<td>(<i>string</i>) optional, the position of a tooltip: "right", "bottom", "center"</td>
		</tr>
        <tr>
			<td><b>css</b></td>
			<td>(<i>string</i>) optional, the style of a tooltip box</td>
		</tr>
        <tr>
			<td><b>force</b></td>
			<td>(<i>boolean</i>) optional, forces opening of a tooltip</td>
		</tr>
        <tr>
			<td><b>showDelay</b></td>
			<td>(<i>number</i>) optional, the time period that should pass before showing a tooltip, in ms</td>
		</tr>
        <tr>
			<td><b>hideDelay</b></td>
			<td>(<i>number</i>) optional, the time period that should pass before hiding a tooltip, in ms</td>
		</tr>
		<tr>
			<td><b>htmlEnable</b></td>
			<td>(<i>boolean</i>) optional, enables/disables the HTML content to be displayed in a tooltip; <i>false</i> by default</td>
		</tr>
    </tbody>
</table>

~~~js
dhx.tooltip("Tooltip From Right", {
	node: "fourth", 
    position: "right",
	htmlEnable: true
});
~~~
