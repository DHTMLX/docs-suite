---
sidebar_label: AwaitRedraw
title: AwaitRedraw
---          

DHTMLX AwaitRedraw is a helper that allows implementing specified actions for a component as soon as possible after it is redrawn. 

The **dhx.awaitRedraw** helper returns a promise:

- **promise** - (*function*) a function to be executed

~~~js
dhx.awaitRedraw().then(function() {
    // your code here
})
~~~

{{editor	https://snippet.dhtmlx.com/r4ck0smz	Helpers. Await Redraw. Initialization}}




