---
sidebar_label: Event handling
title: JavaScript Menu - Event Handling 
description: You can explore the event handling of Menu in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

You can add any handler to the events of Menu. To do this, use the **menu.events.on()** method with the following parameters:

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
<br/>

~~~js
menu.events.on("click", function(id,e){
    console.log(id);
});
~~~

Several handlers can be attached to one and the same event, and all of them will be executed.

{{note  The names of the events are case-insensitive. }}

**Related sample**: [Menu. Events](https://snippet.dhtmlx.com/yjt39a4k)

## Detaching event listeners

There is a simple way of removing an event handler with the **menu.events.detach()** method:

~~~js
menu.events.on("click", function(id, e){
    console.log(id);
});

menu.events.detach("click"); 
~~~

## Calling events

A custom event can be called with the **fire()** method of the **events** module:

~~~js
menu.events.fire(evName,[args]);
~~~

## List of supported events

You can find the full list of Menu events in the [API section](menu/api/api_overview.md#menu-events).
