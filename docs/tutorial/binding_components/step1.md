---
sidebar_label: Step 1. Add a Window
title: Step 1. Add a Window
---          

import styles from '@site/src/css/tutorial.module.scss';

Let’s see how to add a window to the page in two steps:

1\. First, initialize a window with the `dhx.Window` object constructor:

~~~~js
const dhxWindow = new dhx.Window(
    {
        title: "Window", 
        closable: true, 
        modal: true, 
        minWidth: 520, 
        minHeight: 420, 
        height: 420, 
        footer: true
    }
);
~~~~

The constructor takes one parameter:

- An object with a set of Window properties

2\. Then add the "Apply" and "Cancel" buttons to the window footer. Pass an array of their configuration objects to the `add()` method of [TreeCollection](/tree_collection/):

~~~~js
dhxWindow.footer.data.add([
    {type: "spacer"},
    {id: "cancel", type: "button", value: "Cancel", view: "flat", color: "danger"},
    {id: "apply", type: "button", value: "Apply", view: "flat", color: "primary"}
],0);
~~~~

We pass two parameters to the method:

- The first parameter is an array of item objects.
- The second parameter is the index of the position to insert the new items at.
 
<div className={styles.image}>

![Empty modal window titled Editing item with Cancel and Apply footer buttons in DHTMLX Suite](/img/tutorial/binding_components/window.png)

</div>
 
Read more about Window properties in the [Configuration](window/configuration.md) article. The [Customization](window/customization.md) article explains how to change the look and feel of the Window header and footer.


<div id="tutorial_step">
    <a id="next_step" href="tutorial/binding_components/step2.md"></a>
</div>










