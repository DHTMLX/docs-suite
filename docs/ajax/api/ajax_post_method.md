---
sidebar_label: post
title: post
---          

@short: sends a POST request to the server

@params:
- url       string      the URL the request is sent to
- data      object      optional, the data sent to the server by the POST-request
- config    object      the configuration object of the request

@returns:

- data      promise     "promise" of the data object

@example:
dhx.ajax.post(url, {name: "foo", title: "bar"}).then(function (data) {
	console.log(data);
}).catch(function (err) {
	console.log(err);
});

@relatedsample: https://snippet.dhtmlx.com/eyr9mapj	Data. Ajax POST
@template:	api_method

@descr:
The **config** object can contain following options:

- **responseType** - the type of data that you are expecting back from the server. The available types are:
    - text - returns the plain text as a string
    - xml - returns the result parsed as XML
    - json - returns the result as JSON
- **headers** - (*object*) optional, the headers of the request