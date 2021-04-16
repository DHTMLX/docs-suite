---
sidebar_label: Event Handling
title: Event Handling
description: description
---          

## Attaching event listeners

The user can add any user-defined handler to any of the available events. To do this, the user can use the **list.events.on()** method with the following parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>evName</b></td>
			<td>name of the event</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>evHandler</b></td>
			<td>user-defined event handler</td>
		</tr>
    </tbody>
</table>

~~~js
list.events.on("Click", function(id, e){
    console.log("The item with the id "+ list.selection.getId(id) +" was clicked.");
});
~~~

Several handlers can be attached to one and the same event, and all of them will be executed.

{{note 
The names of the events are case-insensitive.
}}

{{editor	https://snippet.dhtmlx.com/iwt1yd61	List. List Events}}

## Detaching event listeners

There is a simple way of removing an event handler via the **list.events.detach()** method:

~~~js
list.events.on("Click", function(id, e){
    console.log("The item with the id "+ list.selection.getId(id) +" was clicked.");
});

list.events.detach("Click");
~~~

## Calling events

To call events, use **list.events.fire()**:

~~~js
list.events.fire("name",args);
// where args is an array of arguments
~~~

## List of supported events 

You can find the full list of List events in the [API Reference](list/api/refs/list_events.md).
