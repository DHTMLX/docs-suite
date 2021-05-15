---
sidebar_label: change
title: change
---          

@short: fires on changing the active page

@signature: {'change: (index: number, previousIndex: number) => void;'}

@params:
- index     number  the index of a newly active page
- previousIndex     number  the index of a previously active page

@example:
pagination.events.on("Change", function(index, previousIndex) {
  // your logic here
});

@descr:

**Related sample**: [Pagination. Pagination events](https://snippet.dhtmlx.com/mlrtmj7p)
