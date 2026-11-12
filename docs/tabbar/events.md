---
sidebar_label: Event handling
title: JavaScript Tabbar - Event Handling 
description: You can explore the event handling of Tabbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

You can add a custom handler to any event of Tabbar with the `tabbar.events.on()` method. The method takes the following parameters:

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
tabbar.events.on("afterClose", function(id){
    console.log(id);
});
~~~

You can attach several handlers to the same event, and Tabbar runs all of them.

{{note Event names are case-insensitive.}}

**Related sample**: [Tabbar. Events](https://snippet.dhtmlx.com/dld2qo1m)

## Detaching event listeners

The `tabbar.events.detach()` method removes an event handler:

~~~js
tabbar.events.on("afterClose", function(id){
    console.log(id);
});

tabbar.events.detach("afterClose"); 
~~~

## Calling events

The `fire()` method of the `events` module calls a custom event:

~~~js
tabbar.events.fire(evName,[args]);
~~~

## List of supported events

You can find the full list of Tabbar events in the [API section](tabbar/api/api_overview.md#events).
