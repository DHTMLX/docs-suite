---
sidebar_label: API overview
title: Grid API overview
---

## Grid methods

| Name                                          | Description                                          |
| --------------------------------------------- | ---------------------------------------------------- |
| [](grid/api/grid_addcellcss_method.md)        | @getshort(grid/api/grid_addcellcss_method.md)        |
| [](grid/api/grid_addrowcss_method.md)         | @getshort(grid/api/grid_addrowcss_method.md)         |
| [](grid/api/grid_addspan_method.md)           | @getshort(grid/api/grid_addspan_method.md)           |
| [](grid/api/grid_adjustcolumnwidth_method.md) | @getshort(grid/api/grid_adjustcolumnwidth_method.md) |
| [](grid/api/grid_cellmousedown_event.md)      | @getshort(grid/api/grid_cellmousedown_event.md)      |
| [](grid/api/grid_destructor_method.md)        | @getshort(grid/api/grid_destructor_method.md)        |
| [](grid/api/grid_editcell_method.md)          | @getshort(grid/api/grid_editcell_method.md)          |
| [](grid/api/grid_editend_method.md)           | @getshort(grid/api/grid_editend_method.md)           |
| [](grid/api/grid_getcellrect_method.md)       | @getshort(grid/api/grid_getcellrect_method.md)       |
| [](grid/api/grid_getcolumn_method.md)         | @getshort(grid/api/grid_getcolumn_method.md)         |
| [](grid/api/grid_getheaderfilter_method.md)   | @getshort(grid/api/grid_getheaderfilter_method.md)   |
| [](grid/api/grid_getscrollstate_method.md)    | @getshort(grid/api/grid_getscrollstate_method.md)    |
| [](grid/api/grid_getsortingstate_method.md)   | @getshort(grid/api/grid_getsortingstate_method.md)   |
| [](grid/api/grid_getspan_method.md)           | @getshort(grid/api/grid_getspan_method.md)           |
| [](grid/api/grid_hidecolumn_method.md)        | @getshort(grid/api/grid_hidecolumn_method.md)        |
| [](grid/api/grid_hiderow_method.md)           | @getshort(grid/api/grid_hiderow_method.md)           |
| [](grid/api/grid_iscolumnhidden_method.md)    | @getshort(grid/api/grid_iscolumnhidden_method.md)    |
| [](grid/api/grid_isrowhidden_method.md)       | @getshort(grid/api/grid_isrowhidden_method.md)       |
| [](grid/api/grid_paint_method.md)             | @getshort(grid/api/grid_paint_method.md)             |
| [](grid/api/grid_removecellcss_method.md)     | @getshort(grid/api/grid_removecellcss_method.md)     |
| [](grid/api/grid_removerowcss_method.md)      | @getshort(grid/api/grid_removerowcss_method.md)      |
| [](grid/api/grid_removespan_method.md)        | @getshort(grid/api/grid_removespan_method.md)        |
| [](grid/api/grid_scroll_method.md)            | @getshort(grid/api/grid_scroll_method.md)            |
| [](grid/api/grid_scrollto_method.md)          | @getshort(grid/api/grid_scrollto_method.md)          |
| [](grid/api/grid_setcolumns_method.md)        | @getshort(grid/api/grid_setcolumns_method.md)        |
| [](grid/api/grid_showcolumn_method.md)        | @getshort(grid/api/grid_showcolumn_method.md)        |
| [](grid/api/grid_showrow_method.md)           | @getshort(grid/api/grid_showrow_method.md)           |

:::info important
- Use [DataCollection methods](data_collection/index.md) to work with data. 
- А для работы с выделением (?) используйте методы Selection. (todo свести Selection разных виджетов в таблицу, а потом попробовать вынести в Helpers c третьей колонкой для какого виджета применимо)
:::

## Grid events

| Name                                            | Description                                         |
| ----------------------------------------------- | --------------------------------------------------- |
| [](grid/api/grid_aftercolumndrag_event.md)      | @getshort(grid/api/grid_aftercolumndrag_event)      |
| [](grid/api/grid_aftercolumndrop_event.md)      | @getshort(grid/api/grid_aftercolumndrop_event)      |
| [](grid/api/grid_aftercolumnhide_event.md)      | @getshort(grid/api/grid_aftercolumnhide_event)      |
| [](grid/api/grid_aftercolumnshow_event.md)      | @getshort(grid/api/grid_aftercolumnshow_event)      |
| [](grid/api/grid_aftereditend_event.md)         | @getshort(grid/api/grid_aftereditend_event)         |
| [](grid/api/grid_aftereditstart_event.md)       | @getshort(grid/api/grid_aftereditstart_event)       |
| [](grid/api/grid_afterkeydown_event.md)         | @getshort(grid/api/grid_afterkeydown_event)         |
| [](grid/api/grid_afterresizeend_event.md)       | @getshort(grid/api/grid_afterresizeend_event)       |
| [](grid/api/grid_afterrowdrag_event.md)         | @getshort(grid/api/grid_afterrowdrag_event)         |
| [](grid/api/grid_afterrowdrop_event.md)         | @getshort(grid/api/grid_afterrowdrop_event)         |
| [](grid/api/grid_afterrowhide_event.md)         | @getshort(grid/api/grid_afterrowhide_event)         |
| [](grid/api/grid_afterrowshow_event.md)         | @getshort(grid/api/grid_afterrowshow_event)         |
| [](grid/api/grid_beforecolumndrag_event.md)     | @getshort(grid/api/grid_beforecolumndrag_event)     |
| [](grid/api/grid_beforecolumndrop_event.md)     | @getshort(grid/api/grid_beforecolumndrop_event)     |
| [](grid/api/grid_beforecolumnhide_event.md)     | @getshort(grid/api/grid_beforecolumnhide_event)     |
| [](grid/api/grid_beforecolumnshow_event.md)     | @getshort(grid/api/grid_beforecolumnshow_event)     |
| [](grid/api/grid_beforeeditend_event.md)        | @getshort(grid/api/grid_beforeeditend_event)        |
| [](grid/api/grid_beforeeditstart_event.md)      | @getshort(grid/api/grid_beforeeditstart_event)      |
| [](grid/api/grid_beforekeydown_event.md)        | @getshort(grid/api/grid_beforekeydown_event)        |
| [](grid/api/grid_beforeresizestart_event.md)    | @getshort(grid/api/grid_beforeresizestart_event)    |
| [](grid/api/grid_beforerowdrag_event.md)        | @getshort(grid/api/grid_beforerowdrag_event)        |
| [](grid/api/grid_beforerowdrop_event.md)        | @getshort(grid/api/grid_beforerowdrop_event)        |
| [](grid/api/grid_beforerowhide_event.md)        | @getshort(grid/api/grid_beforerowhide_event)        |
| [](grid/api/grid_beforerowshow_event.md)        | @getshort(grid/api/grid_beforerowshow_event)        |
| [](grid/api/grid_cancelcolumndrop_event.md)     | @getshort(grid/api/grid_cancelcolumndrop_event)     |
| [](grid/api/grid_cancelrowdrop_event.md)        | @getshort(grid/api/grid_cancelrowdrop_event)        |
| [](grid/api/grid_cancolumndrop_event.md)        | @getshort(grid/api/grid_cancolumndrop_event)        |
| [](grid/api/grid_canrowdrop_event.md)           | @getshort(grid/api/grid_canrowdrop_event)           |
| [](grid/api/grid_cellclick_event.md)            | @getshort(grid/api/grid_cellclick_event)            |
| [](grid/api/grid_celldblclick_event.md)         | @getshort(grid/api/grid_celldblclick_event)         |
| [](grid/api/grid_cellmouseover_event.md)        | @getshort(grid/api/grid_cellmouseover_event)        |
| [](grid/api/grid_cellrightclick_event.md)       | @getshort(grid/api/grid_cellrightclick_event)       |
| [](grid/api/grid_dragcolumnin_event.md)         | @getshort(grid/api/grid_dragcolumnin_event)         |
| [](grid/api/grid_dragcolumnout_event.md)        | @getshort(grid/api/grid_dragcolumnout_event)        |
| [](grid/api/grid_dragcolumnstart_event.md)      | @getshort(grid/api/grid_dragcolumnstart_event)      |
| [](grid/api/grid_dragrowin_event.md)            | @getshort(grid/api/grid_dragrowin_event)            |
| [](grid/api/grid_dragrowout_event.md)           | @getshort(grid/api/grid_dragrowout_event)           |
| [](grid/api/grid_dragrowstart_event.md)         | @getshort(grid/api/grid_dragrowstart_event)         |
| [](grid/api/grid_expand_event.md)               | @getshort(grid/api/grid_expand_event)               |
| [](grid/api/grid_filterchange_event.md)         | @getshort(grid/api/grid_filterchange_event)         |
| [](grid/api/grid_footercellclick_event.md)      | @getshort(grid/api/grid_footercellclick_event)      |
| [](grid/api/grid_footercelldblclick_event.md)   | @getshort(grid/api/grid_footercelldblclick_event)   |
| [](grid/api/grid_footercellmousedown_event.md)  | @getshort(grid/api/grid_footercellmousedown_event)  |
| [](grid/api/grid_footercellmouseover_event.md)  | @getshort(grid/api/grid_footercellmouseover_event)  |
| [](grid/api/grid_footercellrightclick_event.md) | @getshort(grid/api/grid_footercellrightclick_event) |
| [](grid/api/grid_headercellclick_event.md)      | @getshort(grid/api/grid_headercellclick_event)      |
| [](grid/api/grid_headercelldblclick_event.md)   | @getshort(grid/api/grid_headercelldblclick_event)   |
| [](grid/api/grid_headercellmousedown_event.md)  | @getshort(grid/api/grid_headercellmousedown_event)  |
| [](grid/api/grid_headercellmouseover_event.md)  | @getshort(grid/api/grid_headercellmouseover_event)  |
| [](grid/api/grid_headercellrightclick_event.md) | @getshort(grid/api/grid_headercellrightclick_event) |
| [](grid/api/grid_resize_event.md)               | @getshort(grid/api/grid_resize_event)               |
| [](grid/api/grid_scroll_event.md)               | @getshort(grid/api/grid_scroll_event)               |

