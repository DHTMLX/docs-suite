---
sidebar_label: Event handling
title: JavaScript Ribbon - Event Handling 
description: You can explore the event handling of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

Use the methods of the `events` module to handle Ribbon and TreeCollection events.

## Attaching event handlers

You can add a custom handler to any event of Ribbon and its TreeCollection with the `ribbon.events.on()` method. The method takes the following parameters:

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
ribbon.events.on("click", function(id,e){
    console.log(id,e);
});
~~~

You can attach several handlers to the same event, and Ribbon runs all of them.

{{note 
Event names are case-insensitive.
}}

**Related sample**: [Ribbon. Events](https://snippet.dhtmlx.com/i7cfddkl)

## Detaching event handlers

The `ribbon.events.detach()` method removes an event handler:

~~~js
ribbon.events.on("click", function(id,e){
    console.log(id,e);
});

ribbon.events.detach("click"); 
~~~

## Calling events

Ribbon and its TreeCollection fire their events automatically. To call a custom event, use the `fire()` method of the `events` module:

~~~js
ribbon.events.fire(evName,[parameters]);
~~~

## List of supported events

You can find the full list of Ribbon events in the [related API section](ribbon/api/api_overview.md#ribbon-events).
