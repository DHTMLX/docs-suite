---
sidebar_label: setActive()
title: JavaScript Window - setActive Method 
description: You can explore the setActive method of Window in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# setActive()

@short: brings a specific window to the foreground by setting it to the active state

@signature: {'setActive(): void;'}

@descr:
In the following example the second window overlaps the first one on initialization, but the call of `setActive()` allows bringing the first window back to the front.

@example:
const windowConfig = {
    width: 300,
    height: 300,
    html: "<div style='padding: 20px'>Window content</div>"
};

const window1 = new dhx.Window({
    ...windowConfig,
    title: "Window 1",
});

const window2 = new dhx.Window({
    ...windowConfig,
    title: "Window 2",
});

// displaying both windows
window1.show();
window2.show(); // Window 2 is currently on top

// bringing Window 1 to the front without refreshing its content
window1.setActive();

@descr:
The main benefit of this method is that the activation occurs **without re-rendering the content**, which ensures that the DOM state, such as form input values, scroll positions, or media playback remains completely intact.

@changelog:
Added in v9.3

**Related sample**: [Window. Setting the active state](https://snippet.dhtmlx.com/lvm3kfwq)

**Related article**: [Work with Window](/window/usage/#setting-the-active-state)