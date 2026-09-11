---
sidebar_label: Event handling
title: JavaScript DataView - Event Handling 
description: You can explore the event handling of DataView in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

You can add a custom handler to any available event with the `dataview.events.on()` method. The method takes the following parameters:

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
dataview.events.on("click", function(id, e){
   console.log("The item with the id "+ dataview.selection.getId(id) +" was clicked.");
});
~~~

You can attach several handlers to the same event, and DataView runs all of them.

:::note
Event names are case-insensitive.
:::

**Related sample**: [Dataview. Events](https://snippet.dhtmlx.com/2d74uyoh)

## Detaching event listeners

The `dataview.events.detach()` method removes an event handler:

~~~js
dataview.events.on("click", function(id, e){
   console.log("The item with the id "+ dataview.selection.getId(id) +" was clicked.");
});

dataview.events.detach("click");
~~~

## Calling events

The `dataview.events.fire()` method calls an event:

~~~js
dataview.events.fire("name",args);
// where args is an array of arguments
~~~

## List of supported events

You can find the full list of DataView events in the [API Reference](dataview/api/api_overview.md#events).
