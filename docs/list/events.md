---
sidebar_label: Event handling
title: JavaScript List - Event Handling 
description: You can explore the event handling of List in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

The user can add any user-defined handler to any of the available events. To do this, the user can use the **list.events.on()** method with the following parameters:

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
list.events.on("click", function(id, e){
    console.log("The item with the id "+ list.selection.getId(id) +" was clicked.");
});
~~~

Several handlers can be attached to one and the same event, and all of them will be executed.

{{note 
The names of the events are case-insensitive.
}}

**Related sample**: [List. Events](https://snippet.dhtmlx.com/iwt1yd61)

## Detaching event listeners

There is a simple way of removing an event handler via the **list.events.detach()** method:

~~~js
list.events.on("click", function(id, e){
    console.log("The item with the id "+ list.selection.getId(id) +" was clicked.");
});

list.events.detach("click");
~~~

## Calling events

To call events, use **list.events.fire()**:

~~~js
list.events.fire("name",args);
// where args is an array of arguments
~~~

## List of supported events

You can find the full list of List events in the [API Reference](list/api/api_overview.md#events).
