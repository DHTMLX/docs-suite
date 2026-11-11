---
sidebar_label: Event handling
title: JavaScript Sidebar - Event Handling 
description: You can explore the event handling of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

You can add a custom handler to any event of Sidebar with the `sidebar.events.on()` method. The method takes the following parameters:

<table>
    <tbody>
        <tr>
            <td><code>evName</code></td>
            <td>the event name</td>
        </tr>
        <tr>
            <td><code>evHandler</code></td>
            <td>a custom event handler</td>
        </tr>
    </tbody>
</table>
<br/>

~~~js
sidebar.events.on("click", function(id,e){
    console.log(id);
});
~~~

You can attach several handlers to the same event, and Sidebar runs all of them.

{{note Event names are case-insensitive.}}

**Related sample**: [Sidebar. Events](https://snippet.dhtmlx.com/qfddiu3i)

## Detaching event listeners

The `sidebar.events.detach()` method removes an event handler:

~~~js
sidebar.events.on("click", function(id,e){
    console.log(id);
});

sidebar.events.detach("click"); 
~~~

## Calling events

The `fire()` method of the `events` module calls a custom event:

~~~js
sidebar.events.fire(evName,[args]);
~~~

## List of supported events

You can find the full list of Sidebar events in the [API section](sidebar/api/api_overview.md#sidebar-events).
