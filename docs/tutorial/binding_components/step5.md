---
sidebar_label: Step 5. Add buttons to Toolbar
title: Step 5. Add buttons to Toolbar
---          

We've already placed the "Load" and "Clear" buttons into Toolbar in the [previous tutorial](tutorial/basic_application/step3.md). 

Now we need to add other buttons to Toolbar in order to edit, add or delete rows in the grid. This is how we add them:

~~~js
toolbar.data.parse([
    {
        "id": "add",
        "icon": "mdi mdi-plus",
        "value": "Add"
    },
    {
        "id": "edit",
        "icon": "mdi mdi-pencil",
        "value": "Edit"
    },
    {
        "id": "delete",
        "icon": "mdi mdi-delete",
        "value": "Delete"
    },

]);
~~~

<img src="tutorial/binding_components/toolbar.png"/>


<div id="tutorial_step">
    <a id="next_step" href="tutorial/binding_components/step6.md"></a>
</div>