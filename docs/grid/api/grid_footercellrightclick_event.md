---
sidebar_label: footerCellRightClick
title: footerCellRightClick
---          

@short: fires on right click on a grid footer cell

@signature: {'footerCellRightClick: (col: object, e: MouseEvent) => void;'}

@params:
- `col: object` - an object with a column configuration
- `e: MouseEvent` - a native HTML event object

@example:
grid.events.on("FooterCellRightClick", function(col,e){
    // your logic here
});

@descr:
