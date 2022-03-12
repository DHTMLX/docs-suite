---
sidebar_label: Event handling
title: JavaScript Ribbon - Event Handling 
description: You can explore the event handling of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Event handling

To handle events of Ribbon and its TreeCollection, use the methods of the **events** module.

## Attaching event handlers

You can add any handler to the events of Ribbon and its TreeCollection. To do this, use the **ribbon.events.on()**  method with the following parameters:

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
ribbon.events.on("click", function(id,e){
	console.log(id,e);
});
~~~

Several handlers can be attached to one and the same event, and all of them will be executed.

{{note 
The names of the events are case-insensitive.
}}

**Related sample**: [Ribbon. Events](https://snippet.dhtmlx.com/i7cfddkl)

## Detaching event handlers

There is a simple way of removing an event-handler. Call the **ribbon.events.detach()** method:

~~~js
ribbon.events.on("click", function(id,e){
	console.log(id,e);
});

ribbon.events.detach("click"); 
~~~

## Calling events

You do not need to call events of Ribbon and its TreeCollection. Yet, you can call any custom event with the **fire()** method of the **events** module:

~~~js
ribbon.events.fire(evName,[parameters]);
~~~

## List of supported events

You can find the full list of Ribbon events in the [related API section](ribbon/api/api_overview.md#ribbon-events).
