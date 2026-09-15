---
sidebar_label: Event handling
title: JavaScript Form - Event Handling 
description: You can explore the event handling of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

You can add a custom handler to any Form event with the `form.events.on()` method. The method takes the following parameters:

<table>
    <tbody>
        <tr>
            <td><b>evName</b></td>
            <td>the event name</td>
        </tr>
        <tr>
            <td><b>evHandler</b></td>
            <td>a custom event handler</td>
        </tr>
    </tbody>
</table>

~~~js
form.events.on("click", function(name,e){
    console.log(name);
});
~~~

You can attach several handlers to the same event, and Form runs all of them.

**Related sample**: [Form. Events](https://snippet.dhtmlx.com/vyipsaoa)

:::note
Event names are case-insensitive.
:::

## Detaching event listeners

The `form.events.detach()` method removes an event handler:

~~~js
form.events.on("click", function(name,e){
    console.log(name);
});

form.events.detach("click"); 
~~~

## Calling events

The `fire()` method of the `events` module calls a custom event:

~~~js
form.events.fire(evName,[args]);
~~~

## List of supported events

You can find the full list of Form events in the [API section](form/api/api_overview.md#events).
