---
sidebar_label: Migration to Newer Versions
title: Migration to Newer Versions
description: description
---          

7.0 -> 7.1
----------------

### Grid/TreeGrid

1) Since v7.1, the **dateFormat** configuration option of the column has been deprecated. Though the support of the option continues, we recommend that you use the **format** option together with **type: "date"** instead.

~~~js title="Before v7.1"
{ 
	width: 150, id: "start_date", 
    header: [{ text: "Calendar", colspan: 2 }, { text: "Start date" }], 
    type: "date", dateFormat: "%d/%m/%Y"
}
~~~

~~~js title="From v7.1"
{ 
    width: 150, id: "date", header: [{ text: "Date" }], 
    type: "date", format: "%M.%d.%Y" 
}
~~~

2) The **sort** event has been deprecated in v7.1. Instead of it, you should use the **afterSort** and **beforeSort** events.

~~~js title="Before v7.1"
// sort event
grid.events.on("Sort", function(id){
    console.log("The grid is sorted by the "+id+" column");
});
~~~

~~~js title="From v7.1"
// afterSort event
grid.events.on("afterSort", (col, dir) => {
    console.log(col, dir);
});

// beforeSort event
grid.events.on("beforeSort", (col, dir) => {
    console.log("beforeSort", col, dir);
    // return false;
});
~~~

6.5 -> 7.0
----------------

### Grid/TreeGrid

1) The **splitAt** configuration property of Grid has been deprecated. The property is still available but not recommended for use.

Starting from v7.0, use **leftSplit** instead.

~~~js title="Before v7.1"
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    splitAt:2,  
    data: dataset
});
~~~

~~~js title="From v7.1"
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    leftSplit:2,  
    data: dataset
});
~~~

### Layout

2) Before v7.0, the [gravity](layout/api/cell/layout_cell_gravity_config.md) property of a Layout cell was intended to arrange content evenly throughout the cell. 

Starting from v7.0, the property is used for setting the "weight" of a cell in relation to other cells placed in the same row, within one parent. 

The type of the property has been changed from *boolean* to *number*, but *boolean* type is still available for backward compatibility purposes.

### DataView/List

3) The following API methods of **DataView/List** have been deprecated: **enableSelection()**, **disableSelection()**. These methods are still available but not recommended for use.

Instead of the methods, use new **enable()**, **disable()** methods of the selection object.

~~~js title="Before v7.1"
// DataView
dataview.enableSelection();
dataview.disableSelection();

// List
list.enableSelection();
list.disableSelection();
~~~

~~~js title="From v7.1"
// DataView
dataview.selection.enable();
dataview.selection.disable();

// List
list.selection.enable();
list.selection.disable();
~~~

### Form and Form controls

4) Starting with 7.0, to access the Form control you can use either the name of the control or its id (if the name attribute is not defined in the config of the control). In previous versions it was possible to access the control only by id.

5) The following events of Form have been deprecated: **buttonClick**, **validationFail**. These events are still available but not recommended for use.

Instead of the **buttonClick** event, use the new **click** event. 

~~~js title="Before v7.1"
form.events.on("Click", function(name, events) {
    console.log("Click", name, events); 
});
~~~


~~~js title="From v7.1"
form.events.on("Click", function(name, events) {
    console.log("Click", name, events); 
});
~~~

Instead of the **validationFail** event, use the new **afterValidate**, **beforeValidate** events:

~~~js title="Before v7.1"
form.events.on("ValidationFail", function(id,component){
    // your code here
});
~~~

~~~js title="From v7.1"
// AfterValidate event
form.events.on("AfterValidate", function(name, value, isValid) {
    console.log("AfterValidate", name, value, isValid); 
});

// BeforeValidate event
form.events.on("BeforeValidate", function(name, value) {
    console.log("BeforeValidate", name, value); 
    return true;
});
~~~

6) The **value** property of the Button control of Form has been replaced by the **text** one. 

The **setValue()** method of the Button control of Form has been deprecated.

~~~js 
form.getItem("button_id").setValue("button_value");
~~~

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

11) The **apply** event of TimePicker has been deprecated. Instead of it, use the new **beforeApply** and **afterApply** events.

~~~js title="Before v7.1"
timepicker.events.on("Apply", function(){
    console.log("The value of a timepicker "+ timepicker.getValue() + " has been saved");
});
~~~

