---
sidebar_label: afterLazyLoad
title: JavaScript DataCollection - afterLazyLoad Event 
hide_title: true
description: You can explore the afterLazyLoad event of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# afterLazyLoad

@short: fires after getting a response from the server

@signature: {'afterLazyLoad: (from: number, count: number) => void;'}

@params:
- `from: number` - the index of the first loaded item 	
- `count: number` - the count of records loaded from the server 

@example:
data.events.on("AfterLazyLoad", function (from, count) {
    // your code here
});

@descr:

[comment]: # (@related: helpers/lazydataproxy.md)

[comment]: # (@relatedapi:data_collection/api/datacollection_beforelazyload_event.md)
