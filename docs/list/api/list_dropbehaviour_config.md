---
sidebar_label: dropBehaviour
title: dropBehaviour
---          

@short: defines the behaviour of a dragged item

```todoapi ```

@example: 
var source = new dhx.List("list-source",{
	dragMode:"source", dropBehaviour:"complex"
});
var target = new dhx.List("list-target",{
	dragMode:"target", dropBehaviour:"complex"
});


@template:	api_config
@descr: 
There are three modes of behaviour of a dragged list item:

- "child" - a dragged item becomes a child of the item it is dragged to
- "sibling" - a dragged item becomes a sibling of the item it is dragged to
- "complex" - a dragged item can become both a child of a sibling of a target item, depending on the position specified by highlighting


