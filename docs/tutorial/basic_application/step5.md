---
sidebar_label: Step 5. Bind Toolbar to Grid
title: Step 5. Bind Toolbar to Grid
---          

import styles from '@site/src/css/tutorial.module.scss';

In this step, we fill and clear the grid with the toolbar buttons. For this, we use the `Click` event of the toolbar:

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

<i>If you click the "Load" button, the `parse()` method loads the data into the grid. We've already [prepared the data set in the previous step](tutorial/basic_application/step4.md).</i>

<i>If you click the "Clear" button, the `removeAll()` method deletes all items from the grid.</i>

<div className={styles.image}>

![Contacts grid filled with user data after clicking the Load toolbar button in DHTMLX Suite](/img/tutorial/basic_application/bind_toolbar_grid.png)

</div>

For more information about working with Toolbar events, see the [](toolbar/handling_events.md) article. The [DataCollection API](/data_collection/) describes the methods for working with data.

<div id="tutorial_step">
    <a id="next_step" href="tutorial/basic_application/step6.md"></a>
</div>
