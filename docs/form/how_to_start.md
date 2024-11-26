---
sidebar_label: Initialization
title: JavaScript Form - Initialization 
description: You can explore the initialization of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
[Download the DHTMLX Form package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as a part of the DHTMLX Suite library
:::

To add DHTMLX Form into an application, you need to take the following simple steps:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Define Form structure](#define-form-structure)
- [Initialize Form](#initialize-form) with the object constructor

~~~html
<!DOCTYPE html>
<html>
    <head>
        <title>How to start with DHTMLX Form</title>         
        <script type="text/javascript" src="../../codebase/suite.js"></script>
        <link rel="stylesheet" href="../../codebase/suite.css">
    </head>
    <body>
        <div id="form_container"></div>
        <script>
            // creating DHTMLX Form
            const form = new dhx.Form("form_container");
        </script>
    </body>
</html>
~~~

## Include source files

Unpack the downloaded package into a folder of your project.

After that, create an HTML file and place full paths to JS and CSS files of the DHTMLX Suite library into the header of the file. The files are:

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
rows: [
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
~~~

:::info
Please note that if you specify the `id` fields for controls, their values should be **unique**. You can also omit the `id` fields in the configuration of controls. In this case they will be generated automatically.
:::

## Initialize Form

Initialize Form with the `dhx.Form` object constructor. The constructor takes two parameters:

- the HTML object on the page that serves as the form container. 
- a configuration object which (besides config options) contains an array of form controls defined as objects with a set of attributes 

~~~js
const form = new dhx.Form("form_container", {
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

### Configuration properties

You can find the full list of Form configuration properties in the [Form API overview](form/api/api_overview.md#properties) article.

## Example

<iframe src="https://snippet.dhtmlx.com/yut2mnsz?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="500"></iframe>
