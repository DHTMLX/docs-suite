---
sidebar_label: delete()
title: JavaScript Ajax - delete Method 
description: You can explore the delete method of Ajax in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# delete()

@short: sends a DELETE request to the server

@signature: {'delete<T>(url: string, data?: { [key: string]: any; } | string, config?: Partial<IAjaxHelperConfig>): Promise<T>;'}

@params:
- `url: string` - the URL the request is sent to
- `data: object` - optional, the data sent to the server by the DELETE-request
- `config: object` - the configuration object of the request

@returns:
A "promise" of the data object.

@example:
dhx.ajax.delete(url, {id: "2"}).then(function (data){
    console.log(data);
});

@descr:
**Related sample**: [Data. Ajax DELETE](https://snippet.dhtmlx.com/6nlb0bfu)

The **config** object can contain the following options:

- **responseType** - the type of data that you are expecting back from the server. The available types are:
    - text - returns the plain text as a string
    - xml - returns the result parsed as XML
    - json - returns the result as JSON
- **headers** - (*object*) optional, the headers of the request
