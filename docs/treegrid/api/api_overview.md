---
sidebar_label: API overview
title: TreeGrid API overview
---

## TreeGrid methods

| Name                                                  | Description                                                  |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| [](treegrid/api/treegrid_addcellcss_method.md)        | @getshort(treegrid/api/treegrid_addcellcss_method.md)        |
| [](treegrid/api/treegrid_addrowcss_method.md)         | @getshort(treegrid/api/treegrid_addrowcss_method.md)         |
| [](treegrid/api/treegrid_addspan_method.md)           | @getshort(treegrid/api/treegrid_addspan_method.md)           |
| [](treegrid/api/treegrid_adjustcolumnwidth_method.md) | @getshort(treegrid/api/treegrid_adjustcolumnwidth_method.md) |
| [](treegrid/api/treegrid_collapse_method.md)          | @getshort(treegrid/api/treegrid_collapse_method.md)          |
| [](treegrid/api/treegrid_collapseall_method.md)       | @getshort(treegrid/api/treegrid_collapseall_method.md)       |
| [](treegrid/api/treegrid_destructor_method.md)        | @getshort(treegrid/api/treegrid_destructor_method.md)        |
| [](treegrid/api/treegrid_editcell_method.md)          | @getshort(treegrid/api/treegrid_editcell_method.md)          |
| [](treegrid/api/treegrid_editend_method.md)           | @getshort(treegrid/api/treegrid_editend_method.md)           |
| [](treegrid/api/treegrid_expand_method.md)            | @getshort(treegrid/api/treegrid_expand_method.md)            |
| [](treegrid/api/treegrid_expandall_method.md)         | @getshort(treegrid/api/treegrid_expandall_method.md)         |
| [](treegrid/api/treegrid_getcellrect_method.md)       | @getshort(treegrid/api/treegrid_getcellrect_method.md)       |
| [](treegrid/api/treegrid_getcolumn_method.md)         | @getshort(treegrid/api/treegrid_getcolumn_method.md)         |
| [](treegrid/api/treegrid_getheaderfilter_method.md)   | @getshort(treegrid/api/treegrid_getheaderfilter_method.md)   |
| [](treegrid/api/treegrid_getscrollstate_method.md)    | @getshort(treegrid/api/treegrid_getscrollstate_method.md)    |
| [](treegrid/api/treegrid_getsortingstate_method.md)   | @getshort(treegrid/api/treegrid_getsortingstate_method.md)   |
| [](treegrid/api/treegrid_getspan_method.md)           | @getshort(treegrid/api/treegrid_getspan_method.md)           |
| [](treegrid/api/treegrid_groupby_method.md)           | @getshort(treegrid/api/treegrid_groupby_method.md)           |
| [](treegrid/api/treegrid_hidecolumn_method.md)        | @getshort(treegrid/api/treegrid_hidecolumn_method.md)        |
| [](treegrid/api/treegrid_hiderow_method.md)           | @getshort(treegrid/api/treegrid_hiderow_method.md)           |
| [](treegrid/api/treegrid_iscolumnhidden_method.md)    | @getshort(treegrid/api/treegrid_iscolumnhidden_method.md)    |
| [](treegrid/api/treegrid_isrowhidden_method.md)       | @getshort(treegrid/api/treegrid_isrowhidden_method.md)       |
| [](treegrid/api/treegrid_paint_method.md)             | @getshort(treegrid/api/treegrid_paint_method.md)             |
| [](treegrid/api/treegrid_removecellcss_method.md)     | @getshort(treegrid/api/treegrid_removecellcss_method.md)     |
| [](treegrid/api/treegrid_removerowcss_method.md)      | @getshort(treegrid/api/treegrid_removerowcss_method.md)      |
| [](treegrid/api/treegrid_removespan_method.md)        | @getshort(treegrid/api/treegrid_removespan_method.md)        |
| [](treegrid/api/treegrid_scroll_method.md)            | @getshort(treegrid/api/treegrid_scroll_method.md)            |
| [](treegrid/api/treegrid_scrollto_method.md)          | @getshort(treegrid/api/treegrid_scrollto_method.md)          |
| [](treegrid/api/treegrid_setcolumns_method.md)        | @getshort(treegrid/api/treegrid_setcolumns_method.md)        |
| [](treegrid/api/treegrid_showcolumn_method.md)        | @getshort(treegrid/api/treegrid_showcolumn_method.md)        |
| [](treegrid/api/treegrid_showrow_method.md)           | @getshort(treegrid/api/treegrid_showrow_method.md)           |
| [](treegrid/api/treegrid_ungroup_method.md)           | @getshort(treegrid/api/treegrid_ungroup_method.md)           |

