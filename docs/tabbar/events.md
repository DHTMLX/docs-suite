---
sidebar_label: Event Handling
title: Event Handling
---          

## Attaching event listeners

You can add any handler to the events of Tabbar. To do this, use the **tabbar.events.on()** method with the following parameters:

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
tabbar.events.on("AfterClose", function(id){
    console.log(id);
});
~~~

Several handlers can be attached to one and the same event, and all of them will be executed.

{{note  The names of the events are case-insensitive. }}

{{editor	https://snippet.dhtmlx.com/dld2qo1m	Tabbar. Events}}

## Detaching event listeners 

There is a simple way of removing an event handler with the **tabbar.events.detach()** method:

~~~js
tabbar.events.on("AfterClose", function(id){
    console.log(id);
});

tabbar.events.detach("AfterClose"); 
~~~

## Calling events

A custom event can be called with the **fire()** method of the **events** module:

~~~js
tabbar.events.fire(evName,[args]);
~~~

## List of supported events 

You can find the full list of Tabbar events in the [API section](tabbar/api/refs/tabbar_events.md).


