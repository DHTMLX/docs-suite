---
sidebar_label: Step 5. Bind Toolbar to Grid
title: Step 5. Bind Toolbar to Grid
---          

At this step we will discuss how to fill and clear the Grid with the help of Toolbar buttons. For this purpose we will use the <b>Click</b> event of the Toolbar:

~~~js
toolbar.events.on("Click", function(id,e){ 
//id - toolbar button id, e - default mouse event of browser
	switch(id) {
        case 'load': {
            grid.data.parse(grid_dataset); 
            break;
        }
        case 'clear': {
            grid.data.removeAll(); 
            break;
        }
    }
});
~~~

<i>If you click on the "Load" icon the data will be parsed into the Grid with the help of the <b>parse()</b> method. We've already [prepared the data set in the previous step](tutorial/basic_application/step4.md).</i>

<i>If you click on the "Clear" icon, all items will be deleted from the grid through the <b>removeAll()</b> method.</i>

<img style="margin: 19px" src="tutorial/basic_application/bind_toolbar_grid.png"/>

For more information about working with the Toolbar events, see the [](toolbar/handling_events.md) article. The methods used to work with data are described in data_collection/api/refs/datacollection.md.

<div id="tutorial_step">
    <a id="next_step" href="tutorial/basic_application/step6.md"></a>
</div>


