---
sidebar_label: getWidget()
title: JavaScript Form - getWidget Combo Box Method 
description: You can explore the getWidget Combo Box method of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getWidget()

@short: returns the dhtmlxComboBox widget attached to a Combo control

@signature: {'getWidget(): Combobox;'}

@returns:
An object of the dhtmlxCombo widget.

@example:
var combo = form.getItem("combo").getWidget();  
// -> dhtmlxComboBox

@descr:

It is possible to use methods of dhtmlxComboBox via the **getWidget()** method of a Combo control.

For example, you can set focus in the Combo input without opening a popup with options. To do this, you need to get the widget attached to the Combo control and then use the [focus()](combobox/api/combobox_focus_method.md) method of this widget.

~~~js
var combo = form.getItem("combo_id").getWidget();  // -> ComboBox
combo.focus(); // sets focus in the input
~~~
