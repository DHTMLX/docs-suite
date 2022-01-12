---
sidebar_label: Event handling
title: JavaScript Layout - Event Handling 
description: You can explore the event handling of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Event handling

## Attaching event listeners

The user can add any user-defined handler to any of the available events. To do this, the user can use the **layout.events.on()** method with the following parameters:

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
layout.events.on("beforeHide", function(id){
    console.log("The id of a cell", id);
});
~~~

Several handlers can be attached to one and the same event, and all of them will be executed.

{{note 
The names of the events are case-insensitive.
}}

**Related sample**: [Layout. Events](https://snippet.dhtmlx.com/fyxw0map)

## Detaching event listeners

There is a simple way of removing an event handler via the **layout.events.detach()** method:

~~~js
layout.events.on("beforeHide", function(id){
    console.log("The id of a cell", id);
});

layout.events.detach("beforeHide");
~~~

## Calling events

To call events, use **layout.events.fire()**:

~~~js
layout.events.fire("beforeHide",args);
// where args is an array of arguments
~~~

## List of supported events

You can find the full list of Layout events in the [API Reference](layout/api/api_overview.md#layout-events).
