---
sidebar_label: Event Handling
title: Event Handling
description: description
---          

## Attaching event listeners

You can add any handler to the events of Form. To do this, use the **form.events.on()** method with the following parameters:

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
form.events.on("Click", function(name,e){
    console.log(id);
});
~~~

Several handlers can be attached to one and the same event, and all of them will be executed.

{{editor	https://snippet.dhtmlx.com/vyipsaoa	Form. Events}}

{{note  The names of the events are case-insensitive. }}

## Detaching event listeners 

There is a simple way of removing an event handler with the **form.events.detach()** method:

~~~js
form.events.on("Click", function(name,e){
    console.log(id);
});

form.events.detach("Click"); 
~~~

## Calling events

A custom event can be called with the **fire()** method of the **events** module:

~~~js
form.events.fire(evName,[args]);
~~~

## List of supported events 

You can find the full list of Form events in the [API section](form/api/refs/form_events.md).
