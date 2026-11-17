---
sidebar_label: Step 6. Edit data in the Grid
title: Step 6. Edit data in the Grid
---          

import styles from '@site/src/css/tutorial.module.scss';

We already know how to add components to the page and display them.

This last step shows how to bind Grid to Toolbar, Window, and ContextMenu so that users can edit grid data.

To implement interaction between Grid and the other components, we use the custom functions described below.

## Create custom functions {#creating-custom-functions}

In this step, we create functions that add, edit, and remove grid rows. We need this logic in several places, so we wrap it in functions.

### openAddWindow() function

The first function adds a new item. It performs the following actions:

- Assign the "Adding item" title to the window
- Clear the form
- Show the window on the page

~~~js
function openAddWindow(){
    dhxWindow.header.data.update("title", {value: "Adding item"});
    form.clear();
    dhxWindow.show();
};
~~~

<div className={styles.image}>

![Adding item window with empty form fields for name, email, country and a premium checkbox in DHTMLX Suite](/img/tutorial/binding_components/adding_item.png)

</div>

### openEditWindow() function

Our app opens the editing window in three ways:

- Double-clicking a row in the grid
- Clicking the "Edit" button in the toolbar
- Clicking the "Edit" item in the context menu

In all these cases, we call the `openEditWindow()` function to display the editing window on the page.

<div className={styles.image}>

![Editing item window with form fields prefilled from the selected grid row in DHTMLX Suite](/img/tutorial/binding_components/editing_item.png)

</div>

The function fills the form fields with data from the selected grid row. If no row is selected, the function selects the first grid row and takes the data from it.

~~~js
function openEditWindow(row){
    // assigns the "Editing item" title to the window
    dhxWindow.header.data.update("title", {value: "Editing item"});   
    form.clear(); //clears both form values and validation
    if (!row){ // checks whether any row is selected
        var itemId = grid.data.getId(0); // returns the id of the item by its index
        grid.selection.setCell(itemId); // sets a selection on a grid row by its Id
        row = grid.data.getItem(itemId); // returns the object of the item (row) by id
    }
           
    form.setValue(row); // sets values of the selected row in the form fields
            
    dhxWindow.show(); // shows a window on a page
};
~~~

### deleteItem() function

Let's add a function that removes rows from the grid:

~~~js
function deleteItem() {
    // returns a cell of the selected row
    var item = grid.selection.getCell();
      // returns the index of the selected item by its Id
    var index = grid.data.getIndex(item.row.id);
    // deletes an item from the grid by its Id
    grid.data.remove(item.row.id);
    // defines the index of the position to which the new item will be put 
    index = index > grid.data.getLength() - 1 ? grid.data.getLength() - 1 : index; 
    // gets the id of an item by its index and sets selection on this item
    grid.selection.setCell(grid.data.getId(index));     
};
~~~

:::note
To move the selection to the next item after deletion, the function checks whether the deleted item was the last one in the array.
:::

The `getLength()` method returns the length of the array. Then we compare the array length with the index of the deleted item.
If the deleted item was the last one, the selection moves to the new last item. Otherwise, the selection moves to the item that takes the place of the deleted one.

**Below, we use these custom functions to edit the grid with the other components.**

## Link Toolbar buttons and Grid {#linking-toolbar-buttons-and-grid}

We [already discussed](tutorial/basic_application/step5.md) how to bind Toolbar to Grid with the `Click` event of Toolbar.
Bind the buttons added in the [previous step](tutorial/binding_components/step5.md) to Grid in the same way:

~~~js
// id - the Id of the toolbar button, 
// e - the default mouse event of a browser 
toolbar.events.on("Click", function(id,e){
    switch(id) {
        case 'add': {
            openAddWindow();            
            break;
        }
        case 'edit': {
            row = grid.selection.getCell().row; 
            //to define a row, a cell of which is selected
               openEditWindow(row);             
            break;
        }
        case 'delete': {
            deleteItem();                
            break;
        }  
    }
});
~~~

For details about Toolbar events, see the [Event Handling](toolbar/handling_events.md) article.  

## Link Window and Grid {#linking-window-and-grid}

When a user double-clicks a grid cell, the editing window opens. To open it, we use the `CellDblClick` event of Grid:

~~~js
grid.events.on("CellDblClick", function(row,column,e){
    openEditWindow(row);
});
~~~

## Link ContextMenu and Grid {#linking-context-menu-and-grid}

When a user clicks the "Edit" item in the context menu, the editing window opens as well. To implement this, we bind the context menu to the grid with the `Click` event of ContextMenu:

~~~js
contextMenu.events.on("Click", function(id,e){
    switch(id) {
        case 'edit': {
            openEditWindow(grid.selection.getCell().row); 
      // in the argument of the function we specify the row the editing
      // window should be opened for
            break;
        }
           case 'delete': {
            deleteItem();
            break;
        }
    }
});
~~~

## Get the result {#getting-the-result}

When you complete the steps of this tutorial, you get a demo application that lets users edit grid data in several ways. This is what the finished app looks like:

<div className={styles.image}>

![Contact manager app with an Editing item window over the users grid and pie chart in DHTMLX Suite](/img/tutorial/binding_components/binding_components.png)

</div>


<div id="tutorial_step">
    <a id="next_step" href="tutorial.md"></a>
</div>