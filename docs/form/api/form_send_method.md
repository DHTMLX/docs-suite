---
sidebar_label: send()
title: send()
---          

@short: sends a form to the server

@signature: {'send(url: string, method?: string, asFormData?: boolean): Promise<any> | void;'}

@params:
- `url: string` - the URL of the server
- `method: string` - the request type, "POST" by default
- `asFormData: boolean` - optional, defines whether values of Form controls should be sent as Form Data

@returns:
An object of the promise.

@example:
var send = form.send("myserver.com", "POST");

@descr:

The **method** parameter can take "PUT", "POST", "DELETE", "GET" values, depending on the used type of the request. 

@changelog: added in v6.1

[comment]: # (@related: form/work_with_form.md#sending-form-to-server)

[comment]: # (@relatedapi: form/api/form_aftersend_event.md form/api/form_beforesend_event.md)
