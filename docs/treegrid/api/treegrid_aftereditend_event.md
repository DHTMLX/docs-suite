---
sidebar_label: afterEditEnd
title: JavaScript TreeGrid - afterEditEnd Event 
description: You can explore the afterEditEnd event of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# afterEditEnd

@short: fires after editing of a cell is ended

@signature: {'afterEditEnd: (value: string | number | boolean | Date, row: object, column: object) => void;'}

@params:
The callback of the event is called with the following parameters:

- `value: string | number | boolean | Date` - the new value of a cell
- `row: object` - an object with a row configuration
- `column: object` - an object with a column configuration

@example:
grid.events.on("afterEditEnd", (value, row, column) => {
    // your logic here
});

@descr:

@changelog: 

- Added in v6.1
- The value of a cell can have the Date type since v9.0
