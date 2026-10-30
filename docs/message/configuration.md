---
sidebar_label: Configuration
title: JavaScript Message - Configuration 
description: You can explore the configuration of Message in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Configuration

This article describes how to configure message boxes, alert boxes, confirm boxes, and tooltips.

## Message box

![Notification message box with text and a close icon in DHTMLX Suite](/img/message/show_message.png)

**Related sample**: [Message. Show Message](https://snippet.dhtmlx.com/rsxdlicg)

You can configure a message box when you create it with `dhx.message()`:

~~~js
dhx.message({
    text:"Message text", 
    icon:"dxi-clock", 
    css:"expire", 
    expire:1000
});
~~~

**Related sample**: [Message. Message Configuration](https://snippet.dhtmlx.com/qfmd877x)

{{note See the [full list of configuration properties](message/api/api_message_properties.md) that the message box constructor accepts.}}

### Working with message box

From v8.0, `dhx.message()` returns an object with the [`close()`](message/api/message_close_method.md) method. Call this method to close the message box:

~~~html
<section class="dhx_sample-controls">
    <button id="show" class="dhx_sample-btn dhx_sample-btn--flat" onclick="show()">show</button>
    <button id="close" class="dhx_sample-btn dhx_sample-btn--flat" onclick="close()">close</button>
</section>

<script>
    let message;
    function show() {
        message = dhx.message({ text: "Here is dhtmlxMessage", icon: "dxi-close" });
    }
    document.querySelector("#close").addEventListener("click", () => {
        message?.close()
    });
</script>
~~~

**Related sample:** [Message. Show Message](https://snippet.dhtmlx.com/rsxdlicg)

## Alert box

![Modal alert box with a header, body text, and an OK button in DHTMLX Suite](/img/message/show_alert.png)

**Related sample**: [Message. Show Alert](https://snippet.dhtmlx.com/m4xka888)

You can configure an alert box when you create it with `dhx.alert()`:

~~~js
dhx.alert({
    header:"Alert Header",
    text:"Alert text",
    buttonsAlignment:"center"
});
~~~

**Related sample**: [Message. Alert and confirm configuration](https://snippet.dhtmlx.com/dk4a7959)

{{note See the [full list of configuration properties](message/api/api_message_properties.md#alert-box) that the alert box constructor accepts.}}

## Confirm box

![Modal confirm box with a header, text, and Reject and Apply buttons in DHTMLX Suite](/img/message/show_confirm.png)

**Related sample**: [Message. Show Confirm](https://snippet.dhtmlx.com/iss7twe6)

You can configure a confirm box when you create it with `dhx.confirm()`:

~~~js
dhx.confirm({
    header:"Confirm Header",
    text:"Confirm text",
    buttons:["cancel", "apply"],
    buttonsAlignment:"center"
});
~~~

**Related sample**: [Message. Alert and confirm configuration](https://snippet.dhtmlx.com/dk4a7959)

{{note See the [full list of configuration properties](message/api/api_message_properties.md#confirm-box) that the confirm box constructor accepts.}}

### Working with confirm

`dhx.confirm()` returns a Promise. Pass a callback to its `then()` method to find out which button the user clicked:

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

![Dark tooltip shown when hovering over an element in DHTMLX Suite](/img/message/show_tooltip.png)

**Related sample**: [Message. Show Tooltip](https://snippet.dhtmlx.com/c6jm8if6)

You can configure a tooltip when you create it with `dhx.tooltip()`:

~~~js
dhx.tooltip("Tooltip From Right", {
    node: "fourth", 
    position: "right",
    margin: 8
});
~~~

**Related Samples:**

- [Message. Tooltip position](https://snippet.dhtmlx.com/4wrrsr67)
- [Message. Tooltip configuration](https://snippet.dhtmlx.com/zts0avym)

{{note See the [full list of configuration properties](message/api/api_message_properties.md#tooltip) that the tooltip constructor accepts.}}

### Smart positioning

{{note If the tooltip target is close to an edge of the browser window, the tooltip appears on the opposite side of the target.}}

In the image below, the target is adjacent to the right side of the screen. The tooltip has the `position:"right"` property in its configuration object but appears to the left of the target.

![Tooltip with smart positioning appearing to the left of an edge element in DHTMLX Suite](/img/message/smart_tooltip.png)

### Tooltip API

Use the following methods to switch tooltips off and on:

- To switch tooltips off, call the `disableTooltip()` method:

~~~js
dhx.disableTooltip();
~~~

- To switch tooltips on again, call the `enableTooltip()` method:

~~~js
dhx.enableTooltip();
~~~
