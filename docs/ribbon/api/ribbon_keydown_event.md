---
sidebar_label: keydown
title: JavaScript Ribbon - keydown Event 
description: You can explore the keydown event of Ribbon in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# keydown

@short: fires when any key is pressed and a control of Ribbon is in focus

@signature: {'keydown: (event: KeyboardEvent, id?: string) => void;'}

@params:
- `event: KeyboardEvent` - a native KeyboardEvent object
- `id?: string` - the ID of the Ribbon control in focus

@example:
ribbon.events.on("keydown", function(event, id) {
    console.log("You've pressed the key: " + event.key);
});

@descr:

**Related sample**: [Ribbon. Events](https://snippet.dhtmlx.com/i7cfddkl?tag=ribbon)

@changelog:
added in v8.3