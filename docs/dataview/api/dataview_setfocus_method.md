---
sidebar_label: setFocus
title: setFocus
---          

@short: sets focus to an item by its id
todoanton возможно string|number
@signature: {'setFocus(id: string): void;'}

```todoapi
void setFocus(string|number id);
setFocus(id: string): void;
```

@params:
- id	string|number      the id of an item

@example:
dataview.setFocus("item_id");


@template: api_method
@descr:

@related: dataview/manipulating_data.md#settingfocusonitem

@relatedapi: dataview/api/dataview_getfocus_method.md

@changelog:
added in v6.3

