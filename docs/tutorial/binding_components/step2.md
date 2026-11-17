---
sidebar_label: Step 2. Bind Window to Grid
title: Step 2. Bind Window to Grid
---          

To apply changes that a user makes to a grid row in the window form, we need to handle clicks on the "Apply" and "Cancel" buttons.

## Check the clicked button

First, we check which footer button is clicked. For this, we use the `Click` event of the window footer:

~~~js
dhxWindow.footer.events.on("Click", function(id, e){
    // we call the getValue() method of the Form 
    // to get the current value of the item
    item = form.getValue(); 
     
    switch(id) {
        // if the clicked button is "Cancel", 
        // the window is hiding
        case 'cancel': {
            dhxWindow.hide();
            break;           
        }
        case 'apply': {
            if (form.validate()){
                if (item.id == ""){
                    item.id = grid.data.getLength() + 1;
                    grid.data.add(item, 0);
                   } else {                       
                    grid.data.update(item.id, item);    
                }
            }
            dhxWindow.hide();        
            break;
        }
    }
});
~~~

## Handle the Apply button

When a user clicks the "Apply" button, the handler either edits a grid row or adds a new one. It takes the following steps:

1\. Check whether the form is filled out correctly with the `validate()` method of the Form component:

~~~js
case 'apply': {
    if (form.validate()){
       }                
    break;
}
~~~

2\. Check whether the item id is empty to decide whether to add a new row or edit an existing one:

- If the item id is empty, we will add a new item to the grid:

~~~js
if (item.id == ""){
    item.id = grid.data.getLength() + 1; // assigning an id to a new item
    item.modified = getFormatDate();  
    // adding a new item through the add() method of Data Collection. 
    // It takes 2 parameters: the object of a new item and the index 
    // of the position starting from which new items will be added
    grid.data.add(item, 0);     
    dhxWindow.hide(); // the window is hiding
}
~~~

- If the id isn't empty, we will update the current row in the grid with the `update()` method of DataCollection:

~~~js
else {                       
    item.modified = getFormatDate(); 
    // It takes 2 parameters: the id of the item 
    // which needs to be updated and the item to be updated
    grid.data.update(item.id, item);     
    dhxWindow.hide();
}
~~~


<div id="tutorial_step">
    <a id="next_step" href="tutorial/binding_components/step3.md"></a>
</div>
