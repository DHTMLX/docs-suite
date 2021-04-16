---
sidebar_label: beforeSend
title: beforeSend
---          

@short: fires before a form is sent to the server
	
@params:

@returns:

- result		boolean			true/false, to allow/forbid a form sending to the server

@example:
form.events.on("BeforeSend", function(){
   // your logic here
   return true;
});


@template:	api_event
@descr:
The event is blockable. Return *false* to prevent a form sending to the server.


@relatedapi: 
form/api/form_aftersend_event.md
form/api/form_send_method.md
	




@changelog: added in v6.1