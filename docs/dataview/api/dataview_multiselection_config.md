---
sidebar_label: multiselection
title: multiselection
---          

@short: enables selection of multiple DataView items, sets the mode of multiselection

```todoapi
boolean|string multiselection;
multiselection?: boolean | MultiselectionMode;
```

@values: true, false, "click", "ctrlClick" 

@example: 
var dataview = new dhx.DataView("list", {multiselection:true});


@template:	api_config
@descr: 
Setting the **multiselection** property to *true* presupposes selection of multiple items by using Ctrl key.



@relatedsample:
https://snippet.dhtmlx.com/g0xwdx10	Dataview. Multiselection Dataview

@related: dataview/configuration.md#multipleselectionofitems