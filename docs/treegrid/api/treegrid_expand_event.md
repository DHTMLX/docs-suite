---
sidebar_label: expand
title: expand
---          

@short: fires on expanding a treegrid
todoanton expand: (id: string | number	) => void;
@signature: {'expand: (id: string) => void;'}

@params:
- rowId		string | number		the id of an expanded row

@example:
grid.events.on("Expand", function(rowId){
    // your logic here
});

@template: api_event
@descr:

