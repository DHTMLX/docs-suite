---
sidebar_label: Initialization
title: JavaScript Form - Initialization 
description: You can explore the initialization of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Initialization

To add dhtmlxForm into an application, you need to take the following simple steps:

- [Download the Form package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) and unpack it into a folder of your project
- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Define Form structure](#define-form-structure)
- [Initialize Form](#initialize-form) with the object constructor

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to Start with dhtmlxForm</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="form_container"></div>
        <script>
            // creating dhtmlxForm
            var form = new dhx.Form("form_container");
        </script>
    </body>
</html>
~~~

**Related sample**: [Form. Initialization](https://snippet.dhtmlx.com/yut2mnsz)

## Include source files

Create an HTML file and place full paths to JS and CSS files of the dhtmlxSuite library into the header of the file. The files are:

- *suite.js*
- *suite.css*

~~~html
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

## Create a container

Add a container for the Form and give it an id, e.g. "form_container":

~~~html
<div id="form_container"></div>
~~~

## Define Form structure

Now you need to specify the list of Form controls. For example, you can create a form with two text fields for entering a name and an email, a checkbox for the user to give consent to data processing and a button to 
send a form to a server.

Thus, the structure of your form will look like this:

- a Name input
- an Email input
- an Agree checkbox
- a Send button

![Form structure](../assets/form/form_init.png)

To add controls inside a form, you should put them into a layout, either a vertical one (the **rows** attribute), or a horizontal one (the **cols** attribute). In the example below controls are arranged vertically, one under
another:

~~~js
var form_data = {
	rows:[
    	{
      		type: "input",
      		label: "Name",
      		icon: "dxi dxi-magnify",
      		placeholder: "John Doe",
      		name: "name"
    	},
    	{
      		type: "input",
      		label: "Email",
      		placeholder: "jd@mail.name",
      		name: "email"
    	},		
    	{		
      		type: "input",
      		inputType: "password",
      		label: "Password",
      		placeholder: "********",
      		name: "password"
    	},
    	{
      		type: "checkbox",
      		text: "I agree",
      		value: "checkboxvalue",
      		id: "agree",
      		name: "agree"
    	},
    	{
      		type: "button",
      		text: "Send",
      		size: "medium",
      		view: "flat",
      		submit: true,
      		color: "primary"
    	}
	]
};
~~~

## Initialize Form

Initialize Form with the `dhx.Form` object constructor. The constructor takes two parameters:

- the HTML object on the page that serves as the form container. 
- a configuration object which (besides config options) contains an array of form controls defined as objects with a set of attributes 

~~~js
var form = new dhx.Form("form_container", {
	css: "dhx_widget--bordered",
	rows: [
		{
			type: "input",
			label: "Name",
			icon: "dxi dxi-magnify",
			placeholder: "John Doe",
			name: "name"
		},
		// more form controls
	]
});
~~~

**Related sample**: [Form. Initialization](https://snippet.dhtmlx.com/yut2mnsz)

### Configuration properties

You can find the full list of Form configuration properties in the [Form API overview](form/api/api_overview.md#properties) article.