:::info important
- Use [TreeCollection methods](tree_collection/index.md) to work with data. 
- А для работы с выделением (?) используйте методы Selection. (todo свести Selection разных виджетов в таблицу, а потом попробовать вынести в Helpers c третьей колонкой для какого виджета применимо)
:::

## TreeGrid events

| Name                                                    | Description                                                    |
| ------------------------------------------------------- | -------------------------------------------------------------- |
| [](treegrid/api/treegrid_aftercollapse_event.md)        | @getshort(treegrid/api/treegrid_aftercollapse_event.md)        |
| [](treegrid/api/treegrid_aftercolumndrag_event.md)      | @getshort(treegrid/api/treegrid_aftercolumndrag_event.md)      |
| [](treegrid/api/treegrid_aftercolumndrop_event.md)      | @getshort(treegrid/api/treegrid_aftercolumndrop_event.md)      |
| [](treegrid/api/treegrid_aftercolumnhide_event.md)      | @getshort(treegrid/api/treegrid_aftercolumnhide_event.md)      |
| [](treegrid/api/treegrid_aftercolumnshow_event.md)      | @getshort(treegrid/api/treegrid_aftercolumnshow_event.md)      |
| [](treegrid/api/treegrid_aftereditend_event.md)         | @getshort(treegrid/api/treegrid_aftereditend_event.md)         |
| [](treegrid/api/treegrid_aftereditstart_event.md)       | @getshort(treegrid/api/treegrid_aftereditstart_event.md)       |
| [](treegrid/api/treegrid_afterexpand_event.md)          | @getshort(treegrid/api/treegrid_afterexpand_event.md)          |
| [](treegrid/api/treegrid_afterresizeend_event.md)       | @getshort(treegrid/api/treegrid_afterresizeend_event.md)       |
| [](treegrid/api/treegrid_afterrowdrag_event.md)         | @getshort(treegrid/api/treegrid_afterrowdrag_event.md)         |
| [](treegrid/api/treegrid_afterrowdrop_event.md)         | @getshort(treegrid/api/treegrid_afterrowdrop_event.md)         |
| [](treegrid/api/treegrid_afterrowhide_event.md)         | @getshort(treegrid/api/treegrid_afterrowhide_event.md)         |
| [](treegrid/api/treegrid_afterrowshow_event.md)         | @getshort(treegrid/api/treegrid_afterrowshow_event.md)         |
| [](treegrid/api/treegrid_beforecollapse_event.md)       | @getshort(treegrid/api/treegrid_beforecollapse_event.md)       |
| [](treegrid/api/treegrid_beforecolumndrag_event.md)     | @getshort(treegrid/api/treegrid_beforecolumndrag_event.md)     |
| [](treegrid/api/treegrid_beforecolumndrop_event.md)     | @getshort(treegrid/api/treegrid_beforecolumndrop_event.md)     |
| [](treegrid/api/treegrid_beforecolumnhide_event.md)     | @getshort(treegrid/api/treegrid_beforecolumnhide_event.md)     |
| [](treegrid/api/treegrid_beforecolumnshow_event.md)     | @getshort(treegrid/api/treegrid_beforecolumnshow_event.md)     |
| [](treegrid/api/treegrid_beforeeditend_event.md)        | @getshort(treegrid/api/treegrid_beforeeditend_event.md)        |
| [](treegrid/api/treegrid_beforeeditstart_event.md)      | @getshort(treegrid/api/treegrid_beforeeditstart_event.md)      |
| [](treegrid/api/treegrid_beforeexpand_event.md)         | @getshort(treegrid/api/treegrid_beforeexpand_event.md)         |
| [](treegrid/api/treegrid_beforeresizestart_event.md)    | @getshort(treegrid/api/treegrid_beforeresizestart_event.md)    |
| [](treegrid/api/treegrid_beforerowdrag_event.md)        | @getshort(treegrid/api/treegrid_beforerowdrag_event.md)        |
| [](treegrid/api/treegrid_beforerowdrop_event.md)        | @getshort(treegrid/api/treegrid_beforerowdrop_event.md)        |
| [](treegrid/api/treegrid_beforerowhide_event.md)        | @getshort(treegrid/api/treegrid_beforerowhide_event.md)        |
| [](treegrid/api/treegrid_beforerowshow_event.md)        | @getshort(treegrid/api/treegrid_beforerowshow_event.md)        |
| [](treegrid/api/treegrid_cancelcolumndrop_event.md)     | @getshort(treegrid/api/treegrid_cancelcolumndrop_event.md)     |
| [](treegrid/api/treegrid_cancelrowdrop_event.md)        | @getshort(treegrid/api/treegrid_cancelrowdrop_event.md)        |
| [](treegrid/api/treegrid_cancolumndrop_event.md)        | @getshort(treegrid/api/treegrid_cancolumndrop_event.md)        |
| [](treegrid/api/treegrid_canrowdrop_event.md)           | @getshort(treegrid/api/treegrid_canrowdrop_event.md)           |
| [](treegrid/api/treegrid_cellclick_event.md)            | @getshort(treegrid/api/treegrid_cellclick_event.md)            |
| [](treegrid/api/treegrid_celldblclick_event.md)         | @getshort(treegrid/api/treegrid_celldblclick_event.md)         |
| [](treegrid/api/treegrid_cellmousedown_event.md)        | @getshort(treegrid/api/treegrid_cellmousedown_event.md)        |
| [](treegrid/api/treegrid_cellmouseover_event.md)        | @getshort(treegrid/api/treegrid_cellmouseover_event.md)        |
| [](treegrid/api/treegrid_cellrightclick_event.md)       | @getshort(treegrid/api/treegrid_cellrightclick_event.md)       |
| [](treegrid/api/treegrid_dragcolumnin_event.md)         | @getshort(treegrid/api/treegrid_dragcolumnin_event.md)         |
| [](treegrid/api/treegrid_dragcolumnout_event.md)        | @getshort(treegrid/api/treegrid_dragcolumnout_event.md)        |
| [](treegrid/api/treegrid_dragcolumnstart_event.md)      | @getshort(treegrid/api/treegrid_dragcolumnstart_event.md)      |
| [](treegrid/api/treegrid_dragrowin_event.md)            | @getshort(treegrid/api/treegrid_dragrowin_event.md)            |
| [](treegrid/api/treegrid_dragrowout_event.md)           | @getshort(treegrid/api/treegrid_dragrowout_event.md)           |
| [](treegrid/api/treegrid_dragrowstart_event.md)         | @getshort(treegrid/api/treegrid_dragrowstart_event.md)         |
| [](treegrid/api/treegrid_expand_event.md)               | @getshort(treegrid/api/treegrid_expand_event.md)               |
| [](treegrid/api/treegrid_filterchange_event.md)         | @getshort(treegrid/api/treegrid_filterchange_event.md)         |
| [](treegrid/api/treegrid_footercellclick_event.md)      | @getshort(treegrid/api/treegrid_footercellclick_event.md)      |
| [](treegrid/api/treegrid_footercelldblclick_event.md)   | @getshort(treegrid/api/treegrid_footercelldblclick_event.md)   |
| [](treegrid/api/treegrid_footercellmousedown_event.md)  | @getshort(treegrid/api/treegrid_footercellmousedown_event.md)  |
| [](treegrid/api/treegrid_footercellmouseover_event.md)  | @getshort(treegrid/api/treegrid_footercellmouseover_event.md)  |
| [](treegrid/api/treegrid_footercellrightclick_event.md) | @getshort(treegrid/api/treegrid_footercellrightclick_event.md) |
| [](treegrid/api/treegrid_headercellclick_event.md)      | @getshort(treegrid/api/treegrid_headercellclick_event.md)      |
| [](treegrid/api/treegrid_headercelldblclick_event.md)   | @getshort(treegrid/api/treegrid_headercelldblclick_event.md)   |
| [](treegrid/api/treegrid_headercellmousedown_event.md)  | @getshort(treegrid/api/treegrid_headercellmousedown_event.md)  |
| [](treegrid/api/treegrid_headercellmouseover_event.md)  | @getshort(treegrid/api/treegrid_headercellmouseover_event.md)  |
| [](treegrid/api/treegrid_headercellrightclick_event.md) | @getshort(treegrid/api/treegrid_headercellrightclick_event.md) |
| [](treegrid/api/treegrid_resize_event.md)               | @getshort(treegrid/api/treegrid_resize_event.md)               |
| [](treegrid/api/treegrid_scroll_event.md)               | @getshort(treegrid/api/treegrid_scroll_event.md)               |

