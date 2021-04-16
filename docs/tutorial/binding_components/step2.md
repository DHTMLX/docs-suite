---
sidebar_label: Step 2. Bind Window to Grid
title: Step 2. Bind Window to Grid
---          

To apply changes made in a grid row through the form in the window we need to process clicking on the "Apply" or "Cancel" buttons.

##Checking the clicked button

First we need to check which one of the footer buttons was clicked. We can use the <b>Сlick</b> event handler of the window footer to do this.

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

##Adding functionality to the Apply button

Now let's describe the steps we need to take to provide the possibility to edit grid rows or add new ones after pressing the "Apply" button:

1\. Check whether the form is filled out correctly by using the <b>validate()</b> method of the Form component:

~~~js
case 'apply': {
	if (form.validate()){
   	}                
    break;
}
~~~

2\. Define what to do with a grid row - either to add or edit it - check whether its id is empty:

- if the item Id is empty, we will add a new item into the grid:

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

- If the Id isn't empty, we will update the current row in the grid via the <b>update()</b> method of Data Collection:

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
