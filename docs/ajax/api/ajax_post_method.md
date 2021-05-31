---
sidebar_label: post()
title: JavaScript Ajax - post Method 
description: You can explore the post method of Ajax in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# post()

@short: sends a POST request to the server

@signature: {'post<T>(url: string, data?: { [key: string]: any; } | string, config?: Partial<IAjaxHelperConfig>): Promise<T>;'}

@params:
- `url: string` - the URL the request is sent to
- `data: object` - optional, the data sent to the server by the POST-request
- `config: object` - the configuration object of the request

@returns:
A "promise" of the data object.

@example:
dhx.ajax.post(url, {name: "foo", title: "bar"}).then(function (data) {
	console.log(data);
}).catch(function (err) {
	console.log(err);
});

@descr:

**Related sample**: [Data. Ajax POST](https://snippet.dhtmlx.com/eyr9mapj)

The **config** object can contain following options:

- **responseType** - the type of data that you are expecting back from the server. The available types are:
    - text - returns the plain text as a string
    - xml - returns the result parsed as XML
    - json - returns the result as JSON
- **headers** - (*object*) optional, the headers of the request
