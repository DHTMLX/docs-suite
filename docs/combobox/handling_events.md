---
sidebar_label: Event Handling
title: Event Handling
---          

## Attaching event listeners

The user can add any user-defined handler to any of the available events. To do this, the user can use the **combo.events.on()** method with the following parameters:

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
combo.events.on("Open", function() {
	// your logic here
});
~~~

Several handlers can be attached to one and the same event, and all of them will be executed.

{{note 
The names of the events are case-insensitive.
}}

{{editor    https://snippet.dhtmlx.com/n70eqx5l	Combobox. Events}}

## Detaching event listeners

There is a simple way of removing an event handler via the **combo.events.detach()** method:

~~~js
combo.events.on("Open", function() {
    // your logic here
});

combo.events.detach("Open");
~~~

## Calling events

To call events, use **combo.events.fire()**:

~~~js
combo.events.fire("name",args);
// where args is an array of arguments
~~~


## List of supported events 

You can find the full list of ComboBox events in the [API Reference](combo/api/refs/combobox_events.md).

