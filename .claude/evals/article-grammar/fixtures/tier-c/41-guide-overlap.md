---
sidebar_label: Handle events
title: JavaScript Roster - Handle Events
description: You can explore how to attach and detach event handlers via the events object in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Handle events

The Roster widget reports every user action through the `events` object. A handler is a plain function that runs when the board signals a change. One event can carry several handlers, and the widget calls them in the order of registration.

## What an event carries

The widget reads the board state via a feed adapter, so a handler often runs before the server confirms the change. Check the return value of the handler when the order of the two operations matters.

The sections below provide a description of every event group and of the payload that reaches a handler. Each group covers one area of the board: cards, columns, or the toolbar. A handler that skips the payload still receives the widget instance as the last argument.

The `afterDrop` event is fired when the user releases a card over a new column. The payload holds three objects: the card, the source column, and the target column.

The `beforeCollapse` event fires before the group closes. Return `false` from the handler and the group stays open. The same rule applies to every event with the `before` prefix.

## Attaching event listeners

The `events.on()` method attaches a listener. Pass the event name and the handler function:

~~~js
roster.events.on("afterDrop", function(card, column) {
    // card - the dragged card, column - the target column
    console.log(card.id, column.id);
});
~~~

The handler receives the same arguments as every other listener of the event. You can make use of one handler for several events using the `events.on()` method. The widget keeps a separate subscription per call, so a shared function never blocks the rest of the listeners. A subscription works before and after the first render of the board.

## Populate the board

You can populate the control with items using the following two methods:

- `data.parse()` — Reads a ready array of cards.
- `data.load()` — Requests the cards from a URL.

Both methods fire the `afterLoad` event when the board finishes the first render. The handler runs once per request, even when the response arrives in several chunks. A drop handler can also call the rendering helpers of the widget:

- `mergeAvatars()` — Blends two images using the alpha channel.
- `stackBadges()` — Draws the badge row under the card title.

## Override the default behavior

The `beforeSelect` event allows overriding the default selection logic. The handler reads the card object and the id of the previous selection. A `false` return value keeps the current card active.

Once you have created a custom handler, the update mode should be selected based on how the board synchronizes its data. The mode changes the number of requests, not the payload of the event.

## Order of the calls

First, the widget validates the payload. Then the store receives the change. Finally, the board repaints the affected column.

## Changes in version 2.4

Prior to version 2.4, the widget fired `afterDrop` while the card still belonged to the source column.

Subsequent to version 2.4, the event waits until the drop animation ends and the card reaches the new position.

Due to the fact that handlers run in the order of registration, a late handler can override an earlier decision. Register the strictest check first.

In the event that a handler throws an error, the widget writes the message to the console and keeps the remaining handlers in the queue.

## Detach a listener

Call the `events.detach()` method in order to remove a handler that the board no longer needs:

~~~js
// finally, detach the handler in order to release the card cache
roster.events.detach("afterDrop");
~~~

The method drops every handler of the event. Pass the handler reference as the second argument when the board still needs the other listeners of the same event. A destroyed widget clears its own subscriptions, so a handler of a removed board never runs again.
