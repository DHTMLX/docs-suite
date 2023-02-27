---
sidebar_label: change
title: JavaScript Pagination - change Event 
description: You can explore the change event of Pagination in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# change

@short: fires on changing the active page

@signature: {'change: (index: number, previousIndex: number) => void;'}

@params:
- `index: number` - the index of a newly active page
- `previousIndex: number` - the index of a previously active page

@example:
pagination.events.on("change", function(index, previousIndex) {
  // your logic here
});

@descr:

**Related sample**: [Pagination. Events](https://snippet.dhtmlx.com/mlrtmj7p)