:::info important
- Use [DataCollection events](data_collection/index.md#events) to work with data. 
- А для работы с выделением (?) используйте события Selection. (todo свести Selection разных виджетов в таблицу, а потом попробовать вынести в Helpers c третьей колонкой для какого виджета применимо)
:::

## Grid properties

| Name                                         | Description                                      |
| -------------------------------------------- | ------------------------------------------------ |
| [](grid/api/grid_adjust_config.md)           | @getshort(grid/api/grid_adjust_config)           |
| [](grid/api/grid_autoemptyrow_config.md)     | @getshort(grid/api/grid_autoemptyrow_config)     |
| [](grid/api/grid_autowidth_config.md)        | @getshort(grid/api/grid_autowidth_config)        |
| [](grid/api/grid_columns_config.md)          | @getshort(grid/api/grid_columns_config)          |
| [](grid/api/grid_css_config.md)              | @getshort(grid/api/grid_css_config)              |
| [](grid/api/grid_data_config.md)             | @getshort(grid/api/grid_data_config)             |
| [](grid/api/grid_dragcopy_config.md)         | @getshort(grid/api/grid_dragcopy_config)         |
| [](grid/api/grid_dragitem_config.md)         | @getshort(grid/api/grid_dragitem_config)         |
| [](grid/api/grid_dragmode_config.md)         | @getshort(grid/api/grid_dragmode_config)         |
| [](grid/api/grid_editable_config.md)         | @getshort(grid/api/grid_editable_config)         |
| [](grid/api/grid_eventhandlers_config.md)    | @getshort(grid/api/grid_eventhandlers_config)    |
| [](grid/api/grid_footerrowheight_config.md)  | @getshort(grid/api/grid_footerrowheight_config)  |
| [](grid/api/grid_headerrowheight_config.md)  | @getshort(grid/api/grid_headerrowheight_config)  |
| [](grid/api/grid_height_config.md)           | @getshort(grid/api/grid_height_config)           |
| [](grid/api/grid_htmlenable_config.md)       | @getshort(grid/api/grid_htmlenable_config)       |
| [](grid/api/grid_keynavigation_config.md)    | @getshort(grid/api/grid_keynavigation_config)    |
| [](grid/api/grid_leftsplit_config.md)        | @getshort(grid/api/grid_leftsplit_config)        |
| [](grid/api/grid_multiselection_config.md)   | @getshort(grid/api/grid_multiselection_config)   |
| [](grid/api/grid_resizable_config.md)        | @getshort(grid/api/grid_resizable_config)        |
| [](grid/api/grid_rowcss_config.md)           | @getshort(grid/api/grid_rowcss_config)           |
| [](grid/api/grid_rowheight_config.md)        | @getshort(grid/api/grid_rowheight_config)        |
| [](grid/api/grid_selection_config.md)        | @getshort(grid/api/grid_selection_config)        |
| [](grid/api/grid_sortable_config.md)         | @getshort(grid/api/grid_sortable_config)         |
| [](grid/api/grid_spans_config.md)            | @getshort(grid/api/grid_spans_config)            |
| [](grid/api/grid_tooltip_config.md)          | @getshort(grid/api/grid_tooltip_config)          |
| [](grid/api/grid_width_config.md)            | @getshort(grid/api/grid_width_config)            |

## Column properties

See the list of all the available configuration properties of a Grid column [here](grid/api/api_gridcolumn_properties.md).