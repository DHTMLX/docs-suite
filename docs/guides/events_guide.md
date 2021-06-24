---
sidebar_label: Events basic rules
title: JavaScript Guides - Events basic rules 
description: You can learn about events basic rules in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Basic rules how to work with events

## What is an event

All the time when you're interacting with the User Interface different events occur. According to the occurred events, the appropriate event-handling code is executed.

An event is a specific signal to the system that something has happened. The event itself does not lead to any action by the system, but the system can react to the event. The reaction to the event is called event handling.

An event handler is a function - a block of code responsible for performing certain actions. You can design the function according to your needs.

The event is programmed to understand one special change in the system and to give a signal about it. The event handler reacts to the signal and runs when the event fires. Several handlers can be assigned to one event. In this case, when the event occurs, all handlers are performed.

Here are some examples of the events of the Calendar widget:

- **change** - fires on change of date selection;
- **cancelClick** - fires when the user clicks on the "Cancel" control;
- **dateMouseOver** - fires when the mouse pointer is over a date.

## How to work with events

The DHTMLX widgets have sets of predefined events - you can find them in the API section of the widget. The Event Handling block of the widget shows you examples of the event usage in the widget.

The following approaches are used to work with events in DHTMLX Suite.

### Attaching event listeners

To attach an event listener, use the **component.events.on()** method:

```js
component.events.on("eventName", function() {
    do_something();
});
```

Where **component** is the name of the component of the DHTMLX Suite library (for example, calendar, grid, list, etc.).

The **component.events.on()** method takes two parameters:

- *eventName* – the name of the event of the component;
- *eventHandler*  – a function to run.

Any user-defined event handler can be attached to the event of the component. The logic of the handler is defined in the function. You can also place any API method of the related widget inside the handler function of the event.

### Detaching event listeners

To detach the event listener, use **component.events.detach()** method.

```js
component.events.detach("eventName");
```

Where **component** is the name of the component of the DHTMLX Suite library (for example, calendar, grid, list, etc.).

The **component.events.detach()** method takes one parameter:

*eventName* – the name of the event of the component.

### Calling events

To call events, use **component.events.fire()** method:

```js
component.events.fire("eventName", args);
```

Where **component**  is the name of the component of the DHTMLX Suite library (for example, calendar, grid, list, etc.).

The **component.events.fire()** method takes two parameters:

- *eventName* – an event of the component;
- *args* – an array of arguments.

## The event usage sample

Let's consider a sample of the event usage. Please, use the DHTMLX Snippet Tool to create this sample.

First, create a form with a slider and a button.

```html
<!-- component container -->
<form style="margin: 20px;" id="form"></form>
```

```js
const form = new dhx.Form("form", {
    css: "dhx_widget--bg_white dhx_widget--bordered",
    padding: 40,
    rows: [
        {
            type: "slider",
            label: "Slider",
            value: 10,
        },
        {
            type: "button",
            text: "Disable all",
        }
    ]
}); 
```

Now, we are to disable the form after the user clicks the button. For this, we will use the "click" event and add the disable() method of Form API to the event handler.

```js
//the "click" event and the event handler which disables the form
form.events.on ("click", function () {
    form.disable();
});
```

Pay attention,  usage of the disable() method of Form in the event handler is just an example. You may apply any other method or develop your logic if needed.

For some reason, you may need to stop disabling the form. In this case, just use the form.events.detach() method.

```js
form.events.detach("click");
```

**Look at the example we have made.**

<iframe src="https://snippet.dhtmlx.com/hz80f7vc?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="450"></iframe>
