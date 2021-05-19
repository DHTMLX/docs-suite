---
sidebar_label: beforeSend
title: beforeSend
---          

@short: fires before a form is sent to the server
	
@signature: {'beforeSend: () => boolean;'}

@returns:
Return `true/false` to allow/forbid a form sending to the server.

@example:
form.events.on("BeforeSend", function(){
   // your logic here
   return true;
});

@descr:

@changelog: added in v6.1

[comment]: # (@relatedapi: form/api/form_aftersend_event.md form/api/form_send_method.md)
