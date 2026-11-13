---
sidebar_label: Event handling
title: JavaScript Toolbar - Event Handling 
description: You can explore the event handling of Toolbar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Event handling

## Attaching event listeners

You can add a custom handler to any event of Toolbar with the `toolbar.events.on()` method. The method takes the following parameters:

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
toolbar.events.on("click", function(id,e){
    console.log(id);
});
~~~

You can attach several handlers to the same event, and Toolbar runs all of them.

{{note Event names are case-insensitive.}}

**Related sample**: [Toolbar. Events](https://snippet.dhtmlx.com/xvak1p5y)

## Detaching event listeners

The `toolbar.events.detach()` method removes an event handler:

~~~js
toolbar.events.on("click", function(id,e){
    console.log(id);
});

toolbar.events.detach("click"); 
~~~

## Calling events

The `fire()` method of the `events` module calls a custom event:

~~~js
toolbar.events.fire(evName,[args]);
~~~

## List of supported events

The [API section](toolbar/api/api_overview.md#toolbar-events) lists all Toolbar events.
