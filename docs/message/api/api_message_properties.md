---
sidebar_label: Message properties
title: JavaScript Message - Message Properties 
description: You can explore the Message properties in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Message properties

## Message box

### Usage

~~~js
dhx.message({
	text?: string,
	icon?: string,
	css?: string,
	html?: string,
	node?: HTMLElement | string,
	position?: "top-left" | "top-right" | "bottom-left" | "bottom-right",
	expire?: number,
});
~~~

### Description

The configuration object of a message box may take the following parameters:

<table>
	<tbody>
        <tr>
			<td><b>text</b></td>
			<td>(optional) the text of a message box</td>
		</tr>
        <tr>
			<td><b>icon</b></td>
			<td>(optional) an an <a href="../../../helpers/icon">icon</a> from the used icon font</td>
		</tr>
        <tr>
			<td><b>css</b></td>
			<td>(optional) the style of a message box</td>
		</tr>
        <tr>
			<td><b>html</b></td>
			<td>(optional) the HTML content to be displayed in a message box <br/> 
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/1stqqejp" target="_blank">Message. Message with HTML content</a>
			</td>
		</tr>
        <tr>
			<td><b>node</b></td>
			<td>(optional) the container for a message box or its id</td>
		</tr>
        <tr>
			<td><b>position</b></td>
			<td>(optional) the position of a message box: "top-left" | "top-right" | "bottom-left" | "bottom-right" <br/> 
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/3wxrafmo" target="_blank">Message. Message positioning and container</a>
			</td>
		</tr>
        <tr>
			<td><b>expire</b></td>
			<td>(optional) the time period of displaying a message box before it disappears, in ms</td>
		</tr>
    </tbody>
</table>

### Example

~~~js
dhx.message({
    text:"Message text", 
    icon:"dxi-clock", 
    css:"expire", 
    expire:1000
});
~~~

**Related samples**: 

