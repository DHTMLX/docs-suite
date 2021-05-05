---
sidebar_label: afterSend
title: afterSend
---          

@short: fires after a form is sent to the server

@signature: {'afterSend: () => void;'}

@params:

@example:
form.events.on("AfterSend", function(){
   // your logic here
});


@descr:

@relatedapi: 
form/api/form_beforesend_event.md
form/api/form_send_method.md

@changelog: added in v6.1
