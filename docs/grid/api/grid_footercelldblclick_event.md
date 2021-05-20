---
sidebar_label: footerCellDblClick
title: footerCellDblClick
---          

@short: fires on double-click on a grid footer cell

@signature: {'footerCellDblClick: (col: ICol, e: MouseEvent) => void;'}

@params:
- `col: object` - an object with a column configuration
- `e: MouseEvent` - a native HTML event object

@example:
grid.events.on("FooterCellDblClick", function(column,e){
    // your logic here
});

@descr:
