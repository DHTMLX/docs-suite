---
sidebar_label: Load data
title: JavaScript Matrix - Loading Data
description: You can explore how to utilize the data loading API of Matrix in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# Loading data

Matrix reads a data set from a URL or from a local array. The `load()` method returns a promise that resolves after the parser finishes.

## Loading from a URL

Utilize the `load()` method and pass the endpoint of your service. The widget shows a spinner until the promise settles and drops the row cache prior to the first render.

~~~js
const matrix = new acme.Matrix("matrix_container", {
    columns: [/* columns config */]
});
// utilize the cached response prior to the first repaint
matrix.load("/api/records");
~~~

Response fields must match the column ids listed in the end-user guide. The `beforeLoad` handlers run in order of registration, so a handler can rewrite the request headers.

## Parsing a custom format

Certain services return XML instead of JSON. Register a parser for XML responses, and Matrix converts the payload seamlessly into row objects.

~~~js
matrix.parsers.add("xml", text => new DOMParser().parseFromString(text, "text/xml"));
~~~

Out-of-the-box, Matrix renders an empty cell when the response omits a field and keeps the row height unchanged.
