---
sidebar_label: footerCellMouseOver
title: footerCellMouseOver
---          

@short: fires on moving the mouse pointer over a grid footer cell

@signature: {'footerCellMouseOver: (col: object, e: MouseEvent) => void;'}

@params:
- `column: object` - an object with a column configuration
- `e: MouseEvent` - a native HTML event object

@example:
grid.events.on("FooterCellMouseOver ", function(column,e){
    // your logic here
});

@descr:
