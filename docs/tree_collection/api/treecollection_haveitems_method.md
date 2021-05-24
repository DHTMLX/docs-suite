---
sidebar_label: haveItems()
title: haveItems()
---          

@short: checks whether an item has children

@signature: {'haveItems(id: Id): boolean;'}

@params:
`id: string` - the ID of a control

@returns:
`true`, if the control has children; otherwise, `false`.

@example:
if (toolbar.data.haveItems("menu1"))
    //do something;

@descr:
