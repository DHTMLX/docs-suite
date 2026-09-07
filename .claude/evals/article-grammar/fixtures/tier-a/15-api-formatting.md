---
sidebar_label: Autosave
title: JavaScript Matrix - Autosave
description: You can explore the autosave option of Matrix in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Autosave

Acme Matrix keeps edited cells in memory until an explicit save call reaches the server. Enable the **`autosave`** option to push every change as soon as the editor closes.

~~~js
const matrix = new acme.Matrix("#root", {
    autosave: true,
    // dataFeed sends the payload to the endpoint below
    dataFeed: "/api/cells"
});
~~~

Set the **batchSize** property to control how many records travel in one request. The *onBeforeSave* event fires right before the request leaves the browser, so you can cancel the transfer or attach an authorization token.

## Retry policy

**Note:** a failed request never blocks the editor.

When the server answers with an error, Matrix repeats the call three times and then raises `onSaveError`. Pass retryDelay in milliseconds to space the attempts out, and switch the _autosaveMode_ property to "manual" if the endpoint stays down for longer than one minute.