- [Message. Message Configuration](https://snippet.dhtmlx.com/qfmd877x)
- [Message. Show Message](https://snippet.dhtmlx.com/rsxdlicg)

## Alert box

### Usage

~~~js
dhx.alert({
	text: string,
	header?: string,
	css?: string,
	buttons?: string[],
	buttonsAlignment?: "left" | "center" | "right",
	blockerCss?: string,
	htmlEnable?: boolean,
});
~~~

### Description

The configuration object of an alert box may take the following parameters:

<table>
	<tbody>
        <tr>
			<td><b>text</b></td>
			<td>(required) the text of an alert box</td>
		</tr>
        <tr>
			<td><b>header</b></td>
			<td>(optional) the text of an alert box header</td>
		</tr>
        <tr>
			<td><b>css</b></td>
			<td>(optional) the style of an alert box</td>
		</tr>
        <tr>
			<td><b>buttons</b></td>
			<td>(optional) an array with the name of the alert button. By default, the button's name is "Apply"</td>
		</tr>
        <tr>
			<td><b>buttonsAlignment</b></td>
			<td>(optional) the position of buttons: "left" | "center" | "right"</td>
		</tr>
        <tr>
			<td><b>blockerCss</b></td>
			<td>(optional) the style of blocking the window when an alert box appears</td>
		</tr>
		<tr>
			<td><b>htmlEnable</b></td>
			<td>(optional) enables/disables the HTML content to be displayed in an alert box; <i>true</i> by default <br>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/0id8455k">Message. Disable HTML content</a>
			</td>
		</tr>
    </tbody>
</table>

### Example

~~~js
dhx.alert({
    header:"Alert Header",
    text:"Alert text",
    buttonsAlignment:"center",
	htmlEnable: false
});
~~~

**Related samples**: 

- [Message. Alert and confirm configuration](https://snippet.dhtmlx.com/dk4a7959)
- [Message. Show Alert](https://snippet.dhtmlx.com/m4xka888)

## Confirm box

### Usage

~~~js
dhx.confirm({
	text: string,
	header?: string,
	css?: string,
	buttons?: string[],
	buttonsAlignment?: "left" | "center" | "right",
	blockerCss?: string,
	htmlEnable?: boolean,
});
~~~

### Description

The configuration object of a confirm box may take the following parameters:

<table>
	<tbody>
        <tr>
			<td><b>text</b></td>
			<td>(required) the text of a confirm box</td>
		</tr>
        <tr>
			<td><b>header</b></td>
			<td>(optional) the text of a confirm box header</td>
		</tr>
        <tr>
			<td><b>css</b></td>
			<td>(optional) the style of a confirm box</td>
		</tr>
        <tr>
			<td><b>buttons</b></td>
			<td>(optional) an array with the names of the confirm buttons. By default, the buttons' names are "Reject" and "Apply"</td>
		</tr>
        <tr>
			<td><b>buttonsAlignment</b></td>
			<td>(optional) the position of the button: "left", "center", or "right" (by default)</td>
		</tr>
        <tr>
			<td><b>blockerCss</b></td>
			<td>(optional) the style of blocking the window when a confirm box appears</td>
		</tr>
		<tr>
			<td><b>htmlEnable</b></td>
			<td>(optional) enables/disables the HTML content to be displayed in a confirm box; <i>true</i> by default<br>
			<br><b>Related Sample: </b><a href="https://snippet.dhtmlx.com/0id8455k">Message. Disable HTML content</a>
			</td>
		</tr>
    </tbody>
</table>

### Example

~~~js
dhx.confirm({
    header:"Confirm Header",
    text:"Confirm text",
    buttons:["cancel", "apply"],
    buttonsAlignment:"center",
	htmlEnable: false
});
~~~

**Related samples**: 

- [Message. Show Confirm](https://snippet.dhtmlx.com/iss7twe6)
- [Message. Alert and confirm configuration](https://snippet.dhtmlx.com/dk4a7959)

## Tooltip

### Usage

~~~js
dhx.tooltip({
	node: HTMLElement | string,
	margin?: number,
	position?: "right" | "bottom" |"center" | "left" | "top",
	css?: string,
	force?: boolean,
	showDelay?: number,
	hideDelay?: number,
	htmlEnable?: boolean,
});
~~~

### Description

The configuration object of a tooltip may take the following parameters:

<table>
	<tbody>
        <tr>
			<td><b>node</b></td>
			<td>(required) the target of tooltip or its id</td>
		</tr>
		<tr>
			<td><b>margin</b></td>
			<td>(optional) margin between the node and tooltip</td>
		</tr>
        <tr>
			<td><b>position</b></td>
			<td>(optional) the position of a tooltip: "right", "bottom", "center", "left", "top"</td>
		</tr>
        <tr>
			<td><b>css</b></td>
			<td>(optional) the style of a tooltip box</td>
		</tr>
        <tr>
			<td><b>force</b></td>
			<td>(optional) forces opening of a tooltip; if set to true, the <b>showDelay</b> and <b>hideDelay</b> settings are ignored</td>
		</tr>
        <tr>
			<td><b>showDelay</b></td>
			<td>(optional) the time period that should pass before showing a tooltip, in ms</td>
		</tr>
        <tr>
			<td><b>hideDelay</b></td>
			<td>(optional) the time period that should pass before hiding a tooltip, in ms</td>
		</tr>
		<tr>
			<td><b>htmlEnable</b></td>
			<td>(optional) enables/disables the HTML content to be displayed in a tooltip; <i>false</i> by default</td>
		</tr>
    </tbody>
</table>

### Example

~~~js
dhx.tooltip("Tooltip From Right", {
	node: "fourth", 
    position: "right",
    margin: 2,
	htmlEnable: true
});
~~~

**Related Samples:**

- [Message. Tooltip position](https://snippet.dhtmlx.com/4wrrsr67)
- [Message. Tooltip configuration](https://snippet.dhtmlx.com/zts0avym)

**Change log:**

- The `margin` property of [Tooltip](#tooltip) was added in v8.0
- The `position` property of [Tooltip](#tooltip) was extended by the "left" and "top" values in v8.0