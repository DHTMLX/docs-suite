---
sidebar_label: move
title: move
---          

@short: moves items to different positions

@params:
- id 			string,string[]		the ids of items to move
- index			number				the index to move items to
- target		object				optional, the target tree collection object
- targetId		string				optional, the id of the parent item where the moved items will be placed

@returns:
- id    string|string[]   the item's id or an array with ids of items

@example:
toolbar.data.move("profile_btn",-1);

@template: api_method
@descr:
{{note The ID should always be a string, even if in the control configuration you've set it as a number.}}