---
sidebar_label: footerCellMouseDown
title: footerCellMouseDown
---          

@short: fires on moving the mouse pointer over a grid footer cell

@signature: footerCellMouseDown: (col: object, e: MouseEvent & TouchEvent) => void;

<!-- @params:
- column		object		an object with a column configuration
- e				Event		a native event object -->

@example:
grid.events.on("FooterCellMouseDown", function(column,e){
    // your logic here
});


@template: api_event
@descr:



