---
sidebar_label: send
title: send
---          

@short: sends a form to the server

@params:
- url			string		the URL of the server
- method 		string		the request type, "POST" by default
- asFormData	boolean		optional, defines whether values of Form controls should be sent as Form Data



@returns:
- promise 		object		a promise object


@example:
var send = form.send("myserver.com", "POST");


@template: api_method
@descr:
The **method** parameter can take "PUT", "POST", "DELETE", "GET" values, depending on the used type of the request. 


@related: form/work_with_form.md#sendingformtoserver

@relatedsample:

@changelog: added in v6.1


@relatedapi:
form/api/form_aftersend_event.md
form/api/form_beforesend_event.md
