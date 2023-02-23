module.exports = {
  docs: [
    {
      type: "doc",
      id: "index",
    },
    {
      type: "category",
      label: "What's new and migration",
      link: {
        type: 'generated-index',
        title: "What's new and migration",
        keywords: ['news'],
        image: '/img/docusaurus.png'
      },
      items: [
        "whatsnew",
        "migration",
      ],
    },
    //todo How to start нет (папка tutorial, они сильно устрели)
    //start Creating app
    {
      type: "category",
      label: "Creating app and binding widgets",
      link: {
        type: 'generated-index',
        title: "Creating app and binding widgets",
        keywords: ['creating app and binding widgets'],
        image: '/img/docusaurus.png'
      },
      items: [
        /*{
          type: "category",
          label: "With Optimus",
          items: [*/
            "optimus_guides/index",
            "optimus_guides/how_to_start_optimus",
            "optimus_guides/filemanager_demo",
            "optimus_guides/dashboard_demo",
            "optimus_guides/hotel_demo",
            "optimus_guides/geotracking_demo",
            "optimus_guides/kpi_demo",
            "optimus_guides/hospital_demo",
            "optimus_guides/exam_demo",
          //],
        //},
      ],
    },
    // end Creating app

    {
      type: "category",
      label: "Widgets",
      // collapsed: false,
      link: {
        type: 'generated-index',
        title: "Widgets",
        keywords: ['widgets'],
        image: '/img/docusaurus.png'
      },
      items: [
        //Calendar
        {
          type: "category",
          label: "Calendar",
          collapsed: true,
          /*link: {
            type: 'generated-index',
            title: "Calendar",
            keywords: ['calendar'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "calendar/index"
          },
          items: [
            //"calendar/index",
            {
              type: "category",
              label: "Calendar API",
              link: {
                type: 'doc',
                id: "calendar/api/api_overview"
              },
              items: [
                //"calendar/api/api_overview",
                {
                  type: "category",
                  label: "Calendar methods",
                  link: {
                    type: 'generated-index',
                    title: "Calendar methods",
                    keywords: ['calendar methods'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    id: "calendar/api/overview/methods_overview"
                  },*/
                  items: [
                    "calendar/api/calendar_clear_method",
                    "calendar/api/calendar_destructor_method",
                    "calendar/api/calendar_getcurrentmode_method",
                    "calendar/api/calendar_getvalue_method",
                    "calendar/api/calendar_link_method",
                    "calendar/api/calendar_paint_method",
                    "calendar/api/calendar_setvalue_method",
                    "calendar/api/calendar_showdate_method",
                  ],
                },
                {
                  type: "category",
                  label: "Calendar events",
                  link: {
                    type: 'generated-index',
                    title: "Calendar events",
                    keywords: ['calendar events'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    id: "calendar/api/overview/events_overview"
                  },*/
                  items: [
                    "calendar/api/calendar_beforechange_event",
                    "calendar/api/calendar_cancelclick_event",
                    "calendar/api/calendar_change_event",
                    "calendar/api/calendar_datemouseover_event",
                    "calendar/api/calendar_modechange_event",
                    "calendar/api/calendar_monthselected_event",
                    "calendar/api/calendar_yearselected_event",
                  ],
                },
                {
                  type: "category",
                  label: "Calendar properties",
                  link: {
                    type: 'generated-index',
                    title: "Calendar properties",
                    keywords: ['calendar properties'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    id: "calendar/api/overview/properties_overview"
                  },*/
                  items: [
                    "calendar/api/calendar_css_config",
                    "calendar/api/calendar_date_config",
                    "calendar/api/calendar_dateformat_config",
                    "calendar/api/calendar_disableddates_config",
                    "calendar/api/calendar_mark_config",
                    "calendar/api/calendar_mode_config",
                    "calendar/api/calendar_range_config",
                    "calendar/api/calendar_thismonthonly_config",
                    "calendar/api/calendar_timeformat_config",
                    "calendar/api/calendar_timepicker_config",
                    "calendar/api/calendar_value_config",
                    "calendar/api/calendar_weeknumbers_config",
                    "calendar/api/calendar_weekstart_config",
                    "calendar/api/calendar_width_config",
                  ],
                },
              ],
            },
            "calendar/features",
            "calendar/how_to_start",
            "calendar/configuring",
            "calendar/localizing_calendar",
            "calendar/operating_calendar",
            "calendar/datepicker",
            // "calendar/api",
            "calendar/customization",
            "calendar/handling_events",
          ],
        },
        // end Calendar

        //Chart
        {
          type: "category",
          label: "Chart",
          /*link: {
            type: 'generated-index',
            title: "Chart",
            keywords: ['chart'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "chart/index"
          },
          items: [
            //"chart/index",
            {
              type: "category",
              label: "Chart API",
              collapsed: true,
              link: {
                type: 'doc',
                id: "chart/api/api_overview"
              },
              items: [
                //"chart/api/api_overview",
                {
                  type: "category",
                  label: "Chart methods",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Chart methods",
                    keywords: ['Chart methods'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    id: "chart/api/overview/methods_overview"
                  },*/
                  items: [
                    "chart/api/chart_destructor_method",
                    "chart/api/chart_eachseries_method",
                    "chart/api/chart_getseries_method",
                    "chart/api/chart_paint_method",
                    "chart/api/chart_setconfig_method",
                  ],
                },
                {
                  type: "category",
                  label: "Chart events",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Chart events",
                    keywords: ['Chart events'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    id: "chart/api/overview/events_overview"
                  },*/
                  items: [
                    "chart/api/chart_resize_event",
                    "chart/api/chart_serieclick_event",
                    "chart/api/chart_toggleseries_event",
                  ],
                },
                {
                  type: "category",
                  label: "Chart properties",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Chart properties",
                    keywords: ['chart properties'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    id: "chart/api/overview/properties_overview"
                  },*/
                  items: [
                    "chart/api/chart_css_config",
                    "chart/api/chart_data_config",
                    "chart/api/chart_legend_config",
                    "chart/api/chart_maxpoints_config",
                    "chart/api/chart_scales_config",
                    "chart/api/chart_series_config",
                    "chart/api/chart_type_config",
                  ],
                },
                {
                  type: "category",
                  label: "Export methods",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Export methods",
                    keywords: ['Export methods'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "chart/api/export/chart_png_method",
                    "chart/api/export/chart_pdf_method"
                  ],
                },
              ],
            },
            "chart/charts_overview",
            "chart/features",
            "chart/initialization",
            "chart/configuration_properties",
            "chart/data_loading",
            "chart/usage",
            "chart/customization",
            "chart/events",
          ],
        },
        // end Chart

        //Colorpicker
        {
          type: "category",
          label: "Colorpicker",
          /*link: {
            type: 'generated-index',
            title: "Colorpicker",
            keywords: ['colorpicker'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "colorpicker/index"
          },
          items: [
            //"colorpicker/index",
            {
              type: "category",
              label: "Colorpicker API",
              link: {
                type: 'doc',
                id: "colorpicker/api/api_overview"
              },
              items: [
                //"colorpicker/api/api_overview",
                {
                  type: "category",
                  label: "Colorpicker methods",
                  link: {
                    type: 'generated-index',
                    title: "Colorpicker methods",
                    keywords: ['colorpicker methods'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    //id: "colorpicker/api/api_overview"
                    id: "colorpicker/api/overview/methods_overview"
                  },*/
                  items: [
                    "colorpicker/api/colorpicker_clear_method",
                    "colorpicker/api/colorpicker_destructor_method",
                    "colorpicker/api/colorpicker_getcurrentmode_method",
                    "colorpicker/api/colorpicker_getcustomcolors_method",
                    "colorpicker/api/colorpicker_getvalue_method",
                    "colorpicker/api/colorpicker_paint_method",
                    "colorpicker/api/colorpicker_setcurrentmode_method",
                    "colorpicker/api/colorpicker_setcustomcolors_method",
                    "colorpicker/api/colorpicker_setfocus_method",
                    "colorpicker/api/colorpicker_setvalue_method",
                  ],
                },
                {
                  type: "category",
                  label: "Colorpicker events",
                  link: {
                    type: 'generated-index',
                    title: "Colorpicker events",
                    keywords: ['colorpicker events'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    //id: "colorpicker/api/api_overview"
                    id: "colorpicker/api/overview/events_overview"
                  },*/
                  items: [
                    "colorpicker/api/colorpicker_apply_event",
                    "colorpicker/api/colorpicker_beforechange_event",
                    "colorpicker/api/colorpicker_cancelclick_event",
                    "colorpicker/api/colorpicker_change_event",
                    "colorpicker/api/colorpicker_modechange_event",
                  ],
                },
                {
                  type: "category",
                  label: "Colorpicker properties",
                  link: {
                    type: 'generated-index',
                    title: "Colorpicker properties",
                    keywords: ['colorpicker properties'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    //id: "colorpicker/api/api_overview"
                    id: "colorpicker/api/overview/properties_overview"
                  },*/
                  items: [
                    "colorpicker/api/colorpicker_css_config",
                    "colorpicker/api/colorpicker_customcolors_config",
                    "colorpicker/api/colorpicker_grayshades_config",
                    "colorpicker/api/colorpicker_mode_config",
                    "colorpicker/api/colorpicker_palette_config",
                    "colorpicker/api/colorpicker_paletteonly_config",
                    "colorpicker/api/colorpicker_pickeronly_config",
                    "colorpicker/api/colorpicker_width_config",
                  ],
                },
              ],
            },
            "colorpicker/features",
            "colorpicker/how_to_start",
            "colorpicker/configuration",
            "colorpicker/localizing_colorpicker",
            "colorpicker/manipulating_colorpicker",
            "colorpicker/customization",
            "colorpicker/handling_events",
          ],
        },
        // end ColorPicker

        //Combobox
        {
          type: "category",
          label: "Combobox",
          /*link: {
            type: 'generated-index',
            title: "Combobox",
            keywords: ['combobox'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "combobox/index"
          },
          items: [
            //"combobox/index",
            {
              type: "category",
              label: "Combobox API",
              link: {
                type: 'doc',
                id: "combobox/api/api_overview",
              },
              items: [
                //"combobox/api/api_overview",
                {
                  type: "category",
                  label: "Combobox methods",
                  link: {
                    type: 'generated-index',
                    title: "Combobox methods",
                    keywords: ['combobox methods'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    //id: "combobox/api/api_overview",
                    id: "combobox/api/overview/methods_overview",
                  },*/
                  items: [
                    "combobox/api/combobox_addoption_method",
                    "combobox/api/combobox_blur_method",
                    "combobox/api/combobox_clear_method",
                    "combobox/api/combobox_destructor_method",
                    "combobox/api/combobox_disable_method",
                    "combobox/api/combobox_enable_method",
                    "combobox/api/combobox_focus_method",
                    "combobox/api/combobox_getvalue_method",
                    "combobox/api/combobox_isdisabled_method",
                    "combobox/api/combobox_paint_method",
                    "combobox/api/combobox_setvalue_method",
                  ],
                },
                {
                  type: "category",
                  label: "Combobox events",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Combobox events",
                    keywords: ['combobox events'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    //id: "combobox/api/api_overview",
                    id: "combobox/api/overview/events_overview",
                  },*/
                  items: [
                    "combobox/api/combobox_afterclose_event",
                    "combobox/api/combobox_afteropen_event",
                    "combobox/api/combobox_beforeclose_event",
                    "combobox/api/combobox_beforeopen_event",
                    "combobox/api/combobox_blur_event",
                    "combobox/api/combobox_change_event",
                    "combobox/api/combobox_focus_event",
                    "combobox/api/combobox_input_event",
                    "combobox/api/combobox_keydown_event",
                  ],
                },
                {
                  type: "category",
                  label: "Combobox properties",
                  link: {
                    type: 'generated-index',
                    title: "Combobox properties",
                    keywords: ['combobox properties'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    //id: "combobox/api/api_overview",
                    id: "combobox/api/overview/properties_overview",
                  },*/
                  items: [
                    "combobox/api/combobox_css_config",
                    "combobox/api/combobox_data_config",
                    "combobox/api/combobox_disabled_config",
                    "combobox/api/combobox_filter_config",
                    "combobox/api/combobox_helpmessage_config",
                    "combobox/api/combobox_hiddenlabel_config",
                    "combobox/api/combobox_htmlenable_config",
                    "combobox/api/combobox_itemheight_config",
                    "combobox/api/combobox_itemscount_config",
                    "combobox/api/combobox_label_config",
                    "combobox/api/combobox_labelposition_config",
                    "combobox/api/combobox_labelwidth_config",
                    "combobox/api/combobox_listheight_config",
                    "combobox/api/combobox_multiselection_config",
                    "combobox/api/combobox_newoptions_config",
                    "combobox/api/combobox_placeholder_config",
                    "combobox/api/combobox_readonly_config",
                    "combobox/api/combobox_selectallbutton_config",
                    "combobox/api/combobox_template_config",
                    "combobox/api/combobox_value_config",
                    "combobox/api/combobox_virtual_config"
                  ],
                },
              ],
            },
            "combobox/features",
            "combobox/how_to_start",
            "combobox/configuration",
            "combobox/localization",
            "combobox/adding_options",
            "combobox/work_with_combo",
            "combobox/customization",
            "combobox/handling_events",
          ],
        },
        // end Combobox

        //Dataview
        {
          type: "category",
          label: "DataView",
          /*link: {
            type: 'generated-index',
            title: "DataView",
            keywords: ['dataview'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "dataview/index"
          },
          items: [
           //"dataview/index",
            {
              type: "category",
              label: "DataView API",
              link: {
                type: 'doc',
                id: "dataview/api/api_overview",
              },
              items: [
                //"dataview/api/api_overview",
                {
                  type: "category",
                  label: "DataView methods",
                  link: {
                    type: 'generated-index',
                    title: "DataView methods",
                    keywords: ['dataview methods'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    id: "dataview/api/overview/methods_overview",
                  },*/
                  items: [
                    "dataview/api/dataview_destructor_method",
                    "dataview/api/dataview_edititem_method",
                    "dataview/api/dataview_getfocus_method",
                    "dataview/api/dataview_getfocusitem_method",
                    "dataview/api/dataview_paint_method",
                    "dataview/api/dataview_setfocus_method",
                  ],
                },
                {
                  type: "category",
                  label: "DataView events",
                  link: {
                    type: 'generated-index',
                    title: "DataView events",
                    keywords: ['dataview events'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    id: "dataview/api/overview/events_overview",
                  },*/
                  items: [
                    "dataview/api/dataview_afterdrag_event",
                    "dataview/api/dataview_afterdrop_event",
                    "dataview/api/dataview_aftereditend_event",
                    "dataview/api/dataview_aftereditstart_event",
                    "dataview/api/dataview_beforedrag_event",
                    "dataview/api/dataview_beforedrop_event",
                    "dataview/api/dataview_beforeeditend_event",
                    "dataview/api/dataview_beforeeditstart_event",
                    "dataview/api/dataview_canceldrop_event",
                    "dataview/api/dataview_candrop_event",
                    "dataview/api/dataview_click_event",
                    "dataview/api/dataview_doubleclick_event",
                    "dataview/api/dataview_dragin_event",
                    "dataview/api/dataview_dragout_event",
                    "dataview/api/dataview_dragstart_event",
                    "dataview/api/dataview_focuschange_event",
                    "dataview/api/dataview_itemmouseover_event",
                    "dataview/api/dataview_itemrightclick_event",
                  ],
                },
                {
                  type: "category",
                  label: "DataView properties",
                  link: {
                    type: 'generated-index',
                    title: "DataView properties",
                    keywords: ['dataview properties'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    id: "dataview/api/overview/properties_overview",
                  },*/
                  items: [
                    "dataview/api/dataview_css_config",
                    "dataview/api/dataview_data_config",
                    "dataview/api/dataview_dragcopy_config",
                    "dataview/api/dataview_dragmode_config",
                    "dataview/api/dataview_editable_config",
                    "dataview/api/dataview_eventhandlers_config",
                    "dataview/api/dataview_gap_config",
                    "dataview/api/dataview_height_config",
                    "dataview/api/dataview_itemheight_config",
                    "dataview/api/dataview_itemsinrow_config",
                    "dataview/api/dataview_keynavigation_config",
                    "dataview/api/dataview_multiselection_config",
                    "dataview/api/dataview_selection_config",
                    "dataview/api/dataview_template_config",
                  ],
                },
              ],
            },
            "dataview/features",
            "dataview/initialization",
            "dataview/configuration",
            "dataview/data_loading",
            "dataview/manipulating_data",
            "dataview/usage_selection",
            "dataview/customization",
            "dataview/events",
          ],
        },
        // end Dataview

        //Form
        {
          type: "category",
          label: "Form",
          collapsed: true,
          /*link: {
            type: 'generated-index',
            title: "Form",
            keywords: ['form'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "form/index"
          },
          items: [
            //"form/index",
            {
              type: "category",
              label: "Form API",
              collapsed: true,
              link: { 
                type: 'doc',
                id: "form/api/api_overview",
              },
              items: [
                //"form/api/api_overview",
                {
                  type: "category",
                  label: "Common Form API",
                  link: {
                    type: 'generated-index',
                    title: "Common Form AP",
                    keywords: ['common form AP'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: { 
                    type: 'doc',
                    id: "form/api/overview/common/api_overview",
                  },*/
                  collapsed: true,
                  items: [{
                    type: "category",
                    label: "Form methods",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form methods",
                      keywords: ['Form methods'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/common/methods_overview",
                    },*/
                    items: [
                      "form/api/form_blur_method",
                      "form/api/form_clear_method",
                      "form/api/form_destructor_method",
                      "form/api/form_disable_method",
                      "form/api/form_enable_method",
                      "form/api/form_foreach_method",
                      "form/api/form_getitem_method",
                      "form/api/form_getproperties_method",
                      "form/api/form_getvalue_method",
                      "form/api/form_hide_method",
                      "form/api/form_isdisabled_method",
                      "form/api/form_isvisible_method",
                      "form/api/form_paint_method",
                      "form/api/form_send_method",
                      "form/api/form_setfocus_method",
                      "form/api/form_setproperties_method",
                      "form/api/form_setvalue_method",
                      "form/api/form_show_method",
                      "form/api/form_validate_method",
                    ],
                  },
                  {
                    type: "category",
                    label: "Form events",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form events",
                      keywords: ['form events'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/common/events_overview",
                    },*/
                    items: [
                      "form/api/form_afterchangeproperties_event",
                      "form/api/form_afterhide_event",
                      "form/api/form_aftersend_event",
                      "form/api/form_aftershow_event",
                      "form/api/form_aftervalidate_event",
                      "form/api/form_beforechange_event",
                      "form/api/form_beforechangeproperties_event",
                      "form/api/form_beforehide_event",
                      "form/api/form_beforesend_event",
                      "form/api/form_beforeshow_event",
                      "form/api/form_beforevalidate_event",
                      "form/api/form_blur_event",
                      "form/api/form_change_event",
                      "form/api/form_click_event",
                      "form/api/form_focus_event",
                      "form/api/form_keydown_event",
                    ],
                  },
                  {
                    type: "category",
                    label: "Form properties",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form properties",
                      keywords: ['form properties'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/common/properties_overview",
                    },*/
                    items: [
                      "form/api/form_align_config",
                      "form/api/form_cols_config",
                      "form/api/form_css_config",
                      "form/api/form_disabled_config",
                      "form/api/form_height_config",
                      "form/api/form_hidden_config",
                      "form/api/form_padding_config",
                      "form/api/form_rows_config",
                      "form/api/form_title_config",
                      "form/api/form_width_config",
                    ],
                  },
                  ],
                },
                {
                  type: "category",
                  label: "Button API",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Button API",
                    keywords: ['button API'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: { 
                    type: 'doc',
                    id: "form/api/overview/button/api_overview"
                  },*/
                  items: [{
                    type: "category",
                    label: "Form Button methods",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Button methods",
                      keywords: ['form button methods'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/button/methods_overview"
                    },*/
                    items: [
                      "form/api/button/button_blur_method",
                      "form/api/button/button_disable_method",
                      "form/api/button/button_enable_method",
                      "form/api/button/button_focus_method",
                      "form/api/button/button_getproperties_method",
                      "form/api/button/button_hide_method",
                      "form/api/button/button_isdisabled_method",
                      "form/api/button/button_isvisible_method",
                      "form/api/button/button_setproperties_method",
                      "form/api/button/button_show_method",
                    ],
                  },
                  {
                    type: "category",
                    label: "Form Button events",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Button events",
                      keywords: ['form button events'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/button/events_overview"
                    },*/
                    items: [
                      "form/api/button/button_afterchangeproperties_event",
                      "form/api/button/button_afterhide_event",
                      "form/api/button/button_aftershow_event",
                      "form/api/button/button_beforechangeproperties_event",
                      "form/api/button/button_beforehide_event",
                      "form/api/button/button_beforeshow_event",
                      "form/api/button/button_blur_event",
                      "form/api/button/button_click_event",
                      "form/api/button/button_focus_event",
                      "form/api/button/button_keydown_event",
                    ],
                  },
                  {
                    type: "doc",
                    id: "form/api/button/api_button_properties",
                  },
                  ],
                },
                {
                  type: "category",
                  label: "Datepicker API",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Datepicker API",
                    keywords: ['datepicker API'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: { 
                    type: 'doc',
                    id: "form/api/overview/calendar/api_overview"
                  },*/
                  items: [{
                    type: "category",
                    label: "Form Datepicker methods",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Datepicker methods",
                      keywords: ['form datepicker methods'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/calendar/methods_overview"
                    },*/
                    items: [
                      "form/api/calendar/calendar_blur_method",
                      "form/api/calendar/calendar_clear_method",
                      "form/api/calendar/calendar_clearvalidate_method",
                      "form/api/calendar/calendar_disable_method",
                      "form/api/calendar/calendar_enable_method",
                      "form/api/calendar/calendar_focus_method",
                      "form/api/calendar/calendar_getproperties_method",
                      "form/api/calendar/calendar_getvalue_method",
                      "form/api/calendar/calendar_getwidget_method",
                      "form/api/calendar/calendar_hide_method",
                      "form/api/calendar/calendar_isdisabled_method",
                      "form/api/calendar/calendar_isvisible_method",
                      "form/api/calendar/calendar_setproperties_method",
                      "form/api/calendar/calendar_setvalue_method",
                      "form/api/calendar/calendar_show_method",
                      "form/api/calendar/calendar_validate_method",
                    ],
                  },
                  {
                    type: "category",
                    label: "Form Datepicker events",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Datepicker events",
                      keywords: ['form datepicker events'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/calendar/events_overview"
                    },*/
                    items: [
                      "form/api/calendar/calendar_afterchangeproperties_event",
                      "form/api/calendar/calendar_afterhide_event",
                      "form/api/calendar/calendar_aftershow_event",
                      "form/api/calendar/calendar_aftervalidate_event",
                      "form/api/calendar/calendar_beforechange_event",
                      "form/api/calendar/calendar_beforechangeproperties_event",
                      "form/api/calendar/calendar_beforehide_event",
                      "form/api/calendar/calendar_beforeshow_event",
                      "form/api/calendar/calendar_beforevalidate_event",
                      "form/api/calendar/calendar_blur_event",
                      "form/api/calendar/calendar_change_event",
                      "form/api/calendar/calendar_focus_event",
                      "form/api/calendar/calendar_input_event",
                      "form/api/calendar/calendar_keydown_event",
                    ],
                  },
                  {
                    type: "doc",
                    id: "form/api/calendar/api_calendar_properties",
                  },
                  ],
                },
                {
                  type: "category",
                  label: "Checkbox API",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Checkbox API",
                    keywords: ['checkbox API'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: { 
                    type: 'doc',
                    id: "form/api/overview/checkbox/api_overview"
                  },*/
                  items: [{
                    type: "category",
                    label: "Form Checkbox methods",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Checkbox methods",
                      keywords: ['form checkbox methods'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/checkbox/methods_overview"
                    },*/
                    items: [
                      "form/api/checkbox/checkbox_blur_method",
                      "form/api/checkbox/checkbox_clear_method",
                      "form/api/checkbox/checkbox_clearvalidate_method",
                      "form/api/checkbox/checkbox_disable_method",
                      "form/api/checkbox/checkbox_enable_method",
                      "form/api/checkbox/checkbox_focus_method",
                      "form/api/checkbox/checkbox_getproperties_method",
                      "form/api/checkbox/checkbox_getvalue_method",
                      "form/api/checkbox/checkbox_hide_method",
                      "form/api/checkbox/checkbox_ischecked_method",
                      "form/api/checkbox/checkbox_isdisabled_method",
                      "form/api/checkbox/checkbox_isvisible_method",
                      "form/api/checkbox/checkbox_setproperties_method",
                      "form/api/checkbox/checkbox_setvalue_method",
                      "form/api/checkbox/checkbox_show_method",
                      "form/api/checkbox/checkbox_validate_method",
                    ],
                  },
                  {
                    type: "category",
                    label: "Form Checkbox events",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Checkbox events",
                      keywords: ['form checkbox events'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/checkbox/events_overview"
                    },*/
                    items: [
                      "form/api/checkbox/checkbox_afterchangeproperties_event",
                      "form/api/checkbox/checkbox_afterhide_event",
                      "form/api/checkbox/checkbox_aftershow_event",
                      "form/api/checkbox/checkbox_aftervalidate_event",
                      "form/api/checkbox/checkbox_beforechange_event",
                      "form/api/checkbox/checkbox_beforechangeproperties_event",
                      "form/api/checkbox/checkbox_beforehide_event",
                      "form/api/checkbox/checkbox_beforeshow_event",
                      "form/api/checkbox/checkbox_beforevalidate_event",
                      "form/api/checkbox/checkbox_blur_event",
                      "form/api/checkbox/checkbox_change_event",
                      "form/api/checkbox/checkbox_focus_event",
                      "form/api/checkbox/checkbox_keydown_event",
                    ],
                  },
                  {
                    type: "doc",
                    id: "form/api/checkbox/api_checkbox_properties",
                  },
                  ],
                },
                {
                  type: "category",
                  label: "CheckboxGroup API",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "CheckboxGroup API",
                    keywords: ['checkboxgroup API'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: { 
                    type: 'doc',
                    id: "form/api/overview/checkbox_group/api_overview"
                  },*/
                  items: [{
                    type: "category",
                    label: "Form CheckboxGroup methods",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form CheckboxGroup methods",
                      keywords: ['form checkboxgroup methods'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/checkbox_group/methods_overview"
                    },*/
                    items: [
                      "form/api/checkbox_group/checkboxgroup_blur_method",
                      "form/api/checkbox_group/checkboxgroup_clear_method",
                      "form/api/checkbox_group/checkboxgroup_clearvalidate_method",
                      "form/api/checkbox_group/checkboxgroup_disable_method",
                      "form/api/checkbox_group/checkboxgroup_enable_method",
                      "form/api/checkbox_group/checkboxgroup_focus_method",
                      "form/api/checkbox_group/checkboxgroup_getproperties_method",
                      "form/api/checkbox_group/checkboxgroup_getvalue_method",
                      "form/api/checkbox_group/checkboxgroup_hide_method",
                      "form/api/checkbox_group/checkboxgroup_ischecked_method",
                      "form/api/checkbox_group/checkboxgroup_isdisabled_method",
                      "form/api/checkbox_group/checkboxgroup_isvisible_method",
                      "form/api/checkbox_group/checkboxgroup_setproperties_method",
                      "form/api/checkbox_group/checkboxgroup_setvalue_method",
                      "form/api/checkbox_group/checkboxgroup_show_method",
                      "form/api/checkbox_group/checkboxgroup_validate_method",
                    ],
                  },
                  {
                    type: "category",
                    label: "Form CheckboxGroup events",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form CheckboxGroup events",
                      keywords: ['form checkboxgroup events'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/checkbox_group/events_overview"
                    },*/
                    items: [
                      "form/api/checkbox_group/checkboxgroup_afterchangeproperties_event",
                      "form/api/checkbox_group/checkboxgroup_afterhide_event",
                      "form/api/checkbox_group/checkboxgroup_aftershow_event",
                      "form/api/checkbox_group/checkboxgroup_aftervalidate_event",
                      "form/api/checkbox_group/checkboxgroup_beforechange_event",
                      "form/api/checkbox_group/checkboxgroup_beforechangeproperties_event",
                      "form/api/checkbox_group/checkboxgroup_beforehide_event",
                      "form/api/checkbox_group/checkboxgroup_beforeshow_event",
                      "form/api/checkbox_group/checkboxgroup_beforevalidate_event",
                      "form/api/checkbox_group/checkboxgroup_blur_event",
                      "form/api/checkbox_group/checkboxgroup_change_event",
                      "form/api/checkbox_group/checkboxgroup_focus_event",
                      "form/api/checkbox_group/checkboxgroup_keydown_event",
                    ],
                  },
                  {
                    type: "doc",
                    id: "form/api/checkbox_group/api_checkboxgroup_properties",
                  },
                  ],
                },
                {
                  type: "category",
                  label: "Colorpicker API",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Colorpicker API",
                    keywords: ['colorpicker API'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: { 
                    type: 'doc',
                    id: "form/api/overview/colorpicker/api_overview"
                  },*/
                  items: [{
                    type: "category",
                    label: "Form Colorpicker methods",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Colorpicker methods",
                      keywords: ['form colorpicker methods'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/colorpicker/methods_overview"
                    },*/
                    items: [
                      "form/api/colorpicker/colorpicker_blur_method",
                      "form/api/colorpicker/colorpicker_clear_method",
                      "form/api/colorpicker/colorpicker_clearvalidate_method",
                      "form/api/colorpicker/colorpicker_disable_method",
                      "form/api/colorpicker/colorpicker_enable_method",
                      "form/api/colorpicker/colorpicker_focus_method",
                      "form/api/colorpicker/colorpicker_getproperties_method",
                      "form/api/colorpicker/colorpicker_getvalue_method",
                      "form/api/colorpicker/colorpicker_getwidget_method",
                      "form/api/colorpicker/colorpicker_hide_method",
                      "form/api/colorpicker/colorpicker_isdisabled_method",
                      "form/api/colorpicker/colorpicker_isvisible_method",
                      "form/api/colorpicker/colorpicker_setproperties_method",
                      "form/api/colorpicker/colorpicker_setvalue_method",
                      "form/api/colorpicker/colorpicker_show_method",
                      "form/api/colorpicker/colorpicker_validate_method",
                    ],
                  },
                  {
                    type: "category",
                    label: "Form Colorpicker events",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Colorpicker events",
                      keywords: ['form colorpicker events'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/colorpicker/events_overview"
                    },*/
                    items: [
                      "form/api/colorpicker/colorpicker_afterchangeproperties_event",
                      "form/api/colorpicker/colorpicker_afterhide_event",
                      "form/api/colorpicker/colorpicker_aftershow_event",
                      "form/api/colorpicker/colorpicker_aftervalidate_event",
                      "form/api/colorpicker/colorpicker_beforechange_event",
                      "form/api/colorpicker/colorpicker_beforechangeproperties_event",
                      "form/api/colorpicker/colorpicker_beforehide_event",
                      "form/api/colorpicker/colorpicker_beforeshow_event",
                      "form/api/colorpicker/colorpicker_beforevalidate_event",
                      "form/api/colorpicker/colorpicker_blur_event",
                      "form/api/colorpicker/colorpicker_change_event",
                      "form/api/colorpicker/colorpicker_focus_event",
                      "form/api/colorpicker/colorpicker_input_event",
                      "form/api/colorpicker/colorpicker_keydown_event",
                    ],
                  },
                  {
                    type: "doc",
                    id: "form/api/colorpicker/api_colorpicker_properties",
                  },
                  ],
                },
                {
                  type: "category",
                  label: "Combo API",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Combo API",
                    keywords: ['combo API'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: { 
                    type: 'doc',
                    id: "form/api/overview/combo/api_overview"
                  },*/
                  items: [{
                    type: "category",
                    label: "Form Combo methods",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Combo methods",
                      keywords: ['form combo methods'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/combo/methods_overview"
                    },*/
                    items: [
                      "form/api/combo/combo_blur_method",
                      "form/api/combo/combo_clear_method",
                      "form/api/combo/combo_clearvalidate_method",
                      "form/api/combo/combo_disable_method",
                      "form/api/combo/combo_enable_method",
                      "form/api/combo/combo_focus_method",
                      "form/api/combo/combo_getproperties_method",
                      "form/api/combo/combo_getvalue_method",
                      "form/api/combo/combo_getwidget_method",
                      "form/api/combo/combo_hide_method",
                      "form/api/combo/combo_isdisabled_method",
                      "form/api/combo/combo_isvisible_method",
                      "form/api/combo/combo_setproperties_method",
                      "form/api/combo/combo_setvalue_method",
                      "form/api/combo/combo_show_method",
                      "form/api/combo/combo_validate_method",
                    ],
                  },
                  {
                    type: "category",
                    label: "Form Combo events",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Combo events",
                      keywords: ['form combo events'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/combo/events_overview"
                    },*/
                    items: [
                      "form/api/combo/combo_afterchangeproperties_event",
                      "form/api/combo/combo_afterhide_event",
                      "form/api/combo/combo_aftershow_event",
                      "form/api/combo/combo_aftervalidate_event",
                      "form/api/combo/combo_beforechange_event",
                      "form/api/combo/combo_beforechangeproperties_event",
                      "form/api/combo/combo_beforehide_event",
                      "form/api/combo/combo_beforeshow_event",
                      "form/api/combo/combo_beforevalidate_event",
                      "form/api/combo/combo_blur_event",
                      "form/api/combo/combo_change_event",
                      "form/api/combo/combo_focus_event",
                      "form/api/combo/combo_keydown_event",
                    ],
                  },
                  {
                    type: "doc",
                    id: "form/api/combo/api_combo_properties",
                  },
                  ],
                },
                {
                  type: "category",
                  label: "Container API",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Container API",
                    keywords: ['container API'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: { 
                    type: 'doc',
                    id: "form/api/overview/container/api_overview"
                  },*/
                  items: [
                    {
                      type: "category",
                      label: "Form Container methods",
                      collapsed: true,
                      link: {
                        type: 'generated-index',
                        title: "Form Container methods",
                        keywords: ['form container methods'],
                        image: '/img/docusaurus.png'
                      },
                      /*link: { 
                        type: 'doc',
                        id: "form/api/overview/container/methods_overview"
                      },*/
                      items: [
                        "form/api/container/container_attach_method",
                        "form/api/container/container_attachhtml_method",
                        "form/api/container/container_disable_method",
                        "form/api/container/container_enable_method",
                        "form/api/container/container_getproperties_method",
                        "form/api/container/container_hide_method",
                        "form/api/container/container_isdisabled_method",
                        "form/api/container/container_isvisible_method",
                        "form/api/container/container_setproperties_method",
                        "form/api/container/container_show_method",
                      ],
                    },
                    {
                      type: "category",
                      label: "Form Container events",
                      collapsed: true,
                      link: {
                        type: 'generated-index',
                        title: "Form Container events",
                        keywords: ['form container events'],
                        image: '/img/docusaurus.png'
                      },
                      /*link: { 
                        type: 'doc',
                        id: "form/api/overview/container/events_overview"
                      },*/
                      items: [
                        "form/api/container/container_afterchangeproperties_event",
                        "form/api/container/container_afterhide_event",
                        "form/api/container/container_aftershow_event",
                        "form/api/container/container_beforechangeproperties_event",
                        "form/api/container/container_beforehide_event",
                        "form/api/container/container_beforeshow_event",
                      ],
                    },
                    {
                      type: "doc",
                      id: "form/api/container/api_container_properties",
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Input API",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Input API",
                    keywords: ['input API'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: { 
                    type: 'doc',
                    id: "form/api/overview/input/api_overview"
                  },*/
                  items: [{
                    type: "category",
                    label: "Form Input methods",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Input methods",
                      keywords: ['form input methods'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/input/methods_overview"
                    },*/
                    items: [
                      "form/api/input/input_blur_method",
                      "form/api/input/input_clear_method",
                      "form/api/input/input_clearvalidate_method",
                      "form/api/input/input_disable_method",
                      "form/api/input/input_enable_method",
                      "form/api/input/input_focus_method",
                      "form/api/input/input_getproperties_method",
                      "form/api/input/input_getvalue_method",
                      "form/api/input/input_hide_method",
                      "form/api/input/input_isdisabled_method",
                      "form/api/input/input_isvisible_method",
                      "form/api/input/input_setproperties_method",
                      "form/api/input/input_setvalue_method",
                      "form/api/input/input_show_method",
                      "form/api/input/input_validate_method",
                    ],
                  },
                  {
                    type: "category",
                    label: "Form Input events",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Input events",
                      keywords: ['form input events'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/input/events_overview"
                    },*/
                    items: [
                      "form/api/input/input_afterchangeproperties_event",
                      "form/api/input/input_afterhide_event",
                      "form/api/input/input_aftershow_event",
                      "form/api/input/input_aftervalidate_event",
                      "form/api/input/input_beforechange_event",
                      "form/api/input/input_beforechangeproperties_event",
                      "form/api/input/input_beforehide_event",
                      "form/api/input/input_beforeshow_event",
                      "form/api/input/input_beforevalidate_event",
                      "form/api/input/input_blur_event",
                      "form/api/input/input_change_event",
                      "form/api/input/input_focus_event",
                      "form/api/input/input_input_event",
                      "form/api/input/input_keydown_event",
                    ],
                  },
                  {
                    type: "doc",
                    id: "form/api/input/api_input_properties",
                  },
                  ],
                },
                {
                  type: "category",
                  label: "Radiogroup API",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Radiogroup API",
                    keywords: ['radiogroup API'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: { 
                    type: 'doc',
                    id: "form/api/overview/radiogroup/api_overview"
                  },*/
                  items: [{
                    type: "category",
                    label: "Form Radiogroup methods",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Radiogroup methods",
                      keywords: ['form radiogroup methods'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/radiogroup/methods_overview"
                    },*/
                    items: [
                      "form/api/radiogroup/radiogroup_blur_method",
                      "form/api/radiogroup/radiogroup_clear_method",
                      "form/api/radiogroup/radiogroup_clearvalidate_method",
                      "form/api/radiogroup/radiogroup_disable_method",
                      "form/api/radiogroup/radiogroup_enable_method",
                      "form/api/radiogroup/radiogroup_focus_method",
                      "form/api/radiogroup/radiogroup_getproperties_method",
                      "form/api/radiogroup/radiogroup_getvalue_method",
                      "form/api/radiogroup/radiogroup_hide_method",
                      "form/api/radiogroup/radiogroup_isdisabled_method",
                      "form/api/radiogroup/radiogroup_isvisible_method",
                      "form/api/radiogroup/radiogroup_setproperties_method",
                      "form/api/radiogroup/radiogroup_setvalue_method",
                      "form/api/radiogroup/radiogroup_show_method",
                      "form/api/radiogroup/radiogroup_validate_method"
                    ],
                  },
                  {
                    type: "category",
                    label: "Form Radiogroup events",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Radiogroup events",
                      keywords: ['form radiogroup events'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/radiogroup/events_overview"
                    },*/
                    items: [
                      "form/api/radiogroup/radiogroup_afterchangeproperties_event",
                      "form/api/radiogroup/radiogroup_afterhide_event",
                      "form/api/radiogroup/radiogroup_aftershow_event",
                      "form/api/radiogroup/radiogroup_aftervalidate_event",
                      "form/api/radiogroup/radiogroup_beforechange_event",
                      "form/api/radiogroup/radiogroup_beforechangeproperties_event",
                      "form/api/radiogroup/radiogroup_beforehide_event",
                      "form/api/radiogroup/radiogroup_beforeshow_event",
                      "form/api/radiogroup/radiogroup_beforevalidate_event",
                      "form/api/radiogroup/radiogroup_blur_event",
                      "form/api/radiogroup/radiogroup_change_event",
                      "form/api/radiogroup/radiogroup_focus_event",
                      "form/api/radiogroup/radiogroup_keydown_event",
                    ],
                  },
                  {
                    type: "doc",
                    id: "form/api/radiogroup/api_radiogroup_properties",
                  },
                  ],
                },
                {
                  type: "category",
                  label: "Select API",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Select API",
                    keywords: ['select API'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: { 
                    type: 'doc',
                    id: "form/api/overview/select/api_overview"
                  },*/
                  items: [{
                    type: "category",
                    label: "Form Select methods",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Select methods",
                      keywords: ['form select methods'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/select/methods_overview"
                    },*/
                    items: [
                      "form/api/select/select_blur_method",
                      "form/api/select/select_clear_method",
                      "form/api/select/select_clearvalidate_method",
                      "form/api/select/select_disable_method",
                      "form/api/select/select_enable_method",
                      "form/api/select/select_focus_method",
                      "form/api/select/select_getproperties_method",
                      "form/api/select/select_getoptions_method",
                      "form/api/select/select_getvalue_method",
                      "form/api/select/select_hide_method",
                      "form/api/select/select_isdisabled_method",
                      "form/api/select/select_isvisible_method",
                      "form/api/select/select_setoptions_method",
                      "form/api/select/select_setproperties_method",
                      "form/api/select/select_setvalue_method",
                      "form/api/select/select_show_method",
                      "form/api/select/select_validate_method",
                    ],
                  },
                  {
                    type: "category",
                    label: "Form Select events",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Select events",
                      keywords: ['form select events'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/select/events_overview"
                    },*/
                    items: [
                      "form/api/select/select_afterchangeproperties_event",
                      "form/api/select/select_afterhide_event",
                      "form/api/select/select_aftershow_event",
                      "form/api/select/select_aftervalidate_event",
                      "form/api/select/select_beforechange_event",
                      "form/api/select/select_beforechangeoptions_event",
                      "form/api/select/select_beforechangeproperties_event",
                      "form/api/select/select_beforehide_event",
                      "form/api/select/select_beforeshow_event",
                      "form/api/select/select_beforevalidate_event",
                      "form/api/select/select_blur_event",
                      "form/api/select/select_change_event",
                      "form/api/select/select_changeoptions_event",
                      "form/api/select/select_focus_event",
                      "form/api/select/select_keydown_event",
                    ],
                  },
                  {
                    type: "doc",
                    id: "form/api/select/api_select_properties",
                  },
                  ],
                },
                {
                  type: "category",
                  label: "Simple Vault API",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Simple Vault API",
                    keywords: ['simple vault API'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: { 
                    type: 'doc',
                    id: "form/api/overview/simplevault/api_overview"
                  },*/
                  items: [{
                    type: "category",
                    label: "Form Simple Vault methods",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Simple Vault methods",
                      keywords: ['form simple vault methods'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/simplevault/methods_overview"
                    },*/
                    items: [
                      "form/api/simplevault/simplevault_clear_method",
                      "form/api/simplevault/simplevault_clearvalidate_method",
                      "form/api/simplevault/simplevault_disable_method",
                      "form/api/simplevault/simplevault_enable_method",
                      "form/api/simplevault/simplevault_getproperties_method",
                      "form/api/simplevault/simplevault_getvalue_method",
                      "form/api/simplevault/simplevault_hide_method",
                      "form/api/simplevault/simplevault_isdisabled_method",
                      "form/api/simplevault/simplevault_isvisible_method",
                      "form/api/simplevault/simplevault_selectfile_method",
                      "form/api/simplevault/simplevault_send_method",
                      "form/api/simplevault/simplevault_setproperties_method",
                      "form/api/simplevault/simplevault_setvalue_method",
                      "form/api/simplevault/simplevault_show_method",
                      "form/api/simplevault/simplevault_validate_method",
                    ],
                  },
                  {
                    type: "category",
                    label: "Form Simple Vault events",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Simple Vault events",
                      keywords: ['form simple vault events'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/simplevault/events_overview"
                    },*/
                    items: [
                      "form/api/simplevault/simplevault_afteradd_event",
                      "form/api/simplevault/simplevault_afterchangeproperties_event",
                      "form/api/simplevault/simplevault_afterhide_event",
                      "form/api/simplevault/simplevault_afterremove_event",
                      "form/api/simplevault/simplevault_aftershow_event",
                      "form/api/simplevault/simplevault_aftervalidate_event",
                      "form/api/simplevault/simplevault_beforeadd_event",
                      "form/api/simplevault/simplevault_beforechangeproperties_event",
                      "form/api/simplevault/simplevault_beforehide_event",
                      "form/api/simplevault/simplevault_beforeremove_event",
                      "form/api/simplevault/simplevault_beforeshow_event",
                      "form/api/simplevault/simplevault_beforeuploadfile_event",
                      "form/api/simplevault/simplevault_beforevalidate_event",
                      "form/api/simplevault/simplevault_change_event",
                      "form/api/simplevault/simplevault_uploadbegin_event",
                      "form/api/simplevault/simplevault_uploadcomplete_event",
                      "form/api/simplevault/simplevault_uploadfail_event",
                      "form/api/simplevault/simplevault_uploadfile_event",
                      "form/api/simplevault/simplevault_uploadprogress_event",
                    ],
                  },
                  {
                    type: "doc",
                    id: "form/api/simplevault/api_simplevault_properties",
                  },
                  ],
                },
                {
                  type: "category",
                  label: "Slider API",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Slider API",
                    keywords: ['slider API'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: { 
                    type: 'doc',
                    id: "form/api/overview/slider/api_overview"
                  },*/
                  items: [{
                    type: "category",
                    label: "Form Slider methods",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Slider methods",
                      keywords: ['form slider methods'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/slider/methods_overview"
                    },*/
                    items: [
                      "form/api/slider/slider_blur_method",
                      "form/api/slider/slider_clear_method",
                      "form/api/slider/slider_disable_method",
                      "form/api/slider/slider_enable_method",
                      "form/api/slider/slider_focus_method",
                      "form/api/slider/slider_getproperties_method",
                      "form/api/slider/slider_getvalue_method",
                      "form/api/slider/slider_getwidget_method",
                      "form/api/slider/slider_hide_method",
                      "form/api/slider/slider_isdisabled_method",
                      "form/api/slider/slider_isvisible_method",
                      "form/api/slider/slider_setproperties_method",
                      "form/api/slider/slider_setvalue_method",
                      "form/api/slider/slider_show_method",
                    ],
                  },
                  {
                    type: "category",
                    label: "Form Slider events",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Slider events",
                      keywords: ['form slider events'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/slider/events_overview"
                    },*/
                    items: [
                      "form/api/slider/slider_afterchangeproperties_event",
                      "form/api/slider/slider_afterhide_event",
                      "form/api/slider/slider_aftershow_event",
                      "form/api/slider/slider_beforechange_event",
                      "form/api/slider/slider_beforechangeproperties_event",
                      "form/api/slider/slider_beforehide_event",
                      "form/api/slider/slider_beforeshow_event",
                      "form/api/slider/slider_blur_event",
                      "form/api/slider/slider_change_event",
                      "form/api/slider/slider_focus_event",
                      "form/api/slider/slider_keydown_event",
                    ],
                  },
                  {
                    type: "doc",
                    id: "form/api/slider/api_slider_properties",
                  },
                  ],
                },
                {
                  type: "category",
                  label: "Spacer API",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Spacer API",
                    keywords: ['spacer API'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: { 
                    type: 'doc',
                    id: "form/api/overview/spacer/api_overview"
                  },*/
                  items: [{
                    type: "category",
                    label: "Form Spacer methods",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Spacer methods",
                      keywords: ['form spacer methods'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/spacer/methods_overview"
                    },*/
                    items: [
                      "form/api/spacer/spacer_getproperties_method",
                      "form/api/spacer/spacer_hide_method",
                      "form/api/spacer/spacer_isvisible_method",
                      "form/api/spacer/spacer_setproperties_method",
                      "form/api/spacer/spacer_show_method",
                    ],
                  },
                  {
                    type: "category",
                    label: "Form Spacer events",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Spacer events",
                      keywords: ['form spacer events'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/spacer/events_overview"
                    },*/
                    items: [
                      "form/api/spacer/spacer_afterchangeproperties_event",
                      "form/api/spacer/spacer_afterhide_event",
                      "form/api/spacer/spacer_aftershow_event",
                      "form/api/spacer/spacer_beforechangeproperties_event",
                      "form/api/spacer/spacer_beforehide_event",
                      "form/api/spacer/spacer_beforeshow_event",
                    ],
                  },
                  {
                    type: "doc",
                    id: "form/api/spacer/api_spacer_properties",
                  },
                  ],
                },
                {
                  type: "category",
                  label: "Text API",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Text API",
                    keywords: ['text API'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: { 
                    type: 'doc',
                    id: "form/api/overview/text/api_overview"
                  },*/
                  items: [{
                    type: "category",
                    label: "Form Text methods",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Text methods",
                      keywords: ['form text methods'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/text/methods_overview"
                    },*/
                    items: [
                      "form/api/text/text_clear_method",
                      "form/api/text/text_disable_method",
                      "form/api/text/text_enable_method",
                      "form/api/text/text_getproperties_method",
                      "form/api/text/text_getvalue_method",
                      "form/api/text/text_hide_method",
                      "form/api/text/text_isdisabled_method",
                      "form/api/text/text_isvisible_method",
                      "form/api/text/text_setproperties_method",
                      "form/api/text/text_setvalue_method",
                      "form/api/text/text_show_method",
                    ],
                  },
                  {
                    type: "category",
                    label: "Form Text events",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Text events",
                      keywords: ['form text events'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/text/events_overview"
                    },*/
                    items: [
                      "form/api/text/text_afterchangeproperties_event",
                      "form/api/text/text_afterhide_event",
                      "form/api/text/text_aftershow_event",
                      "form/api/text/text_aftervalidate_event",
                      "form/api/text/text_beforechangeproperties_event",
                      "form/api/text/text_beforehide_event",
                      "form/api/text/text_beforeshow_event",
                      "form/api/text/text_beforevalidate_event",
                      "form/api/text/text_change_event",
                    ],
                  },
                  {
                    type: "doc",
                    id: "form/api/text/api_text_properties",
                  },
                  ],
                },
                {
                  type: "category",
                  label: "Textarea API",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Textarea API",
                    keywords: ['textarea API'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: { 
                    type: 'doc',
                    id: "form/api/overview/textarea/api_overview"
                  },*/
                  items: [{
                    type: "category",
                    label: "Form Textarea methods",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Textarea methods",
                      keywords: ['form textarea methods'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/textarea/methods_overview"
                    },*/
                    items: [
                      "form/api/textarea/textarea_blur_method",
                      "form/api/textarea/textarea_clear_method",
                      "form/api/textarea/textarea_clearvalidate_method",
                      "form/api/textarea/textarea_disable_method",
                      "form/api/textarea/textarea_enable_method",
                      "form/api/textarea/textarea_focus_method",
                      "form/api/textarea/textarea_getproperties_method",
                      "form/api/textarea/textarea_getvalue_method",
                      "form/api/textarea/textarea_hide_method",
                      "form/api/textarea/textarea_isdisabled_method",
                      "form/api/textarea/textarea_isvisible_method",
                      "form/api/textarea/textarea_setproperties_method",
                      "form/api/textarea/textarea_setvalue_method",
                      "form/api/textarea/textarea_show_method",
                      "form/api/textarea/textarea_validate_method",
                    ],
                  },
                  {
                    type: "category",
                    label: "Form Textarea events",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Textarea events",
                      keywords: ['form textarea events'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/textarea/events_overview"
                    },*/
                    items: [
                      "form/api/textarea/textarea_afterchangeproperties_event",
                      "form/api/textarea/textarea_afterhide_event",
                      "form/api/textarea/textarea_aftershow_event",
                      "form/api/textarea/textarea_aftervalidate_event",
                      "form/api/textarea/textarea_beforechange_event",
                      "form/api/textarea/textarea_beforechangeproperties_event",
                      "form/api/textarea/textarea_beforehide_event",
                      "form/api/textarea/textarea_beforeshow_event",
                      "form/api/textarea/textarea_beforevalidate_event",
                      "form/api/textarea/textarea_blur_event",
                      "form/api/textarea/textarea_change_event",
                      "form/api/textarea/textarea_focus_event",
                      "form/api/textarea/textarea_input_event",
                      "form/api/textarea/textarea_keydown_event",
                    ],
                  },
                  {
                    type: "doc",
                    id: "form/api/textarea/api_textarea_properties",
                  },
                  ],
                },
                {
                  type: "category",
                  label: "Timepicker API",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Timepicker API",
                    keywords: ['timepicker API'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: { 
                    type: 'doc',
                    id: "form/api/overview/timepicker/api_overview"
                  },*/
                  items: [{
                    type: "category",
                    label: "Form Timepicker methods",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Timepicker methods",
                      keywords: ['form timepicker methods'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/timepicker/methods_overview"
                    },*/
                    items: [
                      "form/api/timepicker/timepicker_blur_method",
                      "form/api/timepicker/timepicker_clear_method",
                      "form/api/timepicker/timepicker_clearvalidate_method",
                      "form/api/timepicker/timepicker_disable_method",
                      "form/api/timepicker/timepicker_enable_method",
                      "form/api/timepicker/timepicker_focus_method",
                      "form/api/timepicker/timepicker_getproperties_method",
                      "form/api/timepicker/timepicker_getvalue_method",
                      "form/api/timepicker/timepicker_getwidget_method",
                      "form/api/timepicker/timepicker_hide_method",
                      "form/api/timepicker/timepicker_isdisabled_method",
                      "form/api/timepicker/timepicker_isvisible_method",
                      "form/api/timepicker/timepicker_setproperties_method",
                      "form/api/timepicker/timepicker_setvalue_method",
                      "form/api/timepicker/timepicker_show_method",
                      "form/api/timepicker/timepicker_validate_method",
                    ],
                  },
                  {
                    type: "category",
                    label: "Form Timepicker events",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Form Timepicker events",
                      keywords: ['form timepicker events'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: { 
                      type: 'doc',
                      id: "form/api/overview/timepicker/events_overview"
                    },*/
                    items: [
                      "form/api/timepicker/timepicker_afterchangeproperties_event",
                      "form/api/timepicker/timepicker_afterhide_event",
                      "form/api/timepicker/timepicker_aftershow_event",
                      "form/api/timepicker/timepicker_aftervalidate_event",
                      "form/api/timepicker/timepicker_beforechange_event",
                      "form/api/timepicker/timepicker_beforechangeproperties_event",
                      "form/api/timepicker/timepicker_beforehide_event",
                      "form/api/timepicker/timepicker_beforeshow_event",
                      "form/api/timepicker/timepicker_beforevalidate_event",
                      "form/api/timepicker/timepicker_blur_event",
                      "form/api/timepicker/timepicker_change_event",
                      "form/api/timepicker/timepicker_focus_event",
                      "form/api/timepicker/timepicker_input_event",
                      "form/api/timepicker/timepicker_keydown_event",
                    ],
                  },
                  {
                    type: "doc",
                    id: "form/api/timepicker/api_timepicker_properties",
                  },
                  ],
                },
              ],
            },
            "form/features",
            "form/how_to_start",
            {
              type: "category",
              label: "List of Form controls",
              collapsed: true,
              link: {
                type: 'generated-index',
                title: "List of Form controls",
                keywords: ['list of controls'],
                image: '/img/docusaurus.png'
              },
              items: [
                "form/button",
                "form/calendar",
                "form/checkbox",
                "form/checkboxgroup",
                "form/colorpicker",
                "form/combo",
                "form/container",
                "form/input",
                "form/radiogroup",
                "form/select",
                "form/simplevault",
                "form/slider",
                "form/spacer",
                "form/text",
                "form/textarea",
                "form/timepicker",
              ]
            },
            "form/localization",
            "form/configuration",
            "form/work_with_form",
            "form/customization",
            "form/handling_events",
          ],
        },
        // // end Form

        //Grid
        {
          type: "category",
          label: "Grid",
          /*link: {
            type: 'generated-index',
            title: "Grid",
            keywords: ['grid'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "grid/index"
          },
          items: [
            //"grid/index",
            {
              type: "category",
              label: "Grid API",
              link: {
                type: 'doc',
                id: "grid/api/api_overview",
              },
              items: [
                //"grid/api/api_overview",
                {
                  type: "category",
                  label: "Grid methods",
                  link: {
                    type: 'generated-index',
                    title: "Grid methods",
                    keywords: ['grid methods'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    id: "grid/api/overview/methods_overview",
                  },*/
                  items: [
                    "grid/api/grid_addcellcss_method",
                    "grid/api/grid_addrowcss_method",
                    "grid/api/grid_addspan_method",
                    "grid/api/grid_adjustcolumnwidth_method",
                    "grid/api/grid_destructor_method",
                    "grid/api/grid_editcell_method",
                    "grid/api/grid_editend_method",
                    "grid/api/grid_getcellrect_method",
                    "grid/api/grid_getcolumn_method",
                    {
                      type: "category",
                      label: "getHeaderFilter()",
                      link: {
                        type: 'doc',
                        id: "grid/api/grid_getheaderfilter_method",
                      },
                      items: [
                        "grid/api/headerfilter/blur_method",
                        "grid/api/headerfilter/clear_method",
                        "grid/api/headerfilter/focus_method",
                        "grid/api/headerfilter/getfilter_method",
                        "grid/api/headerfilter/setvalue_method",
                      ]
                    },
                    "grid/api/grid_getscrollstate_method",
                    "grid/api/grid_getsortingstate_method",
                    "grid/api/grid_getspan_method",
                    "grid/api/grid_hidecolumn_method",
                    "grid/api/grid_hiderow_method",
                    "grid/api/grid_iscolumnhidden_method",
                    "grid/api/grid_isrowhidden_method",
                    "grid/api/grid_paint_method",
                    "grid/api/grid_removecellcss_method",
                    "grid/api/grid_removerowcss_method",
                    "grid/api/grid_removespan_method",
                    "grid/api/grid_scroll_method",
                    "grid/api/grid_scrollto_method",
                    "grid/api/grid_setcolumns_method",
                    "grid/api/grid_showcolumn_method",
                    "grid/api/grid_showrow_method",
                  ],
                },
                {
                  type: "category",
                  label: "Grid events",
                  link: {
                    type: 'generated-index',
                    title: "Grid events",
                    keywords: ['grid events'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    id: "grid/api/overview/events_overview",
                  },*/
                  items: [
                    "grid/api/grid_aftercolumndrag_event",
                    "grid/api/grid_aftercolumndrop_event",
                    "grid/api/grid_aftercolumnhide_event",
                    "grid/api/grid_aftercolumnshow_event",
                    "grid/api/grid_aftereditend_event",
                    "grid/api/grid_aftereditstart_event",
                    "grid/api/grid_afterkeydown_event",
                    "grid/api/grid_afterresizeend_event",
                    "grid/api/grid_afterrowdrag_event",
                    "grid/api/grid_afterrowdrop_event",
                    "grid/api/grid_afterrowhide_event",
                    "grid/api/grid_afterrowresize_event",
                    "grid/api/grid_afterrowshow_event",
                    "grid/api/grid_aftersort_event",
                    "grid/api/grid_beforecolumndrag_event",
                    "grid/api/grid_beforecolumndrop_event",
                    "grid/api/grid_beforecolumnhide_event",
                    "grid/api/grid_beforecolumnshow_event",
                    "grid/api/grid_beforeeditend_event",
                    "grid/api/grid_beforeeditstart_event",
                    "grid/api/grid_beforefilter_event",
                    "grid/api/grid_beforekeydown_event",
                    "grid/api/grid_beforeresizestart_event",
                    "grid/api/grid_beforerowdrag_event",
                    "grid/api/grid_beforerowdrop_event",
                    "grid/api/grid_beforerowhide_event",
                    "grid/api/grid_beforerowresize_event",
                    "grid/api/grid_beforerowshow_event",
                    "grid/api/grid_beforesort_event",
                    "grid/api/grid_cancelcolumndrop_event",
                    "grid/api/grid_cancelrowdrop_event",
                    "grid/api/grid_cancolumndrop_event",
                    "grid/api/grid_canrowdrop_event",
                    "grid/api/grid_cellclick_event",
                    "grid/api/grid_celldblclick_event",
                    "grid/api/grid_cellmousedown_event",
                    "grid/api/grid_cellmouseover_event",
                    "grid/api/grid_cellrightclick_event",
                    "grid/api/grid_dragcolumnin_event",
                    "grid/api/grid_dragcolumnout_event",
                    "grid/api/grid_dragcolumnstart_event",
                    "grid/api/grid_dragrowin_event",
                    "grid/api/grid_dragrowout_event",
                    "grid/api/grid_dragrowstart_event",
                    "grid/api/grid_filterchange_event",
                    "grid/api/grid_footercellclick_event",
                    "grid/api/grid_footercelldblclick_event",
                    "grid/api/grid_footercellmousedown_event",
                    "grid/api/grid_footercellmouseover_event",
                    "grid/api/grid_footercellrightclick_event",
                    "grid/api/grid_headercellclick_event",
                    "grid/api/grid_headercelldblclick_event",
                    "grid/api/grid_headercellmousedown_event",
                    "grid/api/grid_headercellmouseover_event",
                    "grid/api/grid_headercellrightclick_event",
                    "grid/api/grid_resize_event",
                    "grid/api/grid_scroll_event",
                  ],
                },
                {
                  type: "category",
                  label: "Grid properties",
                  link: {
                    type: 'generated-index',
                    title: "Grid properties",
                    keywords: ['grid properties'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    id: "grid/api/overview/properties_overview",
                  },*/
                  items: [
                    "grid/api/grid_adjust_config",
                    "grid/api/grid_autoemptyrow_config",
                    "grid/api/grid_autoheight_config",
                    "grid/api/grid_autowidth_config",
                    "grid/api/grid_bottomsplit_config",
                    "grid/api/grid_columns_config",
                    "grid/api/grid_css_config",
                    "grid/api/grid_data_config",
                    "grid/api/grid_dragcopy_config",
                    "grid/api/grid_dragitem_config",
                    "grid/api/grid_dragmode_config",
                    "grid/api/grid_editable_config",
                    "grid/api/grid_eventhandlers_config",
                    "grid/api/grid_footerrowheight_config",
                    "grid/api/grid_headerrowheight_config",
                    "grid/api/grid_height_config",
                    "grid/api/grid_htmlenable_config",
                    "grid/api/grid_keynavigation_config",
                    "grid/api/grid_leftsplit_config",
                    "grid/api/grid_multiselection_config",
                    "grid/api/grid_resizable_config",
                    "grid/api/grid_rightsplit_config",
                    "grid/api/grid_rowcss_config",
                    "grid/api/grid_rowheight_config",
                    "grid/api/grid_selection_config",
                    "grid/api/grid_sortable_config",
                    "grid/api/grid_spans_config",
                    "grid/api/grid_tooltip_config",
                    "grid/api/grid_topsplit_config",
                    "grid/api/grid_width_config",
                  ],
                },
                "grid/api/api_gridcolumn_properties",
                {
                  type: "category",
                  label: "Selection API",
                  link: {
                    type: 'generated-index',
                    title: "Selection API",
                    keywords: ['selection API'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    id: "grid/api/overview/selection_overview",
                  },*/
                  items: [{
                    type: "category",
                    label: "Grid Selection methods",
                    link: {
                      type: 'generated-index',
                      title: "Grid Selection methods",
                      keywords: ['grid selection methods'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: {
                      type: 'doc',
                      id: "grid/api/overview/selection_methods_overview",
                    },*/
                    items: [
                      "grid/api/selection/selection_disable_method",
                      "grid/api/selection/selection_enable_method",
                      "grid/api/selection/selection_getcell_method",
                      "grid/api/selection/selection_getcells_method",
                      "grid/api/selection/selection_removecell_method",
                      "grid/api/selection/selection_setcell_method",
                    ],
                  },

                  {
                    type: "category",
                    label: "Grid Selection events",
                    link: {
                      type: 'generated-index',
                      title: "Grid Selection events",
                      keywords: ['grid selection events'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: {
                      type: 'doc',
                      id: "grid/api/overview/selection_events_overview",
                    },*/
                    items: [
                      "grid/api/selection/selection_afterselect_event",
                      "grid/api/selection/selection_afterunselect_event",
                      "grid/api/selection/selection_beforeselect_event",
                      "grid/api/selection/selection_beforeunselect_event",
                    ],
                  },
                  ],
                },
              ],
            },
            "grid/features",
            "grid/initialization",
            "grid/configuration",
            "grid/data_loading",
            "grid/usage",
            "grid/usage_selection",
            "grid/customization",
            "grid/events",
          ],
        },
        // end Grid

        //Layout
        {
          type: "category",
          label: "Layout",
          collapsed: true,
          /*link: {
            type: 'generated-index',
            title: "Layout",
            keywords: ['layout'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "layout/index"
          },
          items: [
            //"layout/index",
            {
              type: "category",
              label: "Layout API",
              collapsed: true,
              link: {
                type: 'doc',
                id: "layout/api/api_overview",
              },
              items: [
                //"layout/api/api_overview",
                {
                  type: "category",
                  label: "Common Layout API",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Common Layout API",
                    keywords: ['common layout api'],
                    image: '/img/docusaurus.png'
                  },
                  items: [{
                    type: "category",
                    label: "Layout methods",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Layout methods",
                      keywords: ['layout methods'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: {
                      type: 'doc',
                      id: "layout/api/overview/methods_overview",
                    },*/
                    items: [
                      "layout/api/layout_destructor_method",
                      "layout/api/layout_foreach_method",
                      "layout/api/layout_getcell_method",
                      "layout/api/layout_progresshide_method",
                      "layout/api/layout_progressshow_method",
                      "layout/api/layout_removecell_method",
                    ],
                  },
                  {
                    type: "category",
                    label: "Layout events",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Layout events",
                      keywords: ['layout events'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: {
                      type: 'doc',
                      id: "layout/api/overview/events_overview",
                    },*/
                    items: [
                      "layout/api/layout_afteradd_event",
                      "layout/api/layout_aftercollapse_event",
                      "layout/api/layout_afterexpand_event",
                      "layout/api/layout_afterhide_event",
                      "layout/api/layout_afterremove_event",
                      "layout/api/layout_afterresizeend_event",
                      "layout/api/layout_aftershow_event",
                      "layout/api/layout_beforeadd_event",
                      "layout/api/layout_beforecollapse_event",
                      "layout/api/layout_beforeexpand_event",
                      "layout/api/layout_beforehide_event",
                      "layout/api/layout_beforeremove_event",
                      "layout/api/layout_beforeresizestart_event",
                      "layout/api/layout_beforeshow_event",
                      "layout/api/layout_resize_event",
                    ],
                  },
                  {
                    type: "category",
                    label: "Layout properties",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Layout properties",
                      keywords: ['layout properties'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: {
                      type: 'doc',
                      id: "layout/api/overview/properties_overview",
                    },*/
                    items: [
                      "layout/api/layout_cols_config",
                      "layout/api/layout_css_config",
                      "layout/api/layout_rows_config",
                      "layout/api/layout_type_config",
                    ],
                  },
                  ],
                },
                {
                  type: "category",
                  label: "Cell API",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Cell API",
                    keywords: ['cell api'],
                    image: '/img/docusaurus.png'
                  },
                  items: [{
                    type: "category",
                    label: "Layout cell methods",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Layout cell methods",
                      keywords: ['layout cell methods'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: {
                      type: 'doc',
                      id: "layout/api/overview/cell_methods_overview",
                    },*/
                    items: [
                      "layout/api/cell/layout_cell_attach_method",
                      "layout/api/cell/layout_cell_attachhtml_method",
                      "layout/api/cell/layout_cell_collapse_method",
                      "layout/api/cell/layout_cell_detach_method",
                      "layout/api/cell/layout_cell_expand_method",
                      "layout/api/cell/layout_cell_getparent_method",
                      "layout/api/cell/layout_cell_getwidget_method",
                      "layout/api/cell/layout_cell_hide_method",
                      "layout/api/cell/layout_cell_isvisible_method",
                      "layout/api/cell/layout_cell_paint_method",
                      "layout/api/cell/layout_cell_progresshide_method",
                      "layout/api/cell/layout_cell_progressshow_method",
                      "layout/api/cell/layout_cell_show_method",
                      "layout/api/cell/layout_cell_toggle_method",
                    ],
                  },
                  {
                    type: "category",
                    label: "Layout cell properties",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Layout cell properties",
                      keywords: ['layout cell properties'],
                      image: '/img/docusaurus.png'
                    },
                    /*link: {
                      type: 'doc',
                      id: "layout/api/overview/cell_properties_overview",
                    },*/
                    items: [
                      "layout/api/cell/layout_cell_align_config",
                      "layout/api/cell/layout_cell_collapsable_config",
                      "layout/api/cell/layout_cell_collapsed_config",
                      "layout/api/cell/layout_cell_css_config",
                      "layout/api/cell/layout_cell_gravity_config",
                      "layout/api/cell/layout_cell_header_config",
                      "layout/api/cell/layout_cell_headerheight_config",
                      "layout/api/cell/layout_cell_headericon_config",
                      "layout/api/cell/layout_cell_headerimage_config",
                      "layout/api/cell/layout_cell_height_config",
                      "layout/api/cell/layout_cell_hidden_config",
                      "layout/api/cell/layout_cell_html_config",
                      "layout/api/cell/layout_cell_id_config",
                      "layout/api/cell/layout_cell_maxheight_config",
                      "layout/api/cell/layout_cell_maxwidth_config",
                      "layout/api/cell/layout_cell_minheight_config",
                      "layout/api/cell/layout_cell_minwidth_config",
                      "layout/api/cell/layout_cell_on_config",
                      "layout/api/cell/layout_cell_padding_config",
                      "layout/api/cell/layout_cell_progressdefault_config",
                      "layout/api/cell/layout_cell_resizable_config",
                      "layout/api/cell/layout_cell_type_config",
                      "layout/api/cell/layout_cell_width_config",
                    ],
                  },
                  ],
                },
              ],
            },
            "layout/features",
            "layout/initialization",
            {
              type: "category",
              label: "Configuration",
              link: {
                type: 'generated-index',
                title: "Configuration",
                keywords: ['configuration'],
                image: '/img/docusaurus.png'
              },
              items: [
                "layout/layout_structure",
                "layout/layout_patterns",
                "layout/cell_configuration",
              ]
            },
            "layout/work_with_layout",
            "layout/customization",
            "layout/events",
          ],
        },
        // end Layout

        //List
        {
          type: "category",
          label: "List",
          /*link: {
            type: 'generated-index',
            title: "List",
            keywords: ['list'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "list/index"
          },
          items: [
            //"list/index",
            {
              type: "category",
              label: "List API",
              link: {
                type: 'doc',
                id: "list/api/api_overview"
              },
              items: [
                //"list/api/api_overview",
                {
                  type: "category",
                  label: "List methods",
                  link: {
                    type: 'generated-index',
                    title: "List methods",
                    keywords: ['list methods'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    id: "list/api/overview/methods_overview"
                  },*/
                  items: [
                    "list/api/list_destructor_method",
                    "list/api/list_edititem_method",
                    "list/api/list_getfocus_method",
                    "list/api/list_getfocusitem_method",
                    "list/api/list_paint_method",
                    "list/api/list_setfocus_method",
                  ],
                },
                {
                  type: "category",
                  label: "List events",
                  link: {
                    type: 'generated-index',
                    title: "List events",
                    keywords: ['list events'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    id: "list/api/overview/events_overview"
                  },*/
                  items: [
                    "list/api/list_afterdrag_event",
                    "list/api/list_afterdrop_event",
                    "list/api/list_aftereditend_event",
                    "list/api/list_aftereditstart_event",
                    "list/api/list_beforedrag_event",
                    "list/api/list_beforedrop_event",
                    "list/api/list_beforeeditend_event",
                    "list/api/list_beforeeditstart_event",
                    "list/api/list_canceldrop_event",
                    "list/api/list_candrop_event",
                    "list/api/list_click_event",
                    "list/api/list_doubleclick_event",
                    "list/api/list_dragin_event",
                    "list/api/list_dragout_event",
                    "list/api/list_dragstart_event",
                    "list/api/list_focuschange_event",
                    "list/api/list_itemmouseover_event",
                    "list/api/list_itemrightclick_event",
                  ],
                },
                {
                  type: "category",
                  label: "List properties",
                  link: {
                    type: 'generated-index',
                    title: "List properties",
                    keywords: ['list properties'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    id: "list/api/overview/properties_overview"
                  },*/
                  items: [
                    "list/api/list_css_config",
                    "list/api/list_data_config",
                    "list/api/list_dragcopy_config",
                    "list/api/list_dragmode_config",
                    "list/api/list_editable_config",
                    "list/api/list_eventhandlers_config",
                    "list/api/list_height_config",
                    "list/api/list_htmlenable_config",
                    "list/api/list_itemheight_config",
                    "list/api/list_keynavigation_config",
                    "list/api/list_multiselection_config",
                    "list/api/list_selection_config",
                    "list/api/list_template_config",
                    "list/api/list_virtual_config",
                  ],
                },
              ],
            },
            "list/features",
            "list/initialization",
            "list/configuration",
            "list/load_data",
            "list/work_with_list",
            "list/usage_selection",
            "list/customization",
            "list/events",
          ],
        },
        // end List

        //Menu
        {
          type: "category",
          label: "Menu",
          /*link: {
            type: 'generated-index',
            title: "Menu",
            keywords: ['menu'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "menu/index"
          },
          items: [
            //"menu/index",
            {
              type: "category",
              label: "Menu API",
              link: {
                type: 'doc',
                id: "menu/api/api_overview",
              },
              items: [
                //"menu/api/api_overview",
                {
                  type: "category",
                  label: "Menu methods",
                  link: {
                    type: 'generated-index',
                    title: "Menu methods",
                    keywords: ['menu methods'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    id: "menu/api/overview/methods_overview",
                  },*/
                  items: [
                    "menu/api/menu_destructor_method",
                    "menu/api/menu_disable_method",
                    "menu/api/menu_enable_method",
                    "menu/api/menu_getselected_method",
                    "menu/api/menu_hide_method",
                    "menu/api/menu_isdisabled_method",
                    "menu/api/menu_isselected_method",
                    "menu/api/menu_paint_method",
                    "menu/api/menu_select_method",
                    "menu/api/menu_show_method",
                    "menu/api/menu_showat_method",
                    "menu/api/menu_unselect_method",
                  ],
                },
                {
                  type: "category",
                  label: "Menu events",
                  link: {
                    type: 'generated-index',
                    title: "Menu events",
                    keywords: ['menu events'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    id: "menu/api/overview/events_overview",
                  },*/
                  items: [
                    "menu/api/menu_afterhide_event",
                    "menu/api/menu_beforehide_event",
                    "menu/api/menu_click_event",
                    "menu/api/menu_inputblur_event",
                    "menu/api/menu_inputcreated_event",
                    "menu/api/menu_inputfocus_event",
                    "menu/api/menu_openmenu_event",
                  ],
                },
                {
                  type: "category",
                  label: "Menu properties",
                  link: {
                    type: 'generated-index',
                    title: "Menu properties",
                    keywords: ['menu properties'],
                    image: '/img/docusaurus.png'
                  },
                  /*link: {
                    type: 'doc',
                    id: "menu/api/overview/properties_overview",
                  },*/
                  items: [
                    "menu/api/menu_css_config",
                    "menu/api/menu_data_config",
                    "menu/api/menu_menucss_config",
                    "menu/api/menu_navigationtype_config",
                  ],
                },
                "menu/api/api_menuitem_properties",
                "menu/api/api_navitem_properties",
                "menu/api/api_customhtml_properties",
                "menu/api/api_separator_properties",
                "menu/api/api_spacer_properties",
              ],
            },
            "menu/features",
            "menu/how_to_start",
            "menu/configuring_menu_items",
            "menu/data_loading",
            "menu/work_with_menu",
            "menu/creating_context_menu",
            "menu/customization",
            "menu/handling_events",
          ],
        },
        // end Menu

        //Message (without API)
        {
          type: "category",
          label: "Message",
          /*link: {
            type: 'generated-index',
            title: "Message",
            keywords: ['message'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "message/index"
          },
          items: [
            //"menu/index",
            {
              type: "category",
              label: "Message API",
              link: {
                type: 'generated-index',
                title: "Message API",
                keywords: ['message API'],
                image: '/img/docusaurus.png'
              },
              items: [
                //"message/index",
                {
                  type: "category",
                  label: "Message box methods",
                  link: {
                    type: 'generated-index',
                    title: "Message box methods",
                    keywords: ['message box methods'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "message/api/message_close_method",
                  ],
                },
                {
                  /*type: "category",
                  label: "Message API",
                  link: {*/
                    type: 'doc',
                    id: "message/api/api_message_properties",
                  // },
                  /*items: [
                  "message/api/api_message_properties",
                ],*/
                }
              ]
            },
            "message/features",
            "message/overview",
            "message/creating_message",
            "message/configuration",
            "message/customization",
          ],
        },
        // end Message

        //Pagination
        {
          type: "category",
          label: "Pagination",
          /*link: {
            type: 'generated-index',
            title: "Pagination",
            keywords: ['pagination'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "pagination/index"
          },
          items: [
            //"pagination/index",
            {
              type: "category",
              label: "Pagination API",
              link: {
                type: 'doc',
                id: "pagination/api/api_overview",
              },
              items: [
                //"pagination/api/api_overview",
                {
                  type: "category",
                  label: "Pagination methods",
                  link: {
                    type: 'generated-index',
                    title: "Pagination methods",
                    keywords: ['pagination methods'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "pagination/api/pagination_destructor_method",
                    "pagination/api/pagination_getpage_method",
                    "pagination/api/pagination_getpagescount_method",
                    "pagination/api/pagination_getpagesize_method",
                    "pagination/api/pagination_setpage_method",
                    "pagination/api/pagination_setpagesize_method",
                  ],
                },
                {
                  type: "category",
                  label: "Pagination events",
                  link: {
                    type: 'generated-index',
                    title: "Pagination events",
                    keywords: ['pagination events'],
                    image: '/img/docusaurus.png'
                  },
                  items: ["pagination/api/pagination_change_event"],
                },
                {
                  type: "category",
                  label: "Pagination properties",
                  link: {
                    type: 'generated-index',
                    title: "Pagination properties",
                    keywords: ['pagination properties'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "pagination/api/pagination_css_config",
                    "pagination/api/pagination_data_config",
                    "pagination/api/pagination_inputwidth_config",
                    "pagination/api/pagination_page_config",
                    "pagination/api/pagination_pagesize_config",
                  ],
                },
              ],
            },
            "pagination/features",
            "pagination/init",
            "pagination/configuration",
            "pagination/usage",
            "pagination/customization",
            "pagination/handling_events",
          ],
        },
        // end Pagination

        //Popup
        {
          type: "category",
          label: "Popup",
          /*link: {
            type: 'generated-index',
            title: "Popup",
            keywords: ['popup'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "popup/index"
          },
          items: [
            //"popup/index",
            {
              type: "category",
              label: "Popup API",
              link: {
                type: 'doc',
                id: "popup/api/api_overview",
              },
              items: [
                //"popup/api/api_overview",
                {
                  type: "category",
                  label: "Popup methods",
                  link: {
                    type: 'generated-index',
                    title: "Popup methods",
                    keywords: ['popup methods'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "popup/api/popup_attach_method",
                    "popup/api/popup_attachhtml_method",
                    "popup/api/popup_destructor_method",
                    "popup/api/popup_getcontainer_method",
                    "popup/api/popup_getwidget_method",
                    "popup/api/popup_hide_method",
                    "popup/api/popup_isvisible_method",
                    "popup/api/popup_paint_method",
                    "popup/api/popup_show_method",
                  ],
                },
                {
                  type: "category",
                  label: "Popup events",
                  link: {
                    type: 'generated-index',
                    title: "Popup events",
                    keywords: ['popup events'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "popup/api/popup_afterhide_event",
                    "popup/api/popup_aftershow_event",
                    "popup/api/popup_beforehide_event",
                    "popup/api/popup_beforeshow_event",
                    "popup/api/popup_click_event",
                  ],
                },
                {
                  type: "category",
                  label: "Popup properties",
                  link: {
                    type: 'generated-index',
                    title: "Popup properties",
                    keywords: ['popup properties'],
                    image: '/img/docusaurus.png'
                  },
                  items: ["popup/api/popup_css_config"],
                },
              ],
            },
            "popup/features",
            "popup/initialization",
            "popup/work_with_popup",
            "popup/customization",
            "popup/event_handling",
          ],
        },
        // end Popup

        //Ribbon
        {
          type: "category",
          label: "Ribbon",
          /*link: {
            type: 'generated-index',
            title: "Ribbon",
            keywords: ['ribbon'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "ribbon/index"
          },
          items: [
            //"ribbon/index",
            {
              type: "category",
              label: "Ribbon API",
              link: {
                type: 'doc',
                id: "ribbon/api/api_overview",
              },
              items: [
                //"ribbon/api/api_overview",
                {
                  type: "category",
                  label: "Ribbon methods",
                  link: {
                    type: 'generated-index',
                    title: "Ribbon methods",
                    keywords: ['ribbon methods'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "ribbon/api/ribbon_destructor_method",
                    "ribbon/api/ribbon_disable_method",
                    "ribbon/api/ribbon_enable_method",
                    "ribbon/api/ribbon_getselected_method",
                    "ribbon/api/ribbon_getstate_method",
                    "ribbon/api/ribbon_hide_method",
                    "ribbon/api/ribbon_isdisabled_method",
                    "ribbon/api/ribbon_isselected_method",
                    "ribbon/api/ribbon_paint_method",
                    "ribbon/api/ribbon_select_method",
                    "ribbon/api/ribbon_setstate_method",
                    "ribbon/api/ribbon_show_method",
                    "ribbon/api/ribbon_unselect_method",
                  ],
                },
                {
                  type: "category",
                  label: "Ribbon events",
                  link: {
                    type: 'generated-index',
                    title: "Ribbon events",
                    keywords: ['ribbon events'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "ribbon/api/ribbon_click_event",
                    "ribbon/api/ribbon_inputblur_event",
                    "ribbon/api/ribbon_inputcreated_event",
                    "ribbon/api/ribbon_inputfocus_event",
                    "ribbon/api/ribbon_openmenu_event",
                  ],
                },
                {
                  type: "category",
                  label: "Ribbon properties",
                  link: {
                    type: 'generated-index',
                    title: "Ribbon properties",
                    keywords: ['ribbon properties'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "ribbon/api/ribbon_css_config",
                    "ribbon/api/ribbon_data_config",
                    "ribbon/api/ribbon_menucss_config",
                  ],
                },
                "ribbon/api/api_block_properties",
                "ribbon/api/api_button_properties",
                "ribbon/api/api_customhtml_properties",
                "ribbon/api/api_imagebutton_properties",
                "ribbon/api/api_input_properties",
                "ribbon/api/api_navitem_properties",
                "ribbon/api/api_selectbutton_properties",
                "ribbon/api/api_separator_properties",
                "ribbon/api/api_spacer_properties",
                "ribbon/api/api_title_properties",
              ],
            },
            "ribbon/features",
            "ribbon/how_to_start",
            {
              type: "category",
              label: "List of Ribbon controls",
              link: {
                type: 'generated-index',
                title: "List of Ribbon controls",
                keywords: ['list of ribbon controls'],
                image: '/img/docusaurus.png'
              },
              items: [
                "ribbon/block",
                "ribbon/button",
                "ribbon/customhtmlbutton",
                "ribbon/image_button",
                "ribbon/input",
                "ribbon/navitem",
                "ribbon/selectbutton",
                "ribbon/separator",
                "ribbon/spacer",
                "ribbon/title",
              ]
            },
            "ribbon/data_loading",
            "ribbon/operating_ribbon",
            "ribbon/customization",
            "ribbon/handling_events",
          ],
        },
        // end Ribbon

        //Sidebar
        {
          type: "category",
          label: "Sidebar",
          /*link: {
            type: 'generated-index',
            title: "Sidebar",
            keywords: ['sidebar'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "sidebar/index"
          },
          items: [
            //"sidebar/index",
            {
              type: "category",
              label: "Sidebar API",
              link: {
                type: 'doc',
                id: "sidebar/api/api_overview",
              },
              items: [
                //"sidebar/api/api_overview",
                {
                  type: "category",
                  label: "Sidebar methods",
                  link: {
                    type: 'generated-index',
                    title: "Sidebar methods",
                    keywords: ['sidebar methods'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "sidebar/api/sidebar_collapse_method",
                    "sidebar/api/sidebar_destructor_method",
                    "sidebar/api/sidebar_disable_method",
                    "sidebar/api/sidebar_enable_method",
                    "sidebar/api/sidebar_expand_method",
                    "sidebar/api/sidebar_getselected_method",
                    "sidebar/api/sidebar_hide_method",
                    "sidebar/api/sidebar_iscollapsed_method",
                    "sidebar/api/sidebar_isdisabled_method",
                    "sidebar/api/sidebar_isselected_method",
                    "sidebar/api/sidebar_paint_method",
                    "sidebar/api/sidebar_select_method",
                    "sidebar/api/sidebar_show_method",
                    "sidebar/api/sidebar_toggle_method",
                    "sidebar/api/sidebar_unselect_method",
                  ],
                },
                {
                  type: "category",
                  label: "Sidebar events",
                  link: {
                    type: 'generated-index',
                    title: "Sidebar events",
                    keywords: ['sidebar events'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "sidebar/api/sidebar_aftercollapse_event",
                    "sidebar/api/sidebar_afterexpand_event",
                    "sidebar/api/sidebar_afterhide_event",
                    "sidebar/api/sidebar_beforecollapse_event",
                    "sidebar/api/sidebar_beforeexpand_event",
                    "sidebar/api/sidebar_beforehide_event",
                    "sidebar/api/sidebar_click_event",
                    "sidebar/api/sidebar_inputblur_event",
                    "sidebar/api/sidebar_inputcreated_event",
                    "sidebar/api/sidebar_inputfocus_event",
                    "sidebar/api/sidebar_openmenu_event",
                  ],
                },
                {
                  type: "category",
                  label: "Sidebar properties",
                  link: {
                    type: 'generated-index',
                    title: "Sidebar properties",
                    keywords: ['sidebar properties'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "sidebar/api/sidebar_collapsed_config",
                    "sidebar/api/sidebar_css_config",
                    "sidebar/api/sidebar_data_config",
                    "sidebar/api/sidebar_menucss_config",
                    "sidebar/api/sidebar_minwidth_config",
                    "sidebar/api/sidebar_width_config",
                  ],
                },
                "sidebar/api/api_customhtml_properties",
                "sidebar/api/api_menuitem_properties",
                "sidebar/api/api_navitem_properties",
                "sidebar/api/api_separator_properties",
                "sidebar/api/api_spacer_properties",
                "sidebar/api/api_title_properties",
              ],
            },
            "sidebar/features",
            "sidebar/initialization",
            {
              type: "category",
              label: "List of Sidebar controls",
              link: {
                type: 'generated-index',
                title: "List of Sidebar controls",
                keywords: ['list of sidebar controls'],
                image: '/img/docusaurus.png'
              },
              items: [
                "sidebar/customhtmlbutton",
                "sidebar/menuitem",
                "sidebar/navitem",
                "sidebar/separator",
                "sidebar/spacer",
                "sidebar/title",
              ],
            },
            "sidebar/data_loading",
            "sidebar/sidebar_config",
            "sidebar/work_with_sidebar",
            "sidebar/customization",
            "sidebar/events",
          ],
        },
        // end Sidebar

        //Slider
        {
          type: "category",
          label: "Slider",
          /*link: {
            type: 'generated-index',
            title: "Slider",
            keywords: ['slider'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "slider/index"
          },
          items: [
            //"slider/index",
            {
              type: "category",
              label: "Slider API",
              link: {
                type: 'doc',
                id: "slider/api/api_overview",
              },
              items: [
                //"slider/api/api_overview",
                {
                  type: "category",
                  label: "Slider methods",
                  link: {
                    type: 'generated-index',
                    title: "Slider methods",
                    keywords: ['slider methods'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "slider/api/slider_blur_method",
                    "slider/api/slider_destructor_method",
                    "slider/api/slider_disable_method",
                    "slider/api/slider_enable_method",
                    "slider/api/slider_focus_method",
                    "slider/api/slider_getvalue_method",
                    "slider/api/slider_isdisabled_method",
                    "slider/api/slider_paint_method",
                    "slider/api/slider_setvalue_method",
                  ],
                },
                {
                  type: "category",
                  label: "Slider events",
                  link: {
                    type: 'generated-index',
                    title: "Slider events",
                    keywords: ['slider events'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "slider/api/slider_blur_event",
                    "slider/api/slider_change_event",
                    "slider/api/slider_focus_event",
                    "slider/api/slider_keydown_event",
                    "slider/api/slider_mousedown_event",
                    "slider/api/slider_mouseup_event",
                  ],
                },
                {
                  type: "category",
                  label: "Slider properties",
                  link: {
                    type: 'generated-index',
                    title: "Slider properties",
                    keywords: ['slider properties'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "slider/api/slider_css_config",
                    "slider/api/slider_helpmessage_config",
                    "slider/api/slider_hiddenlabel_config",
                    "slider/api/slider_inverse_config",
                    "slider/api/slider_label_config",
                    "slider/api/slider_labelposition_config",
                    "slider/api/slider_labelwidth_config",
                    "slider/api/slider_majortick_config",
                    "slider/api/slider_max_config",
                    "slider/api/slider_min_config",
                    "slider/api/slider_mode_config",
                    "slider/api/slider_range_config",
                    "slider/api/slider_step_config",
                    "slider/api/slider_tick_config",
                    "slider/api/slider_ticktemplate_config",
                    "slider/api/slider_tooltip_config",
                    "slider/api/slider_value_config",
                  ],
                },
              ],
            },
            "slider/features",
            "slider/initializing_slider",
            "slider/configuring_slider",
            "slider/range_slider",
            "slider/usage",
            "slider/customization",
            "slider/handling_events",
          ],
        },
        // end Slider

        //Tabbar
        {
          type: "category",
          label: "Tabbar",
          /*link: {
            type: 'generated-index',
            title: "Tabbar",
            keywords: ['tabbar'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "tabbar/index"
          },
          items: [
            //"tabbar/index",
            {
              type: "category",
              label: "Tabbar API",
              link: {
                type: 'doc',
                id: "tabbar/api/api_overview",
              },
              items: [
                {
                  type: "category",
                  label: "Common Tabbar API",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Common Tabbar API",
                    keywords: ['common tabbar api'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    //"tabbar/api/api_overview",
                    {
                      type: "category",
                      label: "Tabbar methods",
                      link: {
                        type: 'generated-index',
                        title: "Tabbar methods",
                        keywords: ['tabbar methods'],
                        image: '/img/docusaurus.png'
                      },
                      items: [
                        "tabbar/api/tabbar_addtab_method",
                        "tabbar/api/tabbar_destructor_method",
                        "tabbar/api/tabbar_disabletab_method",
                        "tabbar/api/tabbar_enabletab_method",
                        "tabbar/api/tabbar_getactive_method",
                        "tabbar/api/tabbar_getcell_method",
                        "tabbar/api/tabbar_getid_method",
                        "tabbar/api/tabbar_getwidget_method",
                        "tabbar/api/tabbar_isdisabled_method",
                        "tabbar/api/tabbar_paint_method",
                        "tabbar/api/tabbar_removetab_method",
                        "tabbar/api/tabbar_setactive_method",
                      ],
                    },
                    {
                      type: "category",
                      label: "Tabbar events",
                      link: {
                        type: 'generated-index',
                        title: "Tabbar events",
                        keywords: ['tabbar events'],
                        image: '/img/docusaurus.png'
                      },
                      items: [
                        "tabbar/api/tabbar_afterclose_event",
                        "tabbar/api/tabbar_beforechange_event",
                        "tabbar/api/tabbar_beforeclose_event",
                        "tabbar/api/tabbar_change_event",
                      ],
                    },
                    {
                      type: "category",
                      label: "Tabbar properties",
                      link: {
                        type: 'generated-index',
                        title: "Tabbar properties",
                        keywords: ['tabbar properties'],
                        image: '/img/docusaurus.png'
                      },
                      items: [
                        "tabbar/api/tabbar_activetab_config",
                        "tabbar/api/tabbar_closable_config",
                        "tabbar/api/tabbar_css_config",
                        "tabbar/api/tabbar_disabled_config",
                        "tabbar/api/tabbar_mode_config",
                        "tabbar/api/tabbar_nocontent_config",
                        "tabbar/api/tabbar_tabalign_config",
                        "tabbar/api/tabbar_tabautoheight_config",
                        "tabbar/api/tabbar_tabautowidth_config",
                        "tabbar/api/tabbar_tabheight_config",
                        "tabbar/api/tabbar_tabwidth_config",
                        "tabbar/api/tabbar_views_config",
                      ],
                    },
                  ],
                },
                {
                  type: "category",
                  label: "Cell API",
                  collapsed: true,
                  link: {
                    type: 'generated-index',
                    title: "Cell API",
                    keywords: ['cell api'],
                    image: '/img/docusaurus.png'
                  },
                  items: [{
                    type: "category",
                    label: "Tabbar cell methods",
                    collapsed: true,
                    link: {
                      type: 'generated-index',
                      title: "Tabbar cell methods",
                      keywords: ['tabbar cell methods'],
                      image: '/img/docusaurus.png'
                    },
                    items: [
                      "tabbar/api/cell/tabbar_cell_attach_method",
                      "tabbar/api/cell/tabbar_cell_attachhtml_method",
                      "tabbar/api/cell/tabbar_cell_getparent_method",
                      "tabbar/api/cell/tabbar_cell_getwidget_method",
                    ],
                  }]
                }
              ]
            },
            "tabbar/features",
            "tabbar/init",
            "tabbar/configuring_tabbar",
            "tabbar/work_with_tabbar",
            "tabbar/customization",
            "tabbar/events",
          ],
        },
        // end Tabbar

        //Timepicker
        {
          type: "category",
          label: "Timepicker",
          /*link: {
            type: 'generated-index',
            title: "Timepicker",
            keywords: ['timepicker'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "timepicker/index"
          },
          // collapsed: false,
          items: [
            //"timepicker/index",
            {
              type: "category",
              label: "Timepicker API",
              link: {
                type: 'doc',
                id: "timepicker/api/api_overview",
              },
              items: [
                //"timepicker/api/api_overview",
                {
                  type: "category",
                  label: "Timepicker methods",
                  link: {
                    type: 'generated-index',
                    title: "Timepicker methods",
                    keywords: ['timepicker methods'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "timepicker/api/timepicker_clear_method",
                    "timepicker/api/timepicker_destructor_method",
                    "timepicker/api/timepicker_getvalue_method",
                    "timepicker/api/timepicker_paint_method",
                    "timepicker/api/timepicker_setvalue_method",
                  ],
                },
                {
                  type: "category",
                  label: "Timepicker events",
                  link: {
                    type: 'generated-index',
                    title: "Timepicker events",
                    keywords: ['timepicker events'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "timepicker/api/timepicker_afterapply_event",
                    "timepicker/api/timepicker_afterclose_event",
                    "timepicker/api/timepicker_beforeapply_event",
                    "timepicker/api/timepicker_beforechange_event",
                    "timepicker/api/timepicker_beforeclose_event",
                    "timepicker/api/timepicker_change_event",
                  ],
                },
                {
                  type: "category",
                  label: "Timepicker properties",
                  link: {
                    type: 'generated-index',
                    title: "Timepicker properties",
                    keywords: ['timepicker properties'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "timepicker/api/timepicker_controls_config",
                    "timepicker/api/timepicker_css_config",
                    "timepicker/api/timepicker_timeformat_config",
                    "timepicker/api/timepicker_value_config",
                    "timepicker/api/timepicker_valueformat_config",
                  ],
                },
              ],
            },
            "timepicker/features",
            "timepicker/initialization",
            "timepicker/configuration",
            "timepicker/usage",
            "timepicker/customization",
            "timepicker/handling_events",
          ],
        },
        // end Timepicker

        //Toolbar
        {
          type: "category",
          label: "Toolbar",
          /*link: {
            type: 'generated-index',
            title: "Toolbar",
            keywords: ['toolbar'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "toolbar/index"
          },
          items: [
            //"toolbar/index",
            {
              type: "category",
              label: "Toolbar API",
              link: {
                type: 'doc',
                id: "toolbar/api/api_overview",
              },
              items: [
                //"toolbar/api/api_overview",
                {
                  type: "category",
                  label: "Toolbar methods",
                  link: {
                    type: 'generated-index',
                    title: "Toolbar methods",
                    keywords: ['toolbar methods'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "toolbar/api/toolbar_destructor_method",
                    "toolbar/api/toolbar_disable_method",
                    "toolbar/api/toolbar_enable_method",
                    "toolbar/api/toolbar_getselected_method",
                    "toolbar/api/toolbar_getstate_method",
                    "toolbar/api/toolbar_hide_method",
                    "toolbar/api/toolbar_isdisabled_method",
                    "toolbar/api/toolbar_isselected_method",
                    "toolbar/api/toolbar_paint_method",
                    "toolbar/api/toolbar_select_method",
                    "toolbar/api/toolbar_setfocus_method",
                    "toolbar/api/toolbar_setstate_method",
                    "toolbar/api/toolbar_show_method",
                    "toolbar/api/toolbar_unselect_method",
                  ],
                },
                {
                  type: "category",
                  label: "Toolbar events",
                  link: {
                    type: 'generated-index',
                    title: "Toolbar events",
                    keywords: ['toolbar events'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "toolbar/api/toolbar_afterhide_event",
                    "toolbar/api/toolbar_beforehide_event",
                    "toolbar/api/toolbar_click_event",
                    "toolbar/api/toolbar_inputblur_event",
                    "toolbar/api/toolbar_inputchange_event",
                    "toolbar/api/toolbar_inputcreated_event",
                    "toolbar/api/toolbar_inputfocus_event",
                    "toolbar/api/toolbar_openmenu_event",
                  ],
                },
                {
                  type: "category",
                  label: "Toolbar properties",
                  link: {
                    type: 'generated-index',
                    title: "Toolbar properties",
                    keywords: ['toolbar properties'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "toolbar/api/toolbar_css_config",
                    "toolbar/api/toolbar_data_config",
                    "toolbar/api/toolbar_menucss_config",
                  ],
                },
                "toolbar/api/api_button_properties",
                "toolbar/api/api_customhtmlbutton_properties",
                "toolbar/api/api_datepicker_properties",
                "toolbar/api/api_imagebutton_properties",
                "toolbar/api/api_input_properties",
                "toolbar/api/api_menuitem_properties",
                "toolbar/api/api_navitem_properties",
                "toolbar/api/api_selectbutton_properties",
                "toolbar/api/api_separator_properties",
                "toolbar/api/api_spacer_properties",
                "toolbar/api/api_title_properties",
              ],
            },
            "toolbar/features",
            "toolbar/how_to_start",
            {
              type: "category",
              label: "List of Toolbar controls",
              link: {
                type: 'generated-index',
                title: "List of Toolbar controls",
                keywords: ['list of toolbar controls'],
                image: '/img/docusaurus.png'
              },
              items: [
                "toolbar/button",
                "toolbar/customhtmlbutton",
                "toolbar/datepicker",
                "toolbar/image_button",
                "toolbar/input",
                "toolbar/menuitem",
                "toolbar/navitem",
                "toolbar/selectbutton",
                "toolbar/separator",
                "toolbar/spacer",
                "toolbar/title",
              ],
            },
            "toolbar/load_data",
            "toolbar/common_methods",
            "toolbar/customization",
            "toolbar/handling_events",
          ],
        },
        // end Toolbar

        //Tree
        {
          type: "category",
          label: "Tree",
          /*link: {
            type: 'generated-index',
            title: "Tree",
            keywords: ['tree'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "tree/index"
          },
          items: [
            //"tree/index",
            {
              type: "category",
              label: "Tree API",
              link: {
                type: 'doc',
                id: "tree/api/api_overview",
              },
              items: [
                //"tree/api/api_overview",
                {
                  type: "category",
                  label: "Tree methods",
                  link: {
                    type: 'generated-index',
                    title: "Tree methods",
                    keywords: ['tree methods'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "tree/api/tree_checkitem_method",
                    "tree/api/tree_collapse_method",
                    "tree/api/tree_collapseall_method",
                    "tree/api/tree_destructor_method",
                    "tree/api/tree_edititem_method",
                    "tree/api/tree_expand_method",
                    "tree/api/tree_expandall_method",
                    "tree/api/tree_focusitem_method",
                    "tree/api/tree_getchecked_method",
                    "tree/api/tree_getstate_method",
                    "tree/api/tree_paint_method",
                    "tree/api/tree_setstate_method",
                    "tree/api/tree_toggle_method",
                    "tree/api/tree_uncheckitemnew_method",
                  ],
                },
                {
                  type: "category",
                  label: "Tree events",
                  link: {
                    type: 'generated-index',
                    title: "Tree events",
                    keywords: ['tree events'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "tree/api/tree_aftercheck_event",
                    "tree/api/tree_aftercollapse_event",
                    "tree/api/tree_afterdrag_event",
                    "tree/api/tree_afterdrop_event",
                    "tree/api/tree_aftereditend_event",
                    "tree/api/tree_aftereditstart_event",
                    "tree/api/tree_afterexpand_event",
                    "tree/api/tree_beforecheck_event",
                    "tree/api/tree_beforecollapse_event",
                    "tree/api/tree_beforedrag_event",
                    "tree/api/tree_beforedrop_event",
                    "tree/api/tree_beforeeditend_event",
                    "tree/api/tree_beforeeditstart_event",
                    "tree/api/tree_beforeexpand_event",
                    "tree/api/tree_canceldrop_event",
                    "tree/api/tree_candrop_event",
                    "tree/api/tree_dragin_event",
                    "tree/api/tree_dragout_event",
                    "tree/api/tree_dragstart_event",
                    "tree/api/tree_focuschange_event",
                    "tree/api/tree_itemclick_event",
                    "tree/api/tree_itemdblclick_event",
                    "tree/api/tree_itemrightclick_event",
                  ],
                },
                {
                  type: "category",
                  label: "Tree properties",
                  link: {
                    type: 'generated-index',
                    title: "Tree properties",
                    keywords: ['tree properties'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "tree/api/tree_autoload_config",
                    "tree/api/tree_checkbox_config",
                    "tree/api/tree_css_config",
                    "tree/api/tree_data_config",
                    "tree/api/tree_dragcopy_config",
                    "tree/api/tree_dragmode_config",
                    "tree/api/tree_dropbehaviour_config",
                    "tree/api/tree_editable_config",
                    "tree/api/tree_eventhandlers_config",
                    "tree/api/tree_icon_config",
                    "tree/api/tree_isfolder_config",
                    "tree/api/tree_itemheight_config",
                    "tree/api/tree_keynavigation_config",
                    "tree/api/tree_rootid_config",
                    "tree/api/tree_selection_config",
                    "tree/api/tree_template_config",
                  ],
                },
              ],
            },
            "tree/features",
            "tree/initialization_of_dhtmlxtree",
            "tree/configuration",
            "tree/loading_data",
            "tree/drag_and_drop_handling",
            "tree/work_with_tree",
            "tree/usage_selection",
            "tree/setting_tree_appearance",
            "tree/events_handling",
          ],
        },
        // end Tree

        //TreeGrid
        {
          type: "category",
          label: "TreeGrid",
          /*link: {
            type: 'generated-index',
            title: "TreeGrid",
            keywords: ['treegrid'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "treegrid/index"
          },
          items: [
            //"treegrid/index",
            {
              type: "category",
              label: "TreeGrid API",
              link: {
                type: 'doc',
                id: "treegrid/api/api_overview",
              },
              items: [
                //"treegrid/api/api_overview",
                {
                  type: "category",
                  label: "TreeGrid methods",
                  link: {
                    type: 'generated-index',
                    title: "TreeGrid methods",
                    keywords: ['treegrid methods'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "treegrid/api/treegrid_addcellcss_method",
                    "treegrid/api/treegrid_addrowcss_method",
                    "treegrid/api/treegrid_addspan_method",
                    "treegrid/api/treegrid_adjustcolumnwidth_method",
                    "treegrid/api/treegrid_collapse_method",
                    "treegrid/api/treegrid_collapseall_method",
                    "treegrid/api/treegrid_destructor_method",
                    "treegrid/api/treegrid_editcell_method",
                    "treegrid/api/treegrid_editend_method",
                    "treegrid/api/treegrid_expand_method",
                    "treegrid/api/treegrid_expandall_method",
                    "treegrid/api/treegrid_getcellrect_method",
                    "treegrid/api/treegrid_getcolumn_method",
                    {
                      type: "category",
                      label: "getHeaderFilter()",
                      link: {
                        type: 'doc',
                        id: "treegrid/api/treegrid_getheaderfilter_method",
                      },
                      items: [
                        "treegrid/api/headerfilter/blur_method",
                        "treegrid/api/headerfilter/clear_method",
                        "treegrid/api/headerfilter/focus_method",
                        "treegrid/api/headerfilter/getfilter_method",
                        "treegrid/api/headerfilter/setvalue_method",
                      ]
                    },
                    "treegrid/api/treegrid_getscrollstate_method",
                    "treegrid/api/treegrid_getsortingstate_method",
                    "treegrid/api/treegrid_getspan_method",
                    "treegrid/api/treegrid_groupby_method",
                    "treegrid/api/treegrid_hidecolumn_method",
                    "treegrid/api/treegrid_hiderow_method",
                    "treegrid/api/treegrid_iscolumnhidden_method",
                    "treegrid/api/treegrid_isrowhidden_method",
                    "treegrid/api/treegrid_paint_method",
                    "treegrid/api/treegrid_removecellcss_method",
                    "treegrid/api/treegrid_removerowcss_method",
                    "treegrid/api/treegrid_removespan_method",
                    "treegrid/api/treegrid_scroll_method",
                    "treegrid/api/treegrid_scrollto_method",
                    "treegrid/api/treegrid_setcolumns_method",
                    "treegrid/api/treegrid_showcolumn_method",
                    "treegrid/api/treegrid_showrow_method",
                    "treegrid/api/treegrid_ungroup_method",
                  ],
                },
                {
                  type: "category",
                  label: "TreeGrid events",
                  link: {
                    type: 'generated-index',
                    title: "TreeGrid events",
                    keywords: ['treegrid events'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "treegrid/api/treegrid_aftercollapse_event",
                    "treegrid/api/treegrid_aftercolumndrag_event",
                    "treegrid/api/treegrid_aftercolumndrop_event",
                    "treegrid/api/treegrid_aftercolumnhide_event",
                    "treegrid/api/treegrid_aftercolumnshow_event",
                    "treegrid/api/treegrid_aftereditend_event",
                    "treegrid/api/treegrid_aftereditstart_event",
                    "treegrid/api/treegrid_afterexpand_event",
                    "treegrid/api/treegrid_afterresizeend_event",
                    "treegrid/api/treegrid_afterrowdrag_event",
                    "treegrid/api/treegrid_afterrowdrop_event",
                    "treegrid/api/treegrid_afterrowhide_event",
                    "treegrid/api/treegrid_afterrowresize_event",
                    "treegrid/api/treegrid_afterrowshow_event",
                    "treegrid/api/treegrid_aftersort_event",
                    "treegrid/api/treegrid_beforecollapse_event",
                    "treegrid/api/treegrid_beforecolumndrag_event",
                    "treegrid/api/treegrid_beforecolumndrop_event",
                    "treegrid/api/treegrid_beforecolumnhide_event",
                    "treegrid/api/treegrid_beforecolumnshow_event",
                    "treegrid/api/treegrid_beforeeditend_event",
                    "treegrid/api/treegrid_beforeeditstart_event",
                    "treegrid/api/treegrid_beforeexpand_event",
                    "treegrid/api/treegrid_beforefilter_event",
                    "treegrid/api/treegrid_beforeresizestart_event",
                    "treegrid/api/treegrid_beforerowdrag_event",
                    "treegrid/api/treegrid_beforerowdrop_event",
                    "treegrid/api/treegrid_beforerowhide_event",
                    "treegrid/api/treegrid_beforerowresize_event",
                    "treegrid/api/treegrid_beforerowshow_event",
                    "treegrid/api/treegrid_beforesort_event",
                    "treegrid/api/treegrid_cancelcolumndrop_event",
                    "treegrid/api/treegrid_cancelrowdrop_event",
                    "treegrid/api/treegrid_cancolumndrop_event",
                    "treegrid/api/treegrid_canrowdrop_event",
                    "treegrid/api/treegrid_cellclick_event",
                    "treegrid/api/treegrid_celldblclick_event",
                    "treegrid/api/treegrid_cellmousedown_event",
                    "treegrid/api/treegrid_cellmouseover_event",
                    "treegrid/api/treegrid_cellrightclick_event",
                    "treegrid/api/treegrid_dragcolumnin_event",
                    "treegrid/api/treegrid_dragcolumnout_event",
                    "treegrid/api/treegrid_dragcolumnstart_event",
                    "treegrid/api/treegrid_dragrowin_event",
                    "treegrid/api/treegrid_dragrowout_event",
                    "treegrid/api/treegrid_dragrowstart_event",
                    "treegrid/api/treegrid_expand_event",
                    "treegrid/api/treegrid_filterchange_event",
                    "treegrid/api/treegrid_footercellclick_event",
                    "treegrid/api/treegrid_footercelldblclick_event",
                    "treegrid/api/treegrid_footercellmousedown_event",
                    "treegrid/api/treegrid_footercellmouseover_event",
                    "treegrid/api/treegrid_footercellrightclick_event",
                    "treegrid/api/treegrid_headercellclick_event",
                    "treegrid/api/treegrid_headercelldblclick_event",
                    "treegrid/api/treegrid_headercellmousedown_event",
                    "treegrid/api/treegrid_headercellmouseover_event",
                    "treegrid/api/treegrid_headercellrightclick_event",
                    "treegrid/api/treegrid_resize_event",
                    "treegrid/api/treegrid_scroll_event",
                  ],
                },
                {
                  type: "category",
                  label: "TreeGrid properties",
                  link: {
                    type: 'generated-index',
                    title: "TreeGrid properties",
                    keywords: ['treegrid properties'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "treegrid/api/treegrid_adjust_config",
                    "treegrid/api/treegrid_autoemptyrow_config",
                    "treegrid/api/treegrid_autoheight_config",
                    "treegrid/api/treegrid_autowidth_config",
                    "treegrid/api/treegrid_bottomsplit_config",
                    "treegrid/api/treegrid_columns_config",
                    "treegrid/api/treegrid_css_config",
                    "treegrid/api/treegrid_data_config",
                    "treegrid/api/treegrid_dragcopy_config",
                    "treegrid/api/treegrid_dragitem_config",
                    "treegrid/api/treegrid_dragmode_config",
                    "treegrid/api/treegrid_editable_config",
                    "treegrid/api/treegrid_eventhandlers_config",
                    "treegrid/api/treegrid_footerrowheight_config",
                    "treegrid/api/treegrid_grouptitletemplate_config",
                    "treegrid/api/treegrid_headerrowheight_config",
                    "treegrid/api/treegrid_height_config",
                    "treegrid/api/treegrid_htmlenable_config",
                    "treegrid/api/treegrid_leftsplit_config",
                    "treegrid/api/treegrid_resizable_config",
                    "treegrid/api/treegrid_rightsplit_config",
                    "treegrid/api/treegrid_rootparent_config",
                    "treegrid/api/treegrid_rowcss_config",
                    "treegrid/api/treegrid_rowheight_config",
                    "treegrid/api/treegrid_selection_config",
                    "treegrid/api/treegrid_sortable_config",
                    "treegrid/api/treegrid_spans_config",
                    "treegrid/api/treegrid_tooltip_config",
                    "treegrid/api/treegrid_topsplit_config",
                    "treegrid/api/treegrid_width_config",
                  ],
                },
                "treegrid/api/api_treegridcolumn_properties",
                {
                  type: "category",
                  label: "Selection API",
                  link: {
                    type: 'generated-index',
                    title: "Selection API",
                    keywords: ['selection API'],
                    image: '/img/docusaurus.png'
                  },
                  items: [{
                    type: "category",
                    label: "TreeGrid Selection methods",
                    link: {
                      type: 'generated-index',
                      title: "TreeGrid Selection methods",
                      keywords: ['treegrid selection methods'],
                      image: '/img/docusaurus.png'
                    },
                    items: [
                      "treegrid/api/selection/selection_disable_method",
                      "treegrid/api/selection/selection_enable_method",
                      "treegrid/api/selection/selection_getcell_method",
                      "treegrid/api/selection/selection_removecell_method",
                      "treegrid/api/selection/selection_setcell_method",
                    ],
                  },
                  {
                    type: "category",
                    label: "TreeGrid Selection events",
                    link: {
                      type: 'generated-index',
                      title: "TreeGrid Selection events",
                      keywords: ['treegrid selection events'],
                      image: '/img/docusaurus.png'
                    },
                    items: [
                      "treegrid/api/selection/selection_afterselect_event",
                      "treegrid/api/selection/selection_afterunselect_event",
                      "treegrid/api/selection/selection_beforeselect_event",
                      "treegrid/api/selection/selection_beforeunselect_event",
                    ],
                  },
                  ],
                },
              ],
            },
            "treegrid/features",
            "treegrid/initialization",
            "treegrid/configuration",
            "treegrid/data_loading",
            "treegrid/usage",
            "treegrid/usage_selection",
            "treegrid/customization",
            "treegrid/events",
          ],
        },
        // end TreeGrid

        //Window
        {
          type: "category",
          label: "Window",
          /*link: {
            type: 'generated-index',
            title: "Window",
            keywords: ['window'],
            image: '/img/docusaurus.png'
          },*/
          link: {
            type: 'doc',
            id: "window/index"
          },
          items: [
            //"window/index",
            {
              type: "category",
              label: "Window API",
              link: {
                type: 'doc',
                id: "window/api/api_overview",
              },
              items: [
                //"window/api/api_overview",
                {
                  type: "category",
                  label: "Window methods",
                  link: {
                    type: 'generated-index',
                    title: "Window methods",
                    keywords: ['window methods'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "window/api/window_attach_method",
                    "window/api/window_attachhtml_method",
                    "window/api/window_destructor_method",
                    "window/api/window_getcontainer_method",
                    "window/api/window_getposition_method",
                    "window/api/window_getsize_method",
                    "window/api/window_getwidget_method",
                    "window/api/window_hide_method",
                    "window/api/window_isfullscreen_method",
                    "window/api/window_isvisible_method",
                    "window/api/window_paint_method",
                    "window/api/window_setfullscreen_method",
                    "window/api/window_setposition_method",
                    "window/api/window_setsize_method",
                    "window/api/window_show_method",
                    "window/api/window_unsetfullscreen_method",
                  ],
                },
                {
                  type: "category",
                  label: "Window events",
                  link: {
                    type: 'generated-index',
                    title: "Window events",
                    keywords: ['window events'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "window/api/window_afterhide_event",
                    "window/api/window_aftershow_event",
                    "window/api/window_beforehide_event",
                    "window/api/window_beforeshow_event",
                    "window/api/window_headerdoubleclick_event",
                    "window/api/window_move_event",
                    "window/api/window_resize_event",
                  ],
                },
                {
                  type: "category",
                  label: "Window properties",
                  link: {
                    type: 'generated-index',
                    title: "Window properties",
                    keywords: ['window properties'],
                    image: '/img/docusaurus.png'
                  },
                  items: [
                    "window/api/window_closable_config",
                    "window/api/window_css_config",
                    "window/api/window_footer_config",
                    "window/api/window_header_config",
                    "window/api/window_height_config",
                    "window/api/window_html_config",
                    "window/api/window_left_config",
                    "window/api/window_minheight_config",
                    "window/api/window_minwidth_config",
                    "window/api/window_modal_config",
                    "window/api/window_movable_config",
                    "window/api/window_node_config",
                    "window/api/window_resizable_config",
                    "window/api/window_title_config",
                    "window/api/window_top_config",
                    "window/api/window_viewportoverflow_config",
                    "window/api/window_width_config",
                  ],
                },
              ],
            },
            "window/features",
            "window/how_to_start",
            "window/configuration",
            "window/usage",
            "window/customization",
            "window/handling_events",
          ],
        },
        // end Window
      ],
    },
    //Helpers
    {
      type: "category",
      label: "Helpers",
      link: {
        type: 'generated-index',
        title: "Helpers",
        keywords: ['helpers'],
        image: '/img/docusaurus.png'
      },
      // collapsed: false,
      items: [{
        type: "category",
        label: "AJAX API",
        link: {
          type: 'doc',
          id: "ajax/index",
        },
        items: [
        // "ajax/index",
          /*{
            type: "category",
            label: "AJAX methods",
            items: [*/
              "ajax/api/ajax_delete_method",
              "ajax/api/ajax_get_method",
              "ajax/api/ajax_post_method",
              "ajax/api/ajax_put_method",
            //],
          //},
        ],
      },
      {
        type: "doc",
        id: "helpers/await_redraw",
      },
      {
        type: "doc",
        id: "helpers/base_elements",
      },
      {
        type: "category",
        label: "CSS manager API",
        link: {
          type: 'doc',
          id: "css_manager/index",
        },
        items: [
          //"css_manager/index",
          /*{
            type: "category",
            label: "CSS manager methods",
            items: [*/
              "css_manager/api/cssmanager_add_method",
              "css_manager/api/cssmanager_get_method",
              "css_manager/api/cssmanager_remove_method",
              "css_manager/api/cssmanager_update_method",
            //],
          //},
        ],
      },
      {
        type: "doc",
        id: "helpers/custom_scroll",
      },
      {
        type: "category",
        label: "DataCollection API",
        link: {
          type: 'doc',
          id: "data_collection/index",
        },
        items: [
          //"data_collection/index",
          {
            type: "category",
            label: "DataCollection methods",
            link: {
              type: 'generated-index',
              title: "DataCollection methods",
              keywords: ['datacollection methods'],
              image: '/img/docusaurus.png'
            },
            items: [
              "data_collection/api/datacollection_add_method",
              "data_collection/api/datacollection_changeid_method",
              "data_collection/api/datacollection_copy_method",
              "data_collection/api/datacollection_exists_method",
              "data_collection/api/datacollection_filter_method",
              "data_collection/api/datacollection_find_method",
              "data_collection/api/datacollection_findall_method",
              "data_collection/api/datacollection_foreach_method",
              "data_collection/api/datacollection_getid_method",
              "data_collection/api/datacollection_getindex_method",
              "data_collection/api/datacollection_getinitialdata_method",
              "data_collection/api/datacollection_getitem_method",
              "data_collection/api/datacollection_getlength_method",
              "data_collection/api/datacollection_isdataloaded_method",
              "data_collection/api/datacollection_issaved_method",
              "data_collection/api/datacollection_load_method",
              "data_collection/api/datacollection_map_method",
              "data_collection/api/datacollection_maprange_method",
              "data_collection/api/datacollection_move_method",
              "data_collection/api/datacollection_parse_method",
              "data_collection/api/datacollection_reduce_method",
              "data_collection/api/datacollection_remove_method",
              "data_collection/api/datacollection_removeall_method",
              "data_collection/api/datacollection_save_method",
              "data_collection/api/datacollection_serialize_method",
              "data_collection/api/datacollection_sort_method",
              "data_collection/api/datacollection_update_method",
            ],
          },
          {
            type: "category",
            label: "DataCollection events",
            link: {
              type: 'generated-index',
              title: "DataCollection events",
              keywords: ['datacollection events'],
              image: '/img/docusaurus.png'
            },
            items: [
              "data_collection/api/datacollection_afteradd_event",
              "data_collection/api/datacollection_afterlazyload_event",
              "data_collection/api/datacollection_afterremove_event",
              "data_collection/api/datacollection_beforeadd_event",
              "data_collection/api/datacollection_beforelazyload_event",
              "data_collection/api/datacollection_beforeremove_event",
              "data_collection/api/datacollection_change_event",
              "data_collection/api/datacollection_load_event",
              "data_collection/api/datacollection_loaderror_event",
              "data_collection/api/datacollection_removeall_event",
            ],
          },
        ],
      },
      {
        type: "doc",
        id: "helpers/datadrivers",
      },
      {
        type: "category",
        label: "DataProxy API",
        link: {
          type: 'doc',
          id: "data_proxy/index",
        },
        items: [
          //"data_proxy/index",
          /*{
            type: "category",
            label: "DataProxy methods",
            link: {
              type: 'generated-index',
              title: "DataProxy methods",
              keywords: ['dataproxy methods'],
              image: '/img/docusaurus.png'
            },
            items: [*/
              "data_proxy/api/dataproxy_load_method",
              "data_proxy/api/dataproxy_save_method",
              "data_proxy/api/dataproxy_updateurl_method",
            //],
          //},
        ],
      },
      {
        type: "doc",
        id: "helpers/icon",
      },
      {
        type: "doc",
        id: "helpers/lazydataproxy",
      },
      {
        type: "doc",
        id: "helpers/resize_handler",
      },
      {
        type: "category",
        label: "Selection object API",
        link: {
          type: 'doc',
          id: "selection/index",
        },
        items: [
          //"selection/index",
          {
            type: "category",
            label: "Selection object methods",
            link: {
              type: 'generated-index',
              title: "Selection object methods",
              keywords: ['selection object methods'],
              image: '/img/docusaurus.png'
            },
            items: [
              "selection/api/selection_add_method",
              "selection/api/selection_disable_method",
              "selection/api/selection_enable_method",
              "selection/api/selection_getid_method",
              "selection/api/selection_getitem_method",
              "selection/api/selection_remove_method",
            ],
          },
          {
            type: "category",
            label: "Selection object events",
            link: {
              type: 'generated-index',
              title: "Selection object events",
              keywords: ['selection object events'],
              image: '/img/docusaurus.png'
            },
            items: [
              "selection/api/selection_afterselect_event",
              "selection/api/selection_afterunselect_event",
              "selection/api/selection_beforeselect_event",
              "selection/api/selection_beforeunselect_event",
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Themes",
        link: {
          type: 'doc',
          id: "themes/themes",
        },
        items: [
          "themes/default_theme",
          "themes/contrast_light_theme",
          "themes/dark_theme",
          "themes/contrast_dark_theme",
          "themes/change_base_themes",
          "themes/custom_theme",
          {
            type: "category",
            label: "Theme methods",
            link: {
              type: 'generated-index',
              title: "Theme methods",
              keywords: ['theme methods'],
              image: '/img/docusaurus.png'
            },
            items: [
              "themes/api/themes_settheme_method",
            ],
          },
          "themes/theme_configurator",
        ],
      },
      {
        type: "category",
        label: "TreeCollection API",
        link: {
          type: 'doc',
          id: "tree_collection/index",
        },
        items: [
          //"tree_collection/index",
          {
            type: "category",
            label: "TreeCollection methods",
            link: {
              type: 'generated-index',
              title: "TreeCollection methods",
              keywords: ['treecollection methods'],
              image: '/img/docusaurus.png'
            },
            items: [
              "tree_collection/api/treecollection_add_method",
              "tree_collection/api/treecollection_cancopy_method",
              "tree_collection/api/treecollection_copy_method",
              "tree_collection/api/treecollection_eachchild_method",
              "tree_collection/api/treecollection_eachparent_method",
              "tree_collection/api/treecollection_exists_method",
              "tree_collection/api/treecollection_filter_method",
              "tree_collection/api/treecollection_foreach_method",
              "tree_collection/api/treecollection_getid_method",
              "tree_collection/api/treecollection_getindex_method",
              "tree_collection/api/treecollection_getitem_method",
              "tree_collection/api/treecollection_getitems_method",
              "tree_collection/api/treecollection_getlength_method",
              "tree_collection/api/treecollection_getparent_method",
              "tree_collection/api/treecollection_getroot_method",
              "tree_collection/api/treecollection_haveitems_method",
              "tree_collection/api/treecollection_issaved_method",
              "tree_collection/api/treecollection_load_method",
              "tree_collection/api/treecollection_loaditems_method",
              "tree_collection/api/treecollection_move_method",
              "tree_collection/api/treecollection_parse_method",
              "tree_collection/api/treecollection_refreshitems_method",
              "tree_collection/api/treecollection_remove_method",
              "tree_collection/api/treecollection_removeall_method",
              "tree_collection/api/treecollection_restoreorder_method",
              "tree_collection/api/treecollection_save_method",
              "tree_collection/api/treecollection_serialize_method",
              "tree_collection/api/treecollection_sort_method",
              "tree_collection/api/treecollection_update_method",
            ],
          },
          {
            type: "category",
            label: "TreeCollection events",
            link: {
              type: 'generated-index',
              title: "TreeCollection events",
              keywords: ['treecollection events'],
              image: '/img/docusaurus.png'
            },
            items: [
              "tree_collection/api/treecollection_afteradd_event",
              "tree_collection/api/treecollection_afteritemload_event",
              "tree_collection/api/treecollection_afterremove_event",
              "tree_collection/api/treecollection_beforeadd_event",
              "tree_collection/api/treecollection_beforeitemload_event",
              "tree_collection/api/treecollection_beforeremove_event",
              "tree_collection/api/treecollection_change_event",
              "tree_collection/api/treecollection_load_event",
              "tree_collection/api/treecollection_loaderror_event",
              "tree_collection/api/treecollection_removeall_event",
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Uploader object API",
        link: {
          type: 'doc',
          id: "uploader/index",
        },
        items: [
          //"uploader/index",
          {
            type: "category",
            label: "Uploader object methods",
            link: {
              type: 'generated-index',
              title: "Uploader object methods",
              keywords: ['uploader object methods'],
              image: '/img/docusaurus.png'
            },
            items: [
              "uploader/api/uploader_abort_method",
              "uploader/api/uploader_linkdroparea_method",
              "uploader/api/uploader_unlinkdroparea_method",
              "uploader/api/uploader_selectfile_method",
              "uploader/api/uploader_send_method",
            ],
          },
          {
            type: "category",
            label: "Uploader object properties",
            link: {
              type: 'generated-index',
              title: "Uploader object properties",
              keywords: ['uploader object properties'],
              image: '/img/docusaurus.png'
            },
            items: [
              "uploader/api/uploader_autosend_config",
              "uploader/api/uploader_fieldname_config",
              "uploader/api/uploader_params_config",
              "uploader/api/uploader_singlerequest_config",
              "uploader/api/uploader_target_config",
              "uploader/api/uploader_updatefromresponse_config",
            ],
          },
        ],
      },
      ],
    },
    // end Helpers

    //start Common features
    {
      type: "category",
      label: "Common features",
      link: {
        type: 'generated-index',
        title: "Common features",
        keywords: ['common features'],
        image: '/img/docusaurus.png'
      },
      items: [
        "common_features/custom_scroll",
        "common_features/using_typescript",
        "common_features/touch_support",
      ],
    },
    // end Common features

    //start Backend and frameworks integration
    {
      type: "category",
      label: "Backend and frameworks integration",
      link: {
        type: 'generated-index',
        title: "Backend and frameworks integration",
        keywords: ['backend and frameworks integration'],
        image: '/img/docusaurus.png'
      },
      items: [
        "integration/suite_and_backend",
        "integration/suite_and_react",
        "integration/suite_and_angular",
        "integration/suite_and_vue",
      ],
    },
    // end Backend and frameworks integration

    //start Guides
    {
      type: "category",
      label: "Guides",
      link: {
        type: 'generated-index',
        title: "Guides",
        keywords: ['guides'],
        image: '/img/docusaurus.png'
      },
      items: [
        "guides/events_guide",
        "guides/datacollection_guide",
      ],
    },
    // end Guides
  ],
};