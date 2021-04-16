---
sidebar_label: Migration to Newer Versions
title: Migration to Newer Versions
description: description
---          

6.5 -> 7.0
----------------

### Grid/TreeGrid

1) The **splitAt** configuration property of Grid has been deprecated. The property is still available but not recommended for use.

Starting from v7.0, use **leftSplit** instead.

### Layout

2) Before v7.0, the [gravity](layout/api/layout_gravity_config.md) property of a Layout cell was intended to arrange content evenly throughout the cell. 

Starting from v7.0, the property is used for setting the "weight" of a cell in relation to other cells placed in the same row, within one parent. 

The type of the property has been changed from *boolean* to *number*, but *boolean* type is still available for backward compatibility purposes.

### DataView/List

3) The following API methods of DataView/List have been deprecated: enableSelection(), disableSelection(). These methods are still available but not recommended for use.

Instead of the methods, use new enable(), disable() methods of the selection object:

~~~js
// enables selection of items
dataview.selection.enable();

// disables selection of items
dataview.selection.disable();
~~~

### Form and Form controls

4) Starting with 7.0, to access the Form control you can use either the name of the control or its id (if the name attribute is not defined in the config of the control). In previous versions it was possible to access the control only by id.

5) The following events of Form have been deprecated: buttonClick, validationFail. These events are still available but not recommended for use.

Instead of the **buttonClick** event, use the new **click** event:

~~~js
form.events.on("Click", function(name, events) {
    console.log("Click", name, events); 
});
~~~

Instead of the **validationFail** event, use the new **afterValidate**, **beforeValidate** events:

~~~js
form.events.on("AfterValidate", function(name, value, isValid) {
    console.log("AfterValidate", name, value, isValid); 
});

form.events.on("BeforeValidate", function(name, value) {
    console.log("BeforeValidate", name, value); 
    return true;
});
~~~

6) The **value** property of the Button control of Form has been replaced by the **text** one. 

The **setValue()** method of the Button control of Form has been deprecated.

7) The following properties of the configuration object of a radio button of RadioGroup have been deprecated: 

- label	
- labelWidth	
- hiddenLabel	
- labelPosition
- helpMessage	
- preMessage	
- successMessage
- errorMessage

8) The **gravity** property have been deprecated for all Form controls.

9) The **readonly** attribute of the Combo control of Form have been deprecated. Starting from v7.0, use **readOnly** instead.

### Confirm message box

10) Before v7.0, the *Space* and *Enter* key were used to confirm the Reject button. Starting with v7.0, the keys confirm the Apply button. The *Esc* key confirms the Reject button.

Also note, that before v7.0, the confirm buttons were displayed in the following order: "Apply" and "Reject". In the version 7.0, the order has been changed to "Reject" and "Apply". 

### TimePicker

11) The **apply** event of TimePicker has been deprecated. Instead of it, use the new **beforeApply** and **afterApply** events:

~~~js
timepicker.events.on("AfterApply", function(value){
	console.log(value);
});

timepicker.events.on("BeforeApply", function(value){
	console.log(value);
    return false;
});
~~~

### Combobox

12) The **readonly** configuration property have been deprecated. Starting from v7.0, use **readOnly** instead.

~~~js
var combo = new dhx.Combobox("combo_container", { 
    readOnly:true
});
~~~


6.3 -> 6.4
-----------------

1) Here is the list of methods, events and properties that were renamed for clarity and consistency:

### Calendar

| Up to version 6.3                             | From version 6.4                                  |
| :-------------------------------------------- | :------------------------------------------------ |
| **Events**                                    |                                                   |
| calendar.events.on("DateHover", function(){}) | calendar.events.on("DateMouseOver", function(){}) |
| **Properties**                                |                                                   |
| block                                         | disabledDates                                     |
| view                                          | mode                                              |


### ColorPicker

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td colspan="2" class="type_info">Methods</td></tr>
<tr><td>colorpicker.focusValue()</td><td>colorpicker.setFocus()</td></tr>
<tr><td colspan="2" class="type_info">Events</td></tr>
<tr><td>colorpicker.events.on("ViewChange",function(){})</td><td>colorpicker.events.on("ModeChange", function(){})</td></tr>
<tr><td>colorpicker.events.on("SelectClick",function(){})</td><td>colorpicker.events.on("Apply", function(){})</td></tr>
</table>


### Combobox

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td colspan="2" class="type_info">Events</td></tr>
<tr><td>combo.events.on("Close", function(){})</td><td>combo.events.on("AfterClose", function(){})</td></tr>
<tr><td colspan="2" class="type_info">Properties</td></tr>
<tr><td>cellHeight</td><td>itemHeight</td></tr>
<tr><td>help</td><td>helpMessage</td></tr>
<tr><td>showItemsCount</td><td>itemsCount</td></tr>
</table>

