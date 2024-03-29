---
sidebar_label: keydown
title: JavaScript Sidebar - keydown Event 
description: You can explore the keydown event of Sidebar in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# keydown

@short: fires when any key is pressed and a Sidebar option is in focus

@signature: {'keydown: (event: KeyboardEvent, id?: string) => void;'}

@params:
- `event: KeyboardEvent` - a native KeyboardEvent object
- `id?: string` - the ID of the Sidebar option in focus

@example:
sidebar.events.on("keydown", function(event, id) {
    console.log("You've pressed the key: " + event.key);
});

@descr:

**Related sample**: [Sidebar. Events](https://snippet.dhtmlx.com/qfddiu3i?tag=sidebar)

@changelog:
added in v8.3