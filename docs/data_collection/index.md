---
sidebar_label: Overview
title: JavaScript DataCollection - DataCollection Overview 
description: You can have an overview of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# DataCollection overview

A set of APIs that allow you to work with data of a component. Applicable to Chart, Combobox, DataView, Grid, List.
## Methods

| Name                                            | Description                                            |
| ----------------------------------------------- | ------------------------------------------------------ |
| [](api/datacollection_add_method.md)            | @getshort(api/datacollection_add_method.md)            |
| [](api/datacollection_changeid_method.md)       | @getshort(api/datacollection_changeid_method.md)       |
| [](api/datacollection_copy_method.md)           | @getshort(api/datacollection_copy_method.md)           |
| [](api/datacollection_exists_method.md)         | @getshort(api/datacollection_exists_method.md)         |
| [](api/datacollection_filter_method.md)         | @getshort(api/datacollection_filter_method.md)         |
| [](api/datacollection_find_method.md)           | @getshort(api/datacollection_find_method.md)           |
| [](api/datacollection_findall_method.md)        | @getshort(api/datacollection_findall_method.md)        |
| [](api/datacollection_foreach_method.md)        | @getshort(api/datacollection_foreach_method.md)        |
| [](api/datacollection_getfilters_method.md)     | @getshort(api/datacollection_getfilters_method.md)     |
| [](api/datacollection_getid_method.md)          | @getshort(api/datacollection_getid_method.md)          |
| [](api/datacollection_getindex_method.md)       | @getshort(api/datacollection_getindex_method.md)       |
| [](api/datacollection_getinitialdata_method.md) | @getshort(api/datacollection_getinitialdata_method.md) |
| [](api/datacollection_getitem_method.md)        | @getshort(api/datacollection_getitem_method.md)        |
| [](api/datacollection_getlength_method.md)      | @getshort(api/datacollection_getlength_method.md)      |
| [](api/datacollection_isdataloaded_method.md)   | @getshort(api/datacollection_isdataloaded_method.md)   |
| [](api/datacollection_issaved_method.md)        | @getshort(api/datacollection_issaved_method.md)        |
| [](api/datacollection_load_method.md)           | @getshort(api/datacollection_load_method.md)           |
| [](api/datacollection_map_method.md)            | @getshort(api/datacollection_map_method.md)            |
| [](api/datacollection_maprange_method.md)       | @getshort(api/datacollection_maprange_method.md)       |
| [](api/datacollection_move_method.md)           | @getshort(api/datacollection_move_method.md)           |
| [](api/datacollection_parse_method.md)          | @getshort(api/datacollection_parse_method.md)          |
| [](api/datacollection_reduce_method.md)         | @getshort(api/datacollection_reduce_method.md)         |
| [](api/datacollection_remove_method.md)         | @getshort(api/datacollection_remove_method.md)         |
| [](api/datacollection_removeall_method.md)      | @getshort(api/datacollection_removeall_method.md)      |
| [](api/datacollection_resetfilter_method.md)    | @getshort(api/datacollection_resetfilter_method.md)    |
| [](api/datacollection_save_method.md)           | @getshort(api/datacollection_save_method.md)           |
| [](api/datacollection_serialize_method.md)      | @getshort(api/datacollection_serialize_method.md)      |
| [](api/datacollection_sort_method.md)           | @getshort(api/datacollection_sort_method.md)           |
| [](api/datacollection_update_method.md)         | @getshort(api/datacollection_update_method.md)         |

## Events

| Name                                           | Description                                           |
| ---------------------------------------------- | ----------------------------------------------------- |
| [](api/datacollection_afteradd_event.md)       | @getshort(api/datacollection_afteradd_event.md)       |
| [](api/datacollection_afterlazyload_event.md)  | @getshort(api/datacollection_afterlazyload_event.md)  |
| [](api/datacollection_afterremove_event.md)    | @getshort(api/datacollection_afterremove_event.md)    |
| [](api/datacollection_beforeadd_event.md)      | @getshort(api/datacollection_beforeadd_event.md)      |
| [](api/datacollection_beforelazyload_event.md) | @getshort(api/datacollection_beforelazyload_event.md) |
| [](api/datacollection_beforeremove_event.md)   | @getshort(api/datacollection_beforeremove_event.md)   |
| [](api/datacollection_change_event.md)         | @getshort(api/datacollection_change_event.md)         |
| [](api/datacollection_filter_event.md)         | @getshort(api/datacollection_filter_event.md)         |
| [](api/datacollection_load_event.md)           | @getshort(api/datacollection_load_event.md)           |
| [](api/datacollection_loaderror_event.md)      | @getshort(api/datacollection_loaderror_event.md)      |
| [](api/datacollection_removeall_event.md)      | @getshort(api/datacollection_removeall_event.md)      |

:::info Ways of applying events

To call the event of DataCollection, you may use either of the two syntaxes:

- common syntax (via the **data** object of the component)

~~~js
chart.data.events.on("afterAdd", function(newItem){
    console.log("A new item is added");
});
~~~

- or short syntax (right through the component)

~~~js
chart.events.on("afterAdd", function(newItem){
    console.log("A new item is added");
});
~~~
:::
