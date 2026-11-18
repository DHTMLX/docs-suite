---
sidebar_label: Event handling
title: JavaScript Layout - Event Handling 
description: You can explore the event handling of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

You can add a custom handler to any event of Layout with the `layout.events.on()` method. The method takes the following parameters:

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

~~~js
layout.events.on("beforeHide", function(id){
    console.log("The id of a cell", id);
});
~~~

You can attach several handlers to the same event, and Layout runs all of them.

:::note
Event names are case-insensitive.
:::

**Related sample**: [Layout. Events](https://snippet.dhtmlx.com/fyxw0map)

## Detaching event listeners

The `layout.events.detach()` method removes an event handler:

~~~js
layout.events.on("beforeHide", function(id){
    console.log("The id of a cell", id);
});

layout.events.detach("beforeHide");
~~~

## Calling events

The `layout.events.fire()` method calls an event:

~~~js
layout.events.fire("beforeHide",args);
// where args is an array of arguments
~~~

## List of supported events

You can find the full list of Layout events in the [API Reference](layout/api/api_overview.md#layout-events).
