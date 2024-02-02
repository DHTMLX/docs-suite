---
sidebar_label: loadError
title: JavaScript DataCollection - loadError Event 
description: You can explore the loadError event of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# loadError

@short: fires when loading of data fails

@signature: {'loadError: (response: string | object) => void;'}

@params:
- `response: string | object` - info about the error. It can be:
    - a string with the text of an error
    - or an object with two properties:
        - `status` - the code of an error
        - `text` - the text of an error

@example:
component.data.events.on("loadError", function(error){
    // your code here
});

@descr:
