---
sidebar_label: update
title: update
---          

@short: changes an item

@signature: {'update(id: string | number, item: IUpdateObject): void;'}

@params:
- id         	string | number    	the ID of an item
- item			object	    new properties for an item

@example:
toolbar.data.update("add_btn",{ value:"Add new" });

@template: api_method
@descr:

