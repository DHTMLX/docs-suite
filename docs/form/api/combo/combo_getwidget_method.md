---
sidebar_label: getWidget
title: getWidget
---          

@short: returns the dhtmlxComboBox widget attached to a Combo control



@returns:
param   object    the dhtmlxCombo widget

@example:
var combo = form.getItem("combo").getWidget();  
// -> dhtmlxComboBox


@template: api_method
@descr:
It is possible to use methods of dhtmlxComboBox via the **getWidget()** method of a Combo control.

For example, you can set focus in the Combo input without opening a popup with options. To do this, you need to get the widget attached to the Combo control and then use the [focus()](combo/api/combobox_focus_method.md) method of this widget.

~~~js
var combo = form.getItem("combo_id").getWidget();  // -> ComboBox
combo.focus(); // sets focus in the input
~~~