### DataView

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td colspan="2" class="type_info">Methods</td></tr>
<tr><td>dataview.edit()</td><td>dataview.editItem()</td></tr>
<tr><td colspan="2" class="type_info">Events</td></tr>
<tr><td>dataview.events.on("ContextMenu", function(){})</td><td>dataview.events.on("itemRightClick", function(){})</td></tr>
<tr><td colspan="2" class="type_info">Properties</td></tr>
<tr><td>editing</td><td>editable</td></tr>
</table>

The `multiselectionMode` property is deprecated. Starting from the version 6.4 , it is possible to set the mode of selection of multiple items using the `multiselection` property of DataView. 

### Grid

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td colspan="2" class="type_info">Methods</td></tr>
<tr><td>grid.edit()</td><td>grid.editCell()</td></tr>
<tr><td colspan="2" class="type_info">Properties</td></tr>
<tr><td>editing</td><td>editable</td></tr>
<tr><td>fitToContainer</td><td>autoWidth</td></tr>
<tr><td>headerSort</td><td>sortable</td></tr>
</table>

The `columnsAutoWidth` property is replaced with the `adjust` property. The property can take one of three values: "header", "data" or true.

Before 6.4 the `adjustColumnWidth()` method took only one parameter - the id of the column. Starting from v6.4, it is also possible to pass the mode of adjusting a column ("header", "data", true) as a second parameter.

### List

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td colspan="2" class="type_info">Methods</td></tr>
<tr><td>list.edit()</td><td>list.editItem()</td></tr>
<tr><td colspan="2" class="type_info">Events</td></tr>
<tr><td>list.events.on("ContextMenu", function(){})</td><td>list.events.on("itemRightClick", function(){})</td></tr>
<tr><td colspan="2" class="type_info">Properties</td></tr>
<tr><td>editing</td><td>editable</td></tr>
</table>

The `multiselectionMode` property is deprecated. Starting from the version 6.4 , it is possible to set the mode of selection of multiple items using the `multiselection` property of List. 

### Sidebar

The `toggle` event is deprecated. Use new `beforeCollapse`, `afterCollapse`, `beforeExpand`, `afterExpand` events instead.


### Slider

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td colspan="2" class="type_info">Properties</td></tr>
<tr><td>help</td><td>helpMessage</td></tr>
<tr><td>thumbLabel</td><td>tooltip</td></tr>
</table>

### Tabbar

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td colspan="2" class="type_info">Methods</td></tr>
<tr><td>tabbar.removeCell()</td><td>tabbar.removeTab()</td></tr>
<tr><td>tabbar.addCell()</td><td>tabbar.addTab()</td></tr>
<tr><td colspan="2" class="type_info">Events</td></tr>
<tr><td>tabbar.events.on("Close", function(){})</td><td>tabbar.events.on("AfterClose", function(){})</td></tr>
<tr><td colspan="2" class="type_info">Properties</td></tr>
<tr><td>closeButtons</td><td>closable</td></tr>
<tr><td>activeView</td><td>activeTab</td></tr>
</table>

### TimePicker

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td colspan="2" class="type_info">Events</td></tr>
<tr><td>timepicker.events.on("Close", function(){})</td><td>timepicker.events.on("AfterClose", function(){})</td></tr>
<tr><td>timepicker.events.on("Save", function(){})</td><td>timepicker.events.on("Apply", function(){})</td></tr>
<tr><td colspan="2" class="type_info">Properties</td></tr>
<tr><td>action</td><td>controls</td></tr>
</table>

### Tree

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td colspan="2" class="type_info">Properties</td></tr>
<tr><td>editing</td><td>editable</td></tr>
</table>


The `isFolder` property is deprecated. Instead of it, you can set the `icon` property in the configuration object of a tree item to render a tree item as a custom folder.

