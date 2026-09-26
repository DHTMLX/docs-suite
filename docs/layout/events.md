---
sidebar_label: Event handling
title: JavaScript Layout - Event Handling 
description: You can explore the event handling of Layout in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

You can add a user-defined handler to any of the available events. To do this, use the `layout.events.on()` method with the following parameters:

<table>
    <tbody>
        <tr>
            <td><b>evName</b></td>
            <td>name of the event</td>
        </tr>
        <tr>
            <td><b>evHandler</b></td>
            <td>user-defined event handler</td>
        </tr>
    </tbody>
</table>

~~~js
layout.events.on("beforeHide", function(id){
    console.log("The id of a cell", id);
});
~~~

You can attach several handlers to the same event, and Layout executes all of them.

:::note
Event names are case-insensitive.
:::

**Related sample**: [Layout. Events](https://snippet.dhtmlx.com/fyxw0map)

## Detaching event listeners

To remove an event handler, use the `layout.events.detach()` method:

~~~js
layout.events.on("beforeHide", function(id){
    console.log("The id of a cell", id);
});

layout.events.detach("beforeHide");
~~~

## Calling events

To call events, use the `layout.events.fire()` method:

~~~js
layout.events.fire("beforeHide",args);
// where args is an array of arguments
~~~

## List of supported events

You can find the full list of Layout events in the [API Reference](layout/api/api_overview.md#layout-events).