~~~js title="After v7.1"
timepicker.events.on("BeforeApply", function(value){
    console.log("The ", value, " of a timepicker will be saved");
    return false;
});
 
timepicker.events.on("AfterApply", function(value){
    console.log("The ", value, " of a timepicker is saved");
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

1) Here is the list of methods, events and properties that were just renamed for clarity and consistency:

### Calendar

| Up to version 6.3                             | From version 6.4                                  |
| :-------------------------------------------- | :------------------------------------------------ |
| **Events**                                    |                                                   |
| calendar.events.on("DateHover", function(){}) | calendar.events.on("DateMouseOver", function(){}) |
| **Properties**                                |                                                   |
| block                                         | disabledDates                                     |
| view                                          | mode                                              |


### ColorPicker

| Up to version 6.3                                 | From version 6.4                                  |
| :------------------------------------------------ | :------------------------------------------------ |
| **Methods**                                       |                                                   |
| colorpicker.focusValue()                          | colorpicker.setFocus()                            |
| **Events**                                        |                                                   |
| colorpicker.events.on("ViewChange",function(){})  | colorpicker.events.on("ModeChange", function(){}) |
| colorpicker.events.on("SelectClick",function(){}) | colorpicker.events.on("Apply", function(){})      |


### Combobox

| Up to version 6.3                      | From version 6.4                            |
| :------------------------------------- | :------------------------------------------ |
| **Events**                             |                                             |
| combo.events.on("Close", function(){}) | combo.events.on("AfterClose", function(){}) |
| **Properties**                         |                                             |
| cellHeight                             | itemHeight                                  |
| help                                   | helpMessage                                 |
| showItemsCount                         | itemsCount                                  |


### DataView

| Up to version 6.3                               | From version 6.4                                   |
| :---------------------------------------------- | :------------------------------------------------- |
| **Methods**                                     |                                                    |
| dataview.edit()                                 | dataview.editItem()                                |
| **Events**                                      |                                                    |
| dataview.events.on("ContextMenu", function(){}) | dataview.events.on("itemRightClick", function(){}) |
| **Properties**                                  |                                                    |
| editing                                         | editable                                           |

The `multiselectionMode` property is deprecated. Starting from the version 6.4 , it is possible to set the mode of selection of multiple items using the `multiselection` property of DataView. 

### Grid

| Up to version 6.3 | From version 6.4 |
| :---------------- | :--------------- |
| **Methods**       |                  |
| grid.edit()       | grid.editCell()  |
| **Properties**    |                  |
| editing           | editable         |
| fitToContainer    | autoWidth        |
| headerSort        | sortable         |


The `columnsAutoWidth` property is replaced with the `adjust` property. The property can take one of three values: "header", "data" or true.

Before 6.4 the `adjustColumnWidth()` method took only one parameter - the id of the column. Starting from v6.4, it is also possible to pass the mode of adjusting a column ("header", "data", true) as a second parameter.

### List

| Up to version 6.3                           | From version 6.4                               |
| :------------------------------------------ | :--------------------------------------------- |
| **Methods**                                 |                                                |
| list.edit()                                 | list.editItem()                                |
| **Events**                                  |                                                |
| list.events.on("ContextMenu", function(){}) | list.events.on("itemRightClick", function(){}) |
| **Properties**                              |                                                |
| editing                                     | editable                                       |


The `multiselectionMode` property is deprecated. Starting from the version 6.4 , it is possible to set the mode of selection of multiple items using the `multiselection` property of List. 

### Sidebar

The `toggle` event is deprecated. Use new `beforeCollapse`, `afterCollapse`, `beforeExpand`, `afterExpand` events instead.


### Slider

| Up to version 6.3 | From version 6.4 |
| :---------------- | :--------------- |
| **Properties**    |                  |
| help              | helpMessage      |
| thumbLabel        | tooltip          |


### Tabbar

| Up to version 6.3                       | From version 6.4                             |
| :-------------------------------------- | :------------------------------------------- |
| **Methods**                             |                                              |
| tabbar.removeCell()                     | tabbar.removeTab()                           |
| tabbar.addCell()                        | tabbar.addTab()                              |
| **Events**                              |                                              |
| tabbar.events.on("Close", function(){}) | tabbar.events.on("AfterClose", function(){}) |
| **Properties**                          |                                              |
| closeButtons                            | closable                                     |
| activeView                              | activeTab                                    |


### TimePicker

| Up to version 6.3                           | From version 6.4                                 |
| :------------------------------------------ | :----------------------------------------------- |
| **Events**                                  |                                                  |
| timepicker.events.on("Close", function(){}) | timepicker.events.on("AfterClose", function(){}) |
| timepicker.events.on("Save", function(){})  | timepicker.events.on("Apply", function(){})      |
| **Properties**                              |                                                  |
| action                                      | controls                                         |


### Tree

| Up to version 6.3 | From version 6.4 |
| :---------------- | :--------------- |
| **Properties**    |                  |
| editing           | editable         |


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

| Up to version 6.3 | From version 6.4    |
| :---------------- | :------------------ |
| **Methods**       |                     |
| treegrid.edit()   | treegrid.editCell() |
| **Properties**    |                     |
| editing           | editable            |
| fitToContainer    | autoWidth           |
| headerSort        | sortable            |


The `columnsAutoWidth` property is replaced with the `adjust` property. The property can take one of three values: "header", "data" or true.

Before 6.4 the `adjustColumnWidth()` method took only one parameter - the id of the column. Starting from v6.4, it is also possible to pass the mode of adjusting a column ("header", "data", true) as a second parameter.
 

### Combobox, Slider

The `labelInline` property is replaced with the `labelPosition` property. The `labelPosition` property defines the position of a label.

2) Since some properties of widgets of the Suite library have been renamed, the properties of Form controls, that are based on this widgets, have also been renamed:

