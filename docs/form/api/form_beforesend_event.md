---
sidebar_label: beforeSend
title: JavaScript Form - beforeSend Event 
description: You can explore the beforeSend event of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeSend

@short: fires before a form is sent to the server

@signature: {'beforeSend: () => boolean;'}

@returns:
Return `true/false` to allow/forbid a form sending to the server.

@example:
form.events.on("beforeSend", function(){
   // your logic here
   return true;
});

@descr:

**Related sample**: [Form. Events](https://snippet.dhtmlx.com/vyipsaoa)

@changelog: added in v6.1

[comment]: # (@relatedapi: form/api/form_aftersend_event.md form/api/form_send_method.md)
