---
sidebar_label: Event handling
title: JavaScript Form - Event Handling 
description: You can explore the event handling of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

You can add any handler to the events of Form. To do this, use the **form.events.on()** method with the following parameters:

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
form.events.on("click", function(name,e){
    console.log(id);
});
~~~

Several handlers can be attached to one and the same event, and all of them will be executed.

**Related sample**: [Form. Events](https://snippet.dhtmlx.com/vyipsaoa)

{{note  The names of the events are case-insensitive. }}

## Detaching event listeners

There is a simple way of removing an event handler with the **form.events.detach()** method:

~~~js
form.events.on("click", function(name,e){
    console.log(id);
});

form.events.detach("click"); 
~~~

## Calling events

A custom event can be called with the **fire()** method of the **events** module:

~~~js
form.events.fire(evName,[args]);
~~~

## List of supported events

You can find the full list of Form events in the [API section](form/api/api_overview.md#events).
