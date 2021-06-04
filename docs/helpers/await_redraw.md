---
sidebar_label: AwaitRedraw
title: JavaScript Helpers - AwaitRedraw 
description: You can explore the AwaitRedraw helper in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# AwaitRedraw

DHTMLX AwaitRedraw is a helper that allows implementing specified actions for a component as soon as possible after it is redrawn. 

The **dhx.awaitRedraw** helper returns a promise:

- **promise** - (*function*) a function to be executed

~~~js
dhx.awaitRedraw().then(function() {
    // your code here
})
~~~

**Related sample**: [Helpers. Await Redraw. Initialization](https://snippet.dhtmlx.com/r4ck0smz)
