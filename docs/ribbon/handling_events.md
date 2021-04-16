---
sidebar_label: Event Handling
title: Event Handling
---          



To handle events of Ribbon and its TreeCollection, use the methods of the **events** module.

## Attaching event handlers

You can add any handler to the events of Ribbon and its TreeCollection. To do this, use the **ribbon.events.on()**  method with the following parameters:

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
<br/>

~~~js
ribbon.events.on("Click", function(id,e){
	console.log(id,e);
});
~~~

Several handlers can be attached to one and the same event, and all of them will be executed.

{{note 
The names of the events are case-insensitive.
}}

{{editor	https://snippet.dhtmlx.com/i7cfddkl	Ribbon. Events}}

## Detaching event handlers 

There is a simple way of removing an event-handler. Call the **ribbon.events.detach()** method:

~~~js
ribbon.events.on("Click", function(id,e){
	console.log(id,e);
});

ribbon.events.detach("Click"); 
~~~

## Calling events

You do not need to call events of Ribbon and its TreeCollection. Yet, you can call any custom event with the **fire()** method of the **events** module:

~~~js
ribbon.events.fire(evName,[parameters]);
~~~

## List of supported events 

You can find the full list of Ribbon events in the [related API section](ribbon/api/refs/ribbon_events.md).

