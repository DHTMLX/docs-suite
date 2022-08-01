---
sidebar_label: Work with ComboBox
title: JavaScript Combo Box - Work with Combo Box 
description: You can explore how to work with Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Work with ComboBox

## Setting/getting value(s)

In order to select options in ComboBox, use the [setValue()](combobox/api/combobox_setvalue_method.md) method. It takes one parameter:

- **ids** - (*string|number|array*) the ids of items from data collection that should be selected in ComboBox

~~~js
// select one option
combo.setValue(combo.data.getId(1));
 
// selects several options at once
combo.setValue([combo.data.getId(1), combo.data.getId(3)]);
~~~

**Related sample**: [Combobox. Set value](https://snippet.dhtmlx.com/xl1p7zcx)

To get the list of selected options, apply the [getValue()](combobox/api/combobox_getvalue_method.md) method. It returns ids of selected options either as string(s) (by default) or as an array of strings. 
In the latter case you need to pass the following parameter:

- **asArray**  - (*boolean*) true, to return ids as an array of strings

~~~js
var id = combo.getValue();
// -> "u1556098582074"
 
// returns ids of selected options as strings
var ids = combo.getValue();
// -> "u1556097609214,u1556097609228,u1556097609244"
 
// returns ids of selected options as an array of strings
var array_ids = combo.getValue(true);
// -> ["u1556097609214", "u1556097609228", "u1556097609244"]
~~~

**Related sample**: [Combobox. Get value](https://snippet.dhtmlx.com/ppvjknid)

## Disabling/enabling ComboBox

To disable/enable ComboBox, make use of the [disable()](combobox/api/combobox_disable_method.md)/[enable()](combobox/api/combobox_enable_method.md) methods:

~~~js
// disabling a combo box
combo.disable();
// enabling a combo box
combo.enable();
~~~

**Related sample**: [Combobox. Enable, disable, is disabled](https://snippet.dhtmlx.com/7bujtsuu)

## Checking if a combobox is disabled

To check if a combobox is disabled, call the [isDisabled()](combobox/api/combobox_isdisabled_method.md) method:

~~~js
combo.isDisabled(); // -> true/false
~~~

**Related sample**: [Combobox. Enable, disable, is disabled](https://snippet.dhtmlx.com/7bujtsuu)

## Repainting ComboBox

You can repaint ComboBox on a page, e.g. after changing its configuration, using the [paint()](combobox/api/combobox_paint_method.md) method:

~~~js
// disabling ComboBox via the configuration object
combo.config.disabled = true;
// repaints ComboBox with a new config
combo.paint();
~~~

## Clearing input

It is possible to clear the ComboBox input from the selected value(s) with the help of the [clear()](combobox/api/combobox_clear_method.md) method:

~~~js
combo.clear();
~~~

**Related sample**: [Combobox. Clear](https://snippet.dhtmlx.com/omlrtmj7)

## Setting/removing focus

When needed, you can set focus in the ComboBox input without opening the list of options. Use the [focus()](combobox/api/combobox_focus_method.md) method for this purpose:

~~~js
combo.focus();
~~~

To remove focus from Combobox, apply the [blur()](combobox/api/combobox_blur_method.md) method:

~~~js
combo.blur();
~~~

**Related sample**: [Combobox. Focus](https://snippet.dhtmlx.com/hp6b5sxe)

## Hiding/showing the popup

You can manipulate the visibility of the Combo popup with the help of the [Popup](popup/api/api_overview.md) API.

To hide/show the popup, use the corresponding methods:

<table>
	<tbody>
        <tr>
			<td><b>show()</b></td>
			<td>shows a popup in a Combo. Takes two parameters:
			<ul>
			<li><i>container</i> - (HTMLElement) mandatory, the container to place a popup in</li>
			<li><i>config</i> - (object)	optional, the configuration object of a popup</li>
			</ul></td>
		</tr>
		<tr>
			<td><b>hide()</b></td>
			<td>hides a popup</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
// showing a popup
combo.popup.show(container);

// hiding a popup
combo.popup.hide();
~~~

**Related sample**: [Combobox. Show / hide options list](https://snippet.dhtmlx.com/ztc4sko8)

To control the process of showing/hiding the popup, apply the related events:

<table>
	<tbody>
        <tr>
			<td><b>beforeShow</b></td>
			<td>fires before a popup is shown. The handler function takes one parameter:
			<ul>
			<li><i>container</i> - (HTMLElement) a container a popup is placed into</li>
			</ul>
			Return <i>false</i> to prevent showing of a popup
			</td>
		</tr>
		<tr>
			<td><b>afterShow</b></td>
			<td>fires after a popup is shown. The handler function takes one parameter:
			<ul>
			<li><i>container</i> - (HTMLElement) a container a popup is placed into</li>
			</ul>
			</td>
		</tr>
		<tr>
			<td><b>beforeHide</b></td>
			<td>fires before a popup is hidden. The handler function takes two parameters:
			<ul>
			<li><i>fromOuterClick</i> - (boolean) true, for a click outside a popup, otherwise - false</li>
			<li><i>e</i> - (Event) the native mouse event</li>
			</ul>
			Return <i>false</i> to prevent hiding of a popup
			</td>
		</tr>
		<tr>
			<td><b>afterHide</b></td>
			<td>fires after a popup is hidden. The handler function takes one parameter:
			<ul>
			<li><i>e</i> - (Event) the native mouse event</li>
			</ul>
			</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
combo.popup.events.on("BeforeShow", function(HTMLElement){
	console.log("A popup will be shown");
    return true;				
});

combo.popup.events.on("AfterShow", function(HTMLElement){
	console.log("A popup is shown");				
});

combo.popup.events.on("BeforeHide", function(fromOuterClick,e){
	console.log("A popup will be hidden");
    return true;				
});

combo.popup.events.on("AfterHide", function(e){
	console.log("A popup is hidden");			
});
~~~

**Related sample**: [Combobox. Popup Events](https://snippet.dhtmlx.com/ll0uykpk)

## Using Data Collection API

You can manipulate ComboBox options with the help of the [Data Collection API](data_collection.md).

### Adding options into ComboBox

It is possible to add more options into the initialized ComboBox on the fly. Use the **add()** method of Data Collection. It takes two parameters:

<table>
	<tbody>
        <tr>
			<td><b>config</b></td>
			<td>(<i>object</i>) the configuration object of the added option</td>
		</tr>
		<tr>
			<td><b>index</b></td>
			<td>(<i>number</i>) optional, the position to add an option at</td>
		</tr>
    </tbody>
</table>

For instance:

~~~js
combobox.data.add({value:"Russia"},1);
~~~

**Related sample**: [Combobox. Add data and remove item](https://snippet.dhtmlx.com/o7vd331z)

:::note
From v7.3, Combobox includes the [](combobox/api/combobox_addoption_method.md) method which you can also use for adding new options into the data collection.
:::

### Updating ComboBox options

You can change config options of the option via the **update()** method of Data Collection. It takes two parameters:

<table>
	<tbody>
        <tr>
			<td><b>id</b></td>
			<td>the id of the option</td>
		</tr>
		<tr>
			<td><b>config</b></td>
			<td>an object with new configuration of the option</td>
		</tr>
    </tbody>
</table>

For example, you can change the image of an option:

~~~js
combo.data.update("option_id",{
	value:"Russia", src: "../common/flags/ru.png"
});
~~~

**Related sample**: [Combobox. Update](https://snippet.dhtmlx.com/y7hpq0x8)

### Removing options from ComboBox

To remove an option, make use of the **remove()** method of Data Collection. Pass the id of the option that should be removed to the method:

~~~js
combo.data.remove("option_id");
~~~

{{note Check the full list of [Data collection API](data_collection.md)}}