~~~js
var tree = new dhx.Tree("tree", {
    data:[
        {
            "value": "Books",
            "id": "Books",
            "opened": true,
            "items": [
                {
                    "value": "Lawrence Block",
                    "id": "Lawrence Block",
                    "icon": { /*!*/
                        "folder": "fas fa-book", 
                        "openFolder": "fas fa-book-open", 
                        "file": "fas fa-file" 
                    }
                }
            ]
        }
    ]
}
~~~

### TreeGrid

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td colspan="2" class="type_info">Methods</td></tr>
<tr><td>treegrid.edit()</td><td>treegrid.editCell()</td></tr>
<tr><td colspan="2" class="type_info">Properties</td></tr>
<tr><td>editing</td><td>editable</td></tr>
<tr><td>fitToContainer</td><td>autoWidth</td></tr>
<tr><td>headerSort</td><td>sortable</td></tr>
</table>

The `columnsAutoWidth` property is replaced with the `adjust` property. The property can take one of three values: "header", "data" or true.

Before 6.4 the `adjustColumnWidth()` method took only one parameter - the id of the column. Starting from v6.4, it is also possible to pass the mode of adjusting a column ("header", "data", true) as a second parameter.
 

### Combobox, Slider

The `labelInline` property is replaced with the `labelPosition` property. The `labelPosition` property defines the position of a label.

2) Since some properties of widgets of the Suite library have been renamed, the properties of Form controls, that are based on this widgets, have also been renamed:

### All Form controls

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td>editing</td><td>editable</td></tr>
<tr><td>help</td><td>helpMessage</td></tr>
<tr><td>celCss</td><td>css</td></tr>
</table>

### Combo control

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td>cellHeight</td><td>itemHeight</td></tr>
</table>

### DatePicker control

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td>block</td><td>disabledDates</td></tr>
<tr><td>view</td><td>mode</td></tr>
</table>

### Slider control

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td>thumbLabel</td><td>tooltip</td></tr>
</table>

### TimePicker control

<table class="my_table">
<tr><td class="version_info">Up to version 6.3</td><td class="version_info">From version 6.4</td></tr>
<tr><td>action</td><td>controls</td></tr>
</table>


6.2 -> 6.3
-----------

1) In the version 6.3 names of some methods and events of DHTMLX library were changed. It was made in order to avoid confusion and misunderstanding due to inconsistency between the name and functionality.

### ColorPicker

| Up to version 6.2                                 | From version 6.3                              |
| :------------------------------------------------ | :-------------------------------------------- |
| getView()                                         | getCurrentMode()                              |
| colorpicker.events.on("ColorChange",function(){}) | colorpicker.events.on("Change", function(){}) |


### Grid

<table class="my_table">
<tr><td class="version_info">Up to version 6.2</td><td class="version_info">From version 6.3</td></tr>
<tr><td>grid.events.on("HeaderInput", function(){})</td><td>grid.events.on("FilterChange", function(){})</td></tr>
</table>


### Layout

<table class="my_table">
<tr><td class="version_info">Up to version 6.2</td><td class="version_info">From version 6.3</td></tr>
<tr><td>layout.cell(id)</td><td>layout.getCell(id)</td></tr>
</table>

### Tree

<table class="my_table">
<tr><td class="version_info">Up to version 6.2</td><td class="version_info">From version 6.3</td></tr>
<tr><td>tree.close(id)</td><td>tree.collapse(id)</td></tr>
<tr><td>tree.closeAll()</td><td>tree.collapseAll()</td></tr>
<tr><td>tree.open(id)</td><td>tree.expand(id)</td></tr>
<tr><td>tree.openAll()</td><td>tree.expandAll()</td></tr>
<tr><td>tree.unCheckItem(id)</td><td>tree.uncheckItem(id)</td></tr>
<tr><td>tree.events.on("itemContextMenu", function(){})</td><td>tree.events.on("itemRightClick", function(){})</td></tr>
</table>

### TreeGrid

<table class="my_table">
<tr><td class="version_info">Up to version 6.2</td><td class="version_info">From version 6.3</td></tr>
<tr><td>grid.events.on("HeaderInput", function(){})</td><td>grid.events.on("FilterChange", function(){})</td></tr>
</table>

### Window

<table class="my_table">
<tr><td class="version_info">Up to version 6.2</td><td class="version_info">From version 6.3</td></tr>
<tr><td>window.fullScreen()</td><td>window.setFullScreen()</td></tr>
</table>

2) Until the version 6.3 List and DataView had the getFocusIndex() and setFocusIndex() methods. Starting from v6.3, these methods are no longer considered important. They are deprecated and not recommended for use. 

Instead, use the corresponding getFocus() method for getting the id of an item in focus: 

~~~js
list.getFocus(); // -> "item_id"
 
dataview.getFocus(); // -> "item_id"
~~~

and the setFocus() method for setting focus to an item by its id: 

~~~js
list.setFocus("item_id");

dataview.setFocus("item_id");
~~~

In case you still need to get the index of an item in focus, make use of the code, as in:

~~~js
// get the id of an item using the getFocus() method
var id = list.getFocus();
// and pass this id as a parameter of the getIndex method of Data Collection
var index = list.data.getIndex(id);
~~~

