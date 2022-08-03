---
sidebar_label: Configuration
title: JavaScript Message - Configuration 
description: You can explore the configuration of Message in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Configuration

In this article you will find the detailed list of properties that you can use inside the constructors of message boxes and tooltip to adjust their configuration.

## Message box

![](../assets/message/show_message.png)

**Related sample**: [Message. Show Message](https://snippet.dhtmlx.com/rsxdlicg)

You can configure a message box on its initialization:

~~~js
dhx.message({
    text:"Message text", 
    icon:"dxi-clock", 
    css:"expire", 
    expire:1000
});
~~~

**Related sample**: [Message. Message Configuration](https://snippet.dhtmlx.com/qfmd877x)

{{note You will find the list of configuration properties the constructor of the message box may take [in the related article](message/api/api_message_properties.md).}}

## Alert box

![](../assets/message/show_alert.png)

**Related sample**: [Message. Show Alert](https://snippet.dhtmlx.com/m4xka888)

You can define the configuration of an alert box on its initialization:

~~~js
dhx.alert({
    header:"Alert Header",
    text:"Alert text",
    buttonsAlignment:"center"
});
~~~

**Related sample**: [Message. Alert and confirm configuration](https://snippet.dhtmlx.com/dk4a7959)

{{note See the list of configuration properties the constructor of the alert box may take [here](message/api/api_message_properties.md#alert-box).}}

## Confirm box

![](../assets/message/show_confirm.png)

**Related sample**: [Message. Show Confirm](https://snippet.dhtmlx.com/iss7twe6)

You can configure a confirm box on its initialization:

~~~js
dhx.confirm({
    header:"Confirm Header",
    text:"Confirm text",
    buttons:["cancel", "apply"],
    buttonsAlignment:"center"
});
~~~

**Related sample**: [Message. Alert and confirm configuration](https://snippet.dhtmlx.com/dk4a7959)

{{note You can find the list of configuration properties the constructor of the confirm box may take [in the related article](message/api/api_message_properties.md#confirm-box).}}

### Working with confirm

To find out which button was pressed, use the callback function that returns a Promise:

~~~js
dhx.confirm({
	header: "confirm the action",
	text: "can you apply?",
	buttons: ["cancel", "apply"]
}).then(function(answer){
	if (answer){
		console.log("confirmed")
	}
	else {
		console.log("cancelled")
	}
});
~~~

## Tooltip

![](../assets/message/show_tooltip.png)

**Related sample**: [Message. Show Tooltip](https://snippet.dhtmlx.com/c6jm8if6)

You can configure a tooltip on its initialization:

~~~js
dhx.tooltip("Tooltip From Right", {
	node: "fourth", 
    position: "right"
});
~~~

**Related Samples:**

- [Message. Tooltip position](https://snippet.dhtmlx.com/4wrrsr67)
- [Message. Tooltip delay configuration](https://snippet.dhtmlx.com/zts0avym)

{{note See the list of configuration properties the constructor of the tooltip may take [here](message/api/api_message_properties.md#tooltip).}}

### Smart positioning

{{note If the target of the tooltip is placed close to some edge of the browser, the tooltip will be shown from the opposite side of the target.}}

In the image below the target is adjacent to the right side of screen. Its tooltip that has the *position:"right"* attribute in the config object appears from the left side of the target.

![Smart positioning](../assets/message/smart_tooltip.png)

### Tooltip API

You can control the activity of the Tooltip via the pair of methods.

- to switch the tooltip off, use the **disableTooltip()** method:

~~~js
dhx.disableTooltip();
~~~

- to switch the tooltip on again, apply the **enableTooltip()** method:

~~~js
dhx.enableTooltip();
~~~
