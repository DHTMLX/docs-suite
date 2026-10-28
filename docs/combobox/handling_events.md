---
sidebar_label: Event handling
title: JavaScript Combo Box - Event Handling 
description: You can explore the event handling of Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

You can add a custom handler to any available event with the `combo.events.on()` method. The method takes the following parameters:

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
combo.events.on("open", function() {
    // your logic here
});
~~~

You can attach several handlers to the same event, and Combobox runs all of them.

:::note
Event names are case-insensitive.
:::

**Related sample**: [Combobox. Events](https://snippet.dhtmlx.com/n70eqx5l)

## Detaching event listeners

The `combo.events.detach()` method removes an event handler:

~~~js
combo.events.on("open", function() {
    // your logic here
});

combo.events.detach("open");
~~~

## Calling events

The `combo.events.fire()` method calls an event:

~~~js
combo.events.fire("name",args);
// where args is an array of arguments
~~~

## List of supported events

You can find the full list of Combobox events in the [API Reference](combobox/api/api_overview.md#events).
