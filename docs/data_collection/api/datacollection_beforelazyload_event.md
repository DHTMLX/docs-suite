---
sidebar_label: beforeLazyLoad
title: beforeLazyLoad
---          

@short: fires before sending a request to the server
	
@returns:
- param		boolean			false - to block sending a request to the server, otherwise true

@example:
data.events.on("BeforeLazyLoad", function () {
    // your code here
    return false;
});

@template:	api_event
@descr:

@relatedapi: data_collection/api/afterlazyload_event.md

@related: helpers/lazydataproxy.md

@added in v6.4