### All Form controls

| Up to version 6.3 | From version 6.4 |
| :---------------- | :--------------- |
| editing           | editable         |
| help              | helpMessage      |
| celCss            | css              |


### Combo control

| Up to version 6.3 | From version 6.4 |
| :---------------- | :--------------- |
| cellHeight        | itemHeight       |

### DatePicker control

| Up to version 6.3 | From version 6.4 |
| :---------------- | :--------------- |
| block             | disabledDates    |
| view              | mode             |


### Slider control

| Up to version 6.3 | From version 6.4 |
| :---------------- | :--------------- |
| thumbLabel        | tooltip          |

### TimePicker control

| Up to version 6.3 | From version 6.4 |
| :---------------- | :--------------- |
| action            | controls         |


6.2 -> 6.3
-----------

1) In the version 6.3 names of some methods and events of DHTMLX library were changed. It was made in order to avoid confusion and misunderstanding due to inconsistency between the name and functionality.

### ColorPicker

| Up to version 6.2                                 | From version 6.3                              |
| :------------------------------------------------ | :-------------------------------------------- |
| getView()                                         | getCurrentMode()                              |
| colorpicker.events.on("ColorChange",function(){}) | colorpicker.events.on("Change", function(){}) |


### Grid


| Up to version 6.2                           | From version 6.3                             |
| :------------------------------------------ | :------------------------------------------- |
| grid.events.on("HeaderInput", function(){}) | grid.events.on("FilterChange", function(){}) |

### Layout

| Up to version 6.2 | From version 6.3   |
| :---------------- | :----------------- |
| layout.cell(id)   | layout.getCell(id) |

### Tree

| Up to version 6.2                               | From version 6.3                               |
| :---------------------------------------------- | :--------------------------------------------- |
| tree.close(id)                                  | tree.collapse(id)                              |
| tree.closeAll()                                 | tree.collapseAll()                             |
| tree.open(id)                                   | tree.expand(id)                                |
| tree.openAll()                                  | tree.expandAll()                               |
| tree.unCheckItem(id)                            | tree.uncheckItem(id)                           |
| tree.events.on("itemContextMenu", function(){}) | tree.events.on("itemRightClick", function(){}) |


### TreeGrid

| Up to version 6.2                           | From version 6.3                             |
| :------------------------------------------ | :------------------------------------------- |
| grid.events.on("HeaderInput", function(){}) | grid.events.on("FilterChange", function(){}) |

### Window

| Up to version 6.2   | From version 6.3       |
| :------------------ | :--------------------- |
| window.fullScreen() | window.setFullScreen() |

1) Until the version 6.3 List and DataView had the getFocusIndex() and setFocusIndex() methods. Starting from v6.3, these methods are no longer considered important. They are deprecated and not recommended for use. 

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

