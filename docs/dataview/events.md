---
sidebar_label: Event handling
title: JavaScript DataView - Event Handling 
description: You can explore the event handling of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Event handling

## Attaching event listeners

The user can add any user-defined handler to any of the available events. To do this, the user can use the **dataview.events.on()** method with the following parameters:

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
dataview.events.on("click", function(id, e){
   console.log("The item with the id "+ dataview.selection.getId(id) +" was clicked.");
});
~~~

Several handlers can be attached to one and the same event, and all of them will be executed.

{{note 
The names of the events are case-insensitive.
}}

**Related sample**: [Dataview. Dataview Events](https://snippet.dhtmlx.com/2d74uyoh)

## Detaching event listeners

There is a simple way of removing an event handler via the **dataview.events.detach()** method:

~~~js
dataview.events.on("click", function(id, e){
   console.log("The item with the id "+ dataview.selection.getId(id) +" was clicked.");
});

dataview.events.detach("click");
~~~

## Calling events

To call events, use **dataview.events.fire()**:

~~~js
dataview.events.fire("name",args);
// where args is an array of arguments
~~~

## List of supported events

You can find the full list of Dataview events in the [API Reference](dataview/api/api_overview.md#events).
