---
sidebar_label: afterLazyLoad
title: afterLazyLoad
---          

@short: fires after getting a response from the server

@signature: {'afterLazyLoad: (from: number, count: number) => void;'}

@params:
- from		number		the index of the first loaded item 	
- count     number      the count of records loaded from the server 

@example:
data.events.on("AfterLazyLoad", function (from, count) {
    // your code here
});

@descr:

[comment]: # (@related: helpers/lazydataproxy.md)

[comment]: # (@relatedapi:data_collection/api/datacollection_beforelazyload_event.md)
