---
sidebar_label: Event Handling
title: Event Handling
---          



## Attaching event listeners

You can add any handler to the events of Toolbar. To do this, use the **toolbar.events.on()** method with the following parameters:

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
toolbar.events.on("Click", function(id,e){
    console.log(id);
});
~~~

Several handlers can be attached to one and the same event, and all of them will be executed.

{{note  The names of the events are case-insensitive. }}

{{editor	https://snippet.dhtmlx.com/xvak1p5y	Toolbar. Events}}

## Detaching event listeners 

There is a simple way of removing an event handler with the **toolbar.events.detach()** method:

~~~js
toolbar.events.on("Click", function(id,e){
    console.log(id);
});

toolbar.events.detach("Click"); 
~~~

## Calling events

A custom event can be called with the **fire()** method of the **events** module:

~~~js
toolbar.events.fire(evName,[args]);
~~~

## List of supported events 

You can find the full list of toolbar events in the [API section](toolbar/api/refs/toolbar_events.md).

