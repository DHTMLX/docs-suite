---
sidebar_label: beforeLazyLoad
title: beforeLazyLoad
---          

@short: fires before sending a request to the server

@signature: {'beforeLazyLoad: () => boolean | void;'}

@returns:
- param		boolean			false - to block sending a request to the server, otherwise true

@example:
data.events.on("BeforeLazyLoad", function () {
    // your code here
    return false;
});

@descr:

@changelog:
added in v6.4

[comment]: # (@relatedapi: data_collection/api/datacollection_afterlazyload_event.md)

[comment]: # (@related: helpers/lazydataproxy.md)
