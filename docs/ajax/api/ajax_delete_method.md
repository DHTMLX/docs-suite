---
sidebar_label: delete
title: delete
---          

@short: sends a DELETE request to the server

@params:
- url       string      the URL the request is sent to
- data      object      optional, the data sent to the server by the DELETE-request
- config    object      the configuration object of the request

@returns:

- data      promise     "promise" of the data object

@example:
dhx.ajax.delete(url, {id: "2"}).then(function (data){
    console.log(data);
});

@relatedsample: https://snippet.dhtmlx.com/6nlb0bfu	Data. Ajax Delete
@template:	api_method

@descr:
The **config** object can contain following options:

- **responseType** - the type of data that you are expecting back from the server. The available types are:
    - text - returns the plain text as a string
    - xml - returns the result parsed as XML
    - json - returns the result as JSON
- **headers** - (*object*) optional, the headers of the request

