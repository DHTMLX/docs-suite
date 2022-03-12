---
sidebar_label: beforeLazyLoad
title: JavaScript DataCollection - beforeLazyLoad Event 
description: You can explore the beforeLazyLoad event of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# beforeLazyLoad

@short: fires before sending a request to the server

@signature: {'beforeLazyLoad: () => boolean | void;'}

@returns:
Return `false` to block sending a request to the server; otherwise, `true`.

@example:
component.data.events.on("beforeLazyLoad", function () {
    // your code here
    return false;
});

@descr:

@changelog:
added in v6.4

[comment]: # (@relatedapi: data_collection/api/datacollection_afterlazyload_event.md)

[comment]: # (@related: helpers/lazydataproxy.md)
