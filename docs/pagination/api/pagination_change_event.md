---
sidebar_label: change
title: change
---          

@short: fires on changing the active page
todoanton any приходит из d.ts
@signature: {'change: (index: number, previousIndex: number) => any;'}

@params:
- index     number  the index of a newly active page
- previousIndex     number  the index of a previously active page


@example:
pagination.events.on("Change", function(index, previousIndex) {
  // your logic here
});


@template: api_event
@descr:



[Pagination. Pagination events](https://snippet.dhtmlx.com/mlrtmj7p)
