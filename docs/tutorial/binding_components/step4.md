---
sidebar_label: Step 4. Add a ContextMenu
title: Step 4. Add a ContextMenu
---          

import styles from '@site/src/css/tutorial.module.scss';

In this step, we add a context menu to the page and display it.

## Add ContextMenu to the page

To add a context menu to the page, take the following steps:

1\. Initialize ContextMenu with the `dhx.ContextMenu` constructor in the same way as we [initialized the toolbar](tutorial/basic_application/step3.md):

~~~js
var contextMenu = new dhx.ContextMenu(null, {css: "dhx_widget--bg_gray"});
~~~

2\. Create a JSON structure with items for ContextMenu:

~~~js
var contextmenu_data = [
    {
        "id": "edit",
        "icon": "mdi mdi-pencil",
        "value": "Edit"
    },
    {
        "id": "delete",
        "icon": "mdi mdi-delete",
        "value": "Delete"
    }
];
~~~

You can find more information about types of the menu controls and their attributes in the [List of Menu Controls](menu/configuring_menu_items.md) article.


3\. We use the `parse()` method to load the predefined data set into the context menu:

~~~js
contextMenu.data.parse(contextmenu_data);
~~~

<i>We pass a JSON structure as a parameter.</i>

## Display ContextMenu

Let's display the context menu on the page when a user right-clicks a grid cell.

Follow these steps:

- Select the grid cell with the `setCell()` method of the Selection object. The `setCell()` method takes the id of a grid row as a parameter:

~~~js
grid.selection.setCell(row.id);
~~~

- Prevent the browser context menu from appearing with the `event.preventDefault()` method:

~~~js    
e.preventDefault();
~~~

- Show the context menu on the page with the [](menu/api/menu_showat_method.md) method of ContextMenu:

~~~js
contextMenu.showAt(e);
~~~

Put these steps together inside the handler of the [](grid/api/grid_cellrightclick_event.md) event:

~~~js
grid.events.on("CellRightClick", function(row,column,e){
    grid.selection.setCell(row.id);
    e.preventDefault();
    contextMenu.showAt(e);
});
~~~

After that, a right-click on a grid cell opens the context menu we specified.

<div className={styles.image}>

![Context menu with Edit and Delete items opened on a grid row beside a pie chart in DHTMLX Suite](/img/tutorial/binding_components/context_menu.png)

</div>

<div id="tutorial_step">
    <a id="next_step" href="tutorial/binding_components/step5.md"></a>
</div>








