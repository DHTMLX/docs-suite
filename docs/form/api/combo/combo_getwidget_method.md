---
sidebar_label: getWidget()
title: JavaScript Form - getWidget Combo Box Method 
description: You can explore the getWidget method of the Combo Box control of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# getWidget()

@short: returns the ComboBox widget attached to a Combo control

@signature: {'getWidget(): Combobox;'}

@returns:
An object of the DHTMLX Combo widget.

@example:
const combo = form.getItem("combo").getWidget();  
// -> DHTMLX ComboBox

@descr:

It is possible to use methods of DHTMLX ComboBox via the **getWidget()** method of a Combo control.

For example, you can set focus in the Combo input without opening a popup with options. To do this, you need to get the widget attached to the Combo control and then use the [focus()](combobox/api/combobox_focus_method.md) method of this widget.

~~~js
const combo = form.getItem("combo_id").getWidget();  // -> ComboBox
combo.focus(); // sets focus in the input
~~~
