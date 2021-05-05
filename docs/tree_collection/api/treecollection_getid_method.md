---
sidebar_label: getId
title: getId
---          

@short: gets the ID of an item

@signature: {'getId(index: number, parentId?: string): Id;'}

@params:
- index 		number		 the index of the item
- parentId      string         the id of the parent of an item

@returns:
- id 		string		the id of the item

@example:
const id = tree.data.getId(2, "1"); -> returns "3"


@descr:
