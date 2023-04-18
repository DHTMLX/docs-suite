---
sidebar_label: get()
title: JavaScript Ajax - get Method 
description: You can explore the get method of Ajax in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# get()

@short: sends a GET request to the server

@signature: {'get<T>(url: string, data?: { [key: string]: any; } | string, config?: object): Promise<T>;'}

@params:
- `url: string` - the URL the request is sent to
- `data: object | string` - optional, the data sent to the server by the GET-request
- `config: object` - optional, the configuration object of the request. It can contain the following options:
    - `responseType: string` - the type of data that you are expecting back from the server. The available types are:
        - "text" - returns the plain text as a string
        - "xml" - returns the result parsed as XML
        - "json" - returns the result as JSON
    - `headers: object` - optional, the headers of the request

@returns:
A "promise" of the data object.

@example:
dhx.ajax.get(url).then(function (data) {
	console.log(data);
}).catch(function (err) {
	console.log(err);
});

@descr:

**Related sample**: [Data. Ajax GET](https://snippet.dhtmlx.com/81oqx20v)