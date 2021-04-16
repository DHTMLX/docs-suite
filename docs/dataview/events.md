---
sidebar_label: Event Handling
title: Event Handling
---          

## Attaching event listeners

The user can add any user-defined handler to any of the available events. To do this, the user can use the **dataview.events.on()** method with the following parameters:

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
dataview.events.on("Click", function(id, e){
   console.log("The item with the id "+ dataview.selection.getId(id) +" was clicked.");
});
~~~

Several handlers can be attached to one and the same event, and all of them will be executed.

{{note 
The names of the events are case-insensitive.
}}

{{editor    https://snippet.dhtmlx.com/2d74uyoh	Dataview. Dataview Events}}

## Detaching event listeners

There is a simple way of removing an event handler via the **dataview.events.detach()** method:

~~~js
dataview.events.on("Click", function(id, e){
   console.log("The item with the id "+ dataview.selection.getId(id) +" was clicked.");
});

dataview.events.detach("Click");
~~~

## Calling events

To call events, use **dataview.events.fire()**:

~~~js
dataview.events.fire("name",args);
// where args is an array of arguments
~~~


## List of supported events 

You can find the full list of Dataview events in the [API Reference](dataview/api/refs/dataview_events.md).
