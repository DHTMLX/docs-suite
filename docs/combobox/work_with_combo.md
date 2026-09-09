---
sidebar_label: Work with ComboBox
title: JavaScript Combo Box - Work with Combo Box 
description: You can explore how to work with Combo Box in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Work with ComboBox

## Setting/getting value(s)

Use the [`setValue()`](combobox/api/combobox_setvalue_method.md) method to select options in Combobox. The method takes one parameter:

- `value` — (`string|number|array`) the ids of the Combobox options in the data collection to select

~~~js
// select one option
combo.setValue(combo.data.getId(1));
 
// selects several options at once
combo.setValue([combo.data.getId(1), combo.data.getId(3)]);
~~~

**Related sample**: [Combobox. Set value](https://snippet.dhtmlx.com/xl1p7zcx)

Apply the [`getValue()`](combobox/api/combobox_getvalue_method.md) method to get the list of selected options. The method returns ids of selected options, and the default return type is a string. To get an array of strings, pass the following parameter:

- `asArray` — (`boolean`) `true`, to return ids as an array of strings

~~~js
const id = combo.getValue();
// -> "u1556098582074"
 
// returns ids of selected options as strings
const ids = combo.getValue();
// -> "u1556097609214,u1556097609228,u1556097609244"
 
// returns ids of selected options as an array of strings
const array_ids = combo.getValue(true);
// -> ["u1556097609214", "u1556097609228", "u1556097609244"]
~~~

**Related sample**: [Combobox. Get value](https://snippet.dhtmlx.com/ppvjknid)

## Disabling/enabling ComboBox

Use [`disable()`](combobox/api/combobox_disable_method.md) and [`enable()`](combobox/api/combobox_enable_method.md) methods to disable and enable Combobox:

~~~js
// disabling a combo box
combo.disable();
// enabling a combo box
combo.enable();
~~~

**Related sample**: [Combobox. Enable, disable, is disabled](https://snippet.dhtmlx.com/7bujtsuu)

## Checking if a combobox is disabled

Call the [`isDisabled()`](combobox/api/combobox_isdisabled_method.md) method to check whether Combobox is disabled:

~~~js
combo.isDisabled(); // -> true/false
~~~

**Related sample**: [Combobox. Enable, disable, is disabled](https://snippet.dhtmlx.com/7bujtsuu)

## Repainting ComboBox

You can repaint Combobox on a page with the [`paint()`](combobox/api/combobox_paint_method.md) method, for example after you change its configuration:

~~~js
// disabling ComboBox via the configuration object
combo.config.disabled = true;
// repaints ComboBox with a new config
combo.paint();
~~~

## Clearing input

The [`clear()`](combobox/api/combobox_clear_method.md) method clears the selected values from the Combobox input:

~~~js
combo.clear();
~~~

**Related sample**: [Combobox. Clear](https://snippet.dhtmlx.com/omlrtmj7)

## Setting/removing focus

You can set focus in the Combobox input without opening the list of options. Use the [`focus()`](combobox/api/combobox_focus_method.md) method:

~~~js
combo.focus();
~~~

Apply the [`blur()`](combobox/api/combobox_blur_method.md) method to remove focus from Combobox:

~~~js
combo.blur();
~~~

**Related sample**: [Combobox. Focus](https://snippet.dhtmlx.com/hp6b5sxe)

## Hiding/showing the popup

You can show and hide the Combobox popup with the [Popup](popup/api/api_overview.md) API.

Use the following methods to hide and show the popup:

<table>
    <tbody>
        <tr>
            <td><b>show()</b></td>
            <td>shows a popup in Combobox. Takes two parameters:<ul><li><i>container</i> - (HTMLElement) mandatory, the container to place a popup in</li><li><i>config</i> - (object) optional, the configuration object of a popup</li></ul></td>
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

Handle the following events to control when the popup opens and closes:

<table>
    <tbody>
        <tr>
            <td><b>beforeShow</b></td>
            <td>fires before a popup is shown. The handler function takes one parameter:<ul><li><i>container</i> - (HTMLElement) the container the popup is placed in</li></ul>Return <i>false</i> to prevent the popup from opening</td>
        </tr>
        <tr>
            <td><b>afterShow</b></td>
            <td>fires after a popup is shown. The handler function takes one parameter:<ul><li><i>container</i> - (HTMLElement) the container the popup is placed in</li></ul></td>
        </tr>
        <tr>
            <td><b>beforeHide</b></td>
            <td>fires before a popup is hidden. The handler function takes two parameters:<ul><li><i>fromOuterClick</i> - (boolean) true, for a click outside a popup, otherwise - false</li><li><i>e</i> - (Event) the native mouse event</li></ul>Return <i>false</i> to prevent the popup from closing</td>
        </tr>
        <tr>
            <td><b>afterHide</b></td>
            <td>fires after a popup is hidden. The handler function takes one parameter:<ul><li><i>e</i> - (Event) the native mouse event</li></ul></td>
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

You can manage Combobox options with the [Data Collection API](/data_collection/).

### Adding options into ComboBox

You can add more options to an initialized Combobox on the fly. Use the `add()` method of Data Collection. The method takes two parameters:

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

For example:

~~~js
combobox.data.add({value:"Russia"},1);
~~~

**Related sample**: [Combobox. Add data and remove item](https://snippet.dhtmlx.com/o7vd331z)

:::info
From v7.3, Combobox includes the [](combobox/api/combobox_addoption_method.md) method that you can also use to add new options to the data collection.
:::

### Updating ComboBox options

You can change option settings with the `update()` method of Data Collection. The method takes two parameters:

<table>
    <tbody>
        <tr>
            <td><b>id</b></td>
            <td>the id of the option</td>
        </tr>
        <tr>
            <td><b>config</b></td>
            <td>an object with the new option configuration</td>
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

Use the `remove()` method of Data Collection to remove an option. Pass the option id to the method:

~~~js
combo.data.remove("option_id");
~~~

:::note
Check the full [Data Collection API](/data_collection/) reference.
:::
