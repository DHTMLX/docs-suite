---
sidebar_label: Step 1. Add a Window
title: Step 1. Add a Window
---          

Let’s see how to add a window on the page in two steps: 

1\. At first, we need to initialize a Window with the dhx.Window object constructor:

~~~~js
var dhxWindow = new dhx.Window(
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

- an object with a set of Window properties

2\. Then we need to add the "Apply" and "Cancel" controls into the footer of the window by specifying objects with their attributes and passing them to the <b>add()</b> method of data_collection/api/refs/datacollection.md:

~~~~js
dhxWindow.footer.data.add([
    {type: "spacer"},
    {id: "cancel", type: "button", value: "Cancel", view: "flat", color: "danger"},
    {id: "apply", type: "button", value: "Apply", view: "flat", color: "primary"}
],0);
~~~~

We pass two parameters to the method:

- the first is an array of item objects,
- the second is the index of the position starting from which new items will be added
 
<img style="margin: 12px" src="tutorial/binding_components/window.png"/> 
 
You can find out more about Window properties in the [Configuration](window/configuration.md) article. The possibilities of adjusting the look and feel of the Window header and footer are described in the
[Customization](window/customization.md) article.


<div id="tutorial_step">
    <a id="next_step" href="tutorial/binding_components/step2.md"></a>
</div>










