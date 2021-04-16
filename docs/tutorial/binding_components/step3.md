---
sidebar_label: Step 3. Add Form into Window 
title: Step 3. Add Form into Window 
description: description
---          

``` todo страница не нужна

In this step we describe how to add a form on the page. The form will contain fields displaying the content of the selected grid row and will allow you to edit the data in the grid.

In addition, we will put the form into the window so that we could apply or cancel changes in the form.

##Specifying configuration of the Form

Let's define the list of Form controls and put them in two columns:

~~~~js
var formConfig = {
	gravity: false,
    cols: [
    	{
    		padding: 10,
       		rows: [
          		{ type: "input", hidden: true, gravity: false, id: "id"},
          		{
             	  type: "input", gravity: false, label: "First Name",
           	 	   required: true, id: "first_name"
            	},
				{
              		type: "input",gravity: false,required: true,
         			label: "Email", id: "email", validation: "email"
				},
				{
              		type: "checkbox", gravity: false, label: "Premium",
           			id: "vip", labelInline: true 
				}
       		]
        },
        {
        	padding: 10,
        	rows:[
        		{ type: "input", label: "Last Name", required: true,
             		gravity: false, id: "last_name"
                },
            	{
                   id: "country", gravity: false, type: "select",
             		required: true, label: "Country", options: countries
				}
            ]
		}
    ]
};
~~~~

The first column contains the following fields:

- an input field for entering the first name,

- an input field for entering an email,

- a checkbox for the user to make a choice between a Premium user and a Default user,

- a hidden input field "Id". This field will help to define later what to do with a grid row - to add a new one or to edit a selected one.

The second column consists of:

- an input field for entering the last name,

- a select box to choose a country. The options for the Country select are the following:

~~~js
var countries = [
	{value: "", content: ""},
    {value: "Albania", content: "Albania"},
    {value: "Haiti", content: "Haiti"},
    {value: "Japan", content: "Japan"},
    {value: "Poland", content: "Poland"},
    //more options
];
~~~

{{note You need to define a JSON structure with country options before defining the list of Form controls.}}

The full list of form controls and their attributes is given [here](form/controls_list.md).

##Initializing the Form

Now, we can initialize Form with the dhx.Form object constructor:

~~~js
var form = new dhx.Form(null, formConfig);
~~~

<i>The constructor takes two parameters:

- the first parameter is the form container, which is `null` as we are attaching a form to the window, not to an HTML container,
- the second parameter is a configuration object where we set the list of the form controls.</i>

##Adding Form into Window

Finally, we use the <b>attach()</b> method of a window to attach a form to the window:

~~~~js
dhxWindow.attach(form);
~~~~ 

<img style="margin: 12px" src="tutorial/binding_components/form.png"/>

<div id="tutorial_step">
    <a id="next_step" href="tutorial/binding_components/step4.md"></a>
</div>

```






