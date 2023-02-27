---
sidebar_label: Event handling
title: JavaScript Combo Box - Event Handling 
description: You can explore the event handling of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

The user can add any user-defined handler to any of the available events. To do this, the user can use the **combo.events.on()** method with the following parameters:

<table>
	<tbody>
        <tr>
			<td><b>evName</b></td>
			<td>name of the event</td>
		</tr>
		<tr>
			<td><b>evHandler</b></td>
			<td>user-defined event handler</td>
		</tr>
    </tbody>
</table>

~~~js
combo.events.on("open", function() {
	// your logic here
});
~~~

Several handlers can be attached to one and the same event, and all of them will be executed.

{{note 
The names of the events are case-insensitive.
}}

**Related sample**: [Combobox. Events](https://snippet.dhtmlx.com/n70eqx5l)

## Detaching event listeners

There is a simple way of removing an event handler via the **combo.events.detach()** method:

~~~js
combo.events.on("open", function() {
    // your logic here
});

combo.events.detach("open");
~~~

## Calling events

To call events, use **combo.events.fire()**:

~~~js
combo.events.fire("name",args);
// where args is an array of arguments
~~~

## List of supported events

You can find the full list of ComboBox events in the [API Reference](combobox/api/api_overview.md#events).
