---
sidebar_label: afterLazyLoad
title: afterLazyLoad
---          

@short: fires after getting a response from the server
	
@params:
- from		number		the index of the first loaded item 	
- count     number      the count of records loaded from the server 

@example:
data.events.on("AfterLazyLoad", function (from, count) {
    // your code here
});

@template:	api_event
@descr:

@related: helpers/lazydataproxy.md

@relatedapi:data_collection/api/beforelazyload_event.md
