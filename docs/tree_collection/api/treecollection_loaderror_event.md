---
sidebar_label: loadError
title: JavaScript TreeCollection - loadError Event 
description: Learn when the loadError event of TreeCollection fires when loading of data or child items into a tree collection fails, and what the handler receives. Explore the API reference and code examples of the DHTMLX JavaScript Suite library.
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
component.data.events.on("loadError", (response) => {
    // your code here
});

@descr:

**Related API**:
- [`load()`](tree_collection/api/treecollection_load_method.md)
- [`loadItems()`](tree_collection/api/treecollection_loaditems_method.md)
