---
sidebar_label: Event Handling
title: Event Handling
description: description
---          

## Attaching event listeners

The user can add any user-defined handler to any of the available events. To do this, the user can use the **layout.events.on()** method with the following parameters:

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
layout.events.on("BeforeHide", function(id){
    console.log("The id of a cell", id);
});
~~~

Several handlers can be attached to one and the same event, and all of them will be executed.

{{note 
The names of the events are case-insensitive.
}}

{{editor	https://snippet.dhtmlx.com/fyxw0map	Layout. Events}}

## Detaching event listeners

There is a simple way of removing an event handler via the **layout.events.detach()** method:

~~~js
layout.events.on("BeforeHide", function(id){
    console.log("The id of a cell", id);
});

layout.events.detach("BeforeHide");
~~~

## Calling events

To call events, use **layout.events.fire()**:

~~~js
layout.events.fire("BeforeHide",args);
// where args is an array of arguments
~~~

## List of supported events 

You can find the full list of Layout events in the [API Reference](layout/api/refs/layout_events.md).
