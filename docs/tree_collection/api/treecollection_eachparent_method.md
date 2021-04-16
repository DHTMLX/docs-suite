---
sidebar_label: eachParent
title: eachParent
---          

@short: iterates through all the parent items (the immediate parent and its parent, etc until the parent is the component itself)

@params:
- id 		string		 the ID of the item
- cb        function     the function that will be applied to every parent of the item   

@example:
toolbar.data.eachParent("new_btn", item => console.log(item));

@template: api_method
@descr: