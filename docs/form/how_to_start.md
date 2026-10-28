---
sidebar_label: Initialization
title: JavaScript Form - Initialization 
description: You can explore the initialization of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Initialization

:::info
[Download the DHTMLX Form package](https://dhtmlx.com/docs/products/dhtmlxSuite/download.shtml) as part of the DHTMLX Suite library.
:::

Follow these steps to add DHTMLX Form to an application:

- [Include source files](#include-source-files)
- [Create a container](#create-a-container)
- [Define Form structure](#define-form-structure)
- [Initialize Form](#initialize-form) with the constructor

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

Unpack the downloaded package into your project folder.

Create an HTML file and add the full paths to the JS and CSS files of the DHTMLX Suite library in its header. The files are:

- `suite.js`
- `suite.css`

~~~html
<script type="text/javascript" src="../../codebase/suite.js"></script>
<link rel="stylesheet" href="../../codebase/suite.css">
~~~

## Create a container

Add a container for a Form and give it an id, for example `form_container`:

~~~html
<div id="form_container"></div>
~~~

## Define Form structure

Specify the list of Form controls. For example, you can create a form with two text fields for a name and an email, a checkbox for consent to data processing, and a button that sends the form to a server.

The structure of your form then looks like this:

- a Name input
- an Email input
- an Agree checkbox
- a Send button

![Form with Name and Email input fields an I agree checkbox and a Send button in DHTMLX Suite](/img/form/form_init.png)

To add controls to a form, put them into a layout: either a vertical one (the `rows` property) or a horizontal one (the `cols` property). The example below arranges controls vertically, one under another:

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

## Initialize Form

Initialize Form with the `dhx.Form` constructor. The constructor takes two parameters:

- The HTML object on the page that serves as the form container.
- A configuration object that contains config options and an array of form controls defined as objects.

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
