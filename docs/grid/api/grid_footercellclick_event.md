---
sidebar_label: footerCellClick
title: footerCellClick
---          

@short: fires on click on a grid footer cell

@signature: {'footerCellClick: (col: ICol, e: MouseEvent) => void;'}

@params:
- `col: object` - an object with a column configuration
- `e: MouseEvent` - a native HTML event object

@example:
grid.events.on("FooterCellClick", function(column,e){
    // your logic here
});

@descr:
