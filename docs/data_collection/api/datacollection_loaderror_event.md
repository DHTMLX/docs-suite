---
sidebar_label: loadError
title: JavaScript DataCollection - loadError Event 
description: Learn when the loadError event of DataCollection fires when data fails to load into a flat collection, and what the server response passed to the handler holds. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
---

# loadError

@short: fires when loading of data fails

#### Usage

~~~ts
loadError: (response: string | { status: number; statusText: string; message?: string }) => void;
~~~

@params:
- `response: string | object` - info about the error. It can be:
    - a string with the text of an error
    - or an object with the following properties:
        - `status: number` - the HTTP status code of the response
        - `statusText: string` - the HTTP status text of the response
        - `message?: string` - optional, the text of the server response

@example:
component.data.events.on("loadError", function(error){
    // your code here
});

@descr:

**Related API**:
- [`load()`](data_collection/api/datacollection_load_method.md)
