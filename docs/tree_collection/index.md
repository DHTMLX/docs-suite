---
sidebar_label: Overview
title: JavaScript TreeCollection - TreeCollection Overview 
description: You can have an overview of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# TreeCollection overview

A set of API methods and events that allow you to work with data of a component with tree-like structure. Applicable to Menu, Ribbon, Sidebar, Toolbar, Tree, TreeGrid.

## Methods

| Name                                          | Description                                          |
| --------------------------------------------- | ---------------------------------------------------- |
| [](api/treecollection_add_method.md)          | @getshort(api/treecollection_add_method.md)          |
| [](api/treecollection_cancopy_method.md)      | @getshort(api/treecollection_cancopy_method.md)      |
| [](api/treecollection_copy_method.md)         | @getshort(api/treecollection_copy_method.md)         |
| [](api/treecollection_eachchild_method.md)    | @getshort(api/treecollection_eachchild_method.md)    |
| [](api/treecollection_eachparent_method.md)   | @getshort(api/treecollection_eachparent_method.md)   |
| [](api/treecollection_exists_method.md)       | @getshort(api/treecollection_exists_method.md)       |
| [](api/treecollection_filter_method.md)       | @getshort(api/treecollection_filter_method.md)       |
| [](api/treecollection_foreach_method.md)      | @getshort(api/treecollection_foreach_method.md)      |
| [](api/treecollection_getid_method.md)        | @getshort(api/treecollection_getid_method.md)        |
| [](api/treecollection_getindex_method.md)     | @getshort(api/treecollection_getindex_method.md)     |
| [](api/treecollection_getitem_method.md)      | @getshort(api/treecollection_getitem_method.md)      |
| [](api/treecollection_getitems_method.md)     | @getshort(api/treecollection_getitems_method.md)     |
| [](api/treecollection_getlength_method.md)    | @getshort(api/treecollection_getlength_method.md)    |
| [](api/treecollection_getparent_method.md)    | @getshort(api/treecollection_getparent_method.md)    |
| [](api/treecollection_getroot_method.md)      | @getshort(api/treecollection_getroot_method.md)      |
| [](api/treecollection_haveitems_method.md)    | @getshort(api/treecollection_haveitems_method.md)    |
| [](api/treecollection_issaved_method.md)      | @getshort(api/treecollection_issaved_method.md)      |
| [](api/treecollection_load_method.md)         | @getshort(api/treecollection_load_method.md)         |
| [](api/treecollection_loaditems_method.md)    | @getshort(api/treecollection_loaditems_method.md)    |
| [](api/treecollection_move_method.md)         | @getshort(api/treecollection_move_method.md)         |
| [](api/treecollection_parse_method.md)        | @getshort(api/treecollection_parse_method.md)        |
| [](api/treecollection_refreshitems_method.md) | @getshort(api/treecollection_refreshitems_method.md) |
| [](api/treecollection_remove_method.md)       | @getshort(api/treecollection_remove_method.md)       |
| [](api/treecollection_removeall_method.md)    | @getshort(api/treecollection_removeall_method.md)    |
| [](api/treecollection_restoreorder_method.md) | @getshort(api/treecollection_restoreorder_method.md) |
| [](api/treecollection_save_method.md)         | @getshort(api/treecollection_save_method.md)         |
| [](api/treecollection_serialize_method.md)    | @getshort(api/treecollection_serialize_method.md)    |
| [](api/treecollection_sort_method.md)         | @getshort(api/treecollection_sort_method.md)         |
| [](api/treecollection_update_method.md)       | @getshort(api/treecollection_update_method.md)       |

## Events

| Name                                         | Description                                         |
| -------------------------------------------- | --------------------------------------------------- |
| [](api/treecollection_afteradd_event.md)     | @getshort(api/treecollection_afteradd_event.md)     |
| [](api/treecollection_afteritemload_event.md)     | @getshort(api/treecollection_afteritemload_event.md)     |
| [](api/treecollection_afterremove_event.md)  | @getshort(api/treecollection_afterremove_event.md)  |
| [](api/treecollection_beforeadd_event.md)    | @getshort(api/treecollection_beforeadd_event.md)    |
| [](api/treecollection_beforeitemload_event.md)    | @getshort(api/treecollection_beforeitemload_event.md)    |
| [](api/treecollection_beforeremove_event.md) | @getshort(api/treecollection_beforeremove_event.md) |
| [](api/treecollection_change_event.md)       | @getshort(api/treecollection_change_event.md)       |
| [](api/treecollection_load_event.md)         | @getshort(api/treecollection_load_event.md)         |
| [](api/treecollection_loaderror_event.md)    | @getshort(api/treecollection_loaderror_event.md)    |
| [](api/treecollection_removeall_event.md)    | @getshort(api/treecollection_removeall_event.md)    |

:::info Ways of applying events

To call the event of TreeCollection, you may use either of the two syntaxes:

- common syntax (via the **data** object of the component)

~~~js
menu.data.events.on("afterAdd", function(newItem){
    console.log("A new item is added");
});
~~~

- or short syntax (right through the component)

~~~js
menu.events.on("afterAdd", function(newItem){
    console.log("A new item is added");
});
~~~
:::