:::info important
- Use [TreeCollection events](tree_collection/index.md#events) to work with data. 
- А для работы с выделением (?) используйте события Selection. (todo свести Selection разных виджетов в таблицу, а потом попробовать вынести в Helpers c третьей колонкой для какого виджета применимо)
:::

## TreeGrid properties

| Name                                                   | Description                                                   |
| ------------------------------------------------------ | ------------------------------------------------------------- |
| [](treegrid/api/treegrid_adjust_config.md)             | @getshort(treegrid/api/treegrid_adjust_config.md)             |
| [](treegrid/api/treegrid_autoemptyrow_config.md)       | @getshort(treegrid/api/treegrid_autoemptyrow_config.md)       |
| [](treegrid/api/treegrid_autowidth_config.md)          | @getshort(treegrid/api/treegrid_autowidth_config.md)          |
| [](treegrid/api/treegrid_columns_config.md)            | @getshort(treegrid/api/treegrid_columns_config.md)            |
| [](treegrid/api/treegrid_css_config.md)                | @getshort(treegrid/api/treegrid_css_config.md)                |
| [](treegrid/api/treegrid_data_config.md)               | @getshort(treegrid/api/treegrid_data_config.md)               |
| [](treegrid/api/treegrid_dragcopy_config.md)           | @getshort(treegrid/api/treegrid_dragcopy_config.md)           |
| [](treegrid/api/treegrid_dragitem_config.md)           | @getshort(treegrid/api/treegrid_dragitem_config.md)           |
| [](treegrid/api/treegrid_dragmode_config.md)           | @getshort(treegrid/api/treegrid_dragmode_config.md)           |
| [](treegrid/api/treegrid_editable_config.md)           | @getshort(treegrid/api/treegrid_editable_config.md)           |
| [](treegrid/api/treegrid_eventhandlers_config.md)      | @getshort(treegrid/api/treegrid_eventhandlers_config.md)      |
| [](treegrid/api/treegrid_footerrowheight_config.md)    | @getshort(treegrid/api/treegrid_footerrowheight_config.md)    |
| [](treegrid/api/treegrid_grouptitletemplate_config.md) | @getshort(treegrid/api/treegrid_grouptitletemplate_config.md) |
| [](treegrid/api/treegrid_headerrowheight_config.md)    | @getshort(treegrid/api/treegrid_headerrowheight_config.md)    |
| [](treegrid/api/treegrid_height_config.md)             | @getshort(treegrid/api/treegrid_height_config.md)             |
| [](treegrid/api/treegrid_htmlenable_config.md)         | @getshort(treegrid/api/treegrid_htmlenable_config.md)         |
| [](treegrid/api/treegrid_leftsplit_config.md)          | @getshort(treegrid/api/treegrid_leftsplit_config.md)          |
| [](treegrid/api/treegrid_resizable_config.md)          | @getshort(treegrid/api/treegrid_resizable_config.md)          |
| [](treegrid/api/treegrid_rowcss_config.md)             | @getshort(treegrid/api/treegrid_rowcss_config.md)             |
| [](treegrid/api/treegrid_rowheight_config.md)          | @getshort(treegrid/api/treegrid_rowheight_config.md)          |
| [](treegrid/api/treegrid_selection_config.md)          | @getshort(treegrid/api/treegrid_selection_config.md)          |
| [](treegrid/api/treegrid_sortable_config.md)           | @getshort(treegrid/api/treegrid_sortable_config.md)           |
| [](treegrid/api/treegrid_spans_config.md)              | @getshort(treegrid/api/treegrid_spans_config.md)              |
| [](treegrid/api/treegrid_tooltip_config.md)            | @getshort(treegrid/api/treegrid_tooltip_config.md)            |
| [](treegrid/api/treegrid_width_config.md)              | @getshort(treegrid/api/treegrid_width_config.md)              |

## Column properties

See the list of all the available configuration properties of a TreeGrid column [here](treegrid/api/api_treegridcolumn_properties.md).