---
sidebar_label: Customization
title: JavaScript Form - Customization 
description: You can explore the customization of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# Customization

## Styling Form

You can change the appearance of a Form.

![Form with a custom teal color theme on input fields and a Send button in DHTMLX Suite](/img/form/custom_style.png)

**Related sample**: [Form. Styling (custom CSS)](https://snippet.dhtmlx.com/wnscgb50)

Follow these steps:

- Add one or more CSS classes with the settings you need. Place them in the `<style>` section of your HTML page or in a separate stylesheet, and include that file on the page:

~~~html
<style>
    .my_first_class {
        /*some styles*/
    }
    
    .my_second_class {
        /*some styles*/
    }
</style>
~~~

- Specify the name of the class you created (or several names separated by spaces) as the value of the [](form/api/form_css_config.md) property in the Form configuration:

~~~js
const form = new dhx.Form("form_container", {
    css:"my_first_class my_second_class"
});
~~~

For example:

~~~html
<style>
    .custom {
        --dhx-background-primary: rgb(238, 238, 238);
        --dhx-color-primary: #118d8d;
        --dhx-color-primary-active: #118d8d;
        --dhx-color-primary-hover: #1ad1d1;
    }
</style>

<script>
    const form = new dhx.Form("form_container", {
        padding: 40,
        width: 400,
        css: "custom",
        rows: [
            {
                type: "input",
                label: "Name",
                placeholder: "John Doe",
            },
            {
                type: "input",
                label: "Email",
                placeholder: "jd@mail.name"
            },
            // more controls
        ]
    });
</script>
~~~

## Styling Form controls

![Form with a custom-styled Name input outlined in yellow among teal-themed controls in DHTMLX Suite](/img/form/custom_styles.png)

**Related sample**: [Form. Styling (custom CSS)](https://snippet.dhtmlx.com/wnscgb50)

You can also style individual Form controls with the `css` option in the control configuration object.

~~~html
<style>
    .custom {
        --dhx-background-primary: rgb(238, 238, 238);
        --dhx-color-primary: #118d8d;
        --dhx-color-primary-active: #118d8d;
        --dhx-color-primary-hover: #1ad1d1;
    }
    .name {
        --dhx-color-primary-active: #d1b81a;
    }
</style>

<script>
    const form = new dhx.Form("form_container", {
        padding: 40,
        width: 400,
        css: "custom",
        rows: [
            {    
                css: "name",
                type: "input",
                label: "Name",
                placeholder: "John Doe"
            },
            {
                type: "input",
                label: "Email",
                placeholder: "jd@mail.name"
            },
            // more controls
        ]
    });
</script>
~~~
