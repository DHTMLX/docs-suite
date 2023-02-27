---
sidebar_label: Customization
title: JavaScript Form - Customization 
description: You can explore the customization of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# Customization

## Styling Form

There is a possibility to make changes in the look and feel of a form. 

![Custom style](../assets/form/custom_style.png)

**Related sample**: [Form. Styling (custom CSS)](https://snippet.dhtmlx.com/wnscgb50)

For this you need to take the following steps:

- add a new CSS class(es) with desired settings in the &lt;style&gt; section of your HTML page or in your file with styles (don't forget to include your file on the page in this case)

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

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [](form/api/form_css_config.md) property in the Form configuration:

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

![Styling Form and its controls](../assets/form/custom_styles.png)

**Related sample**: [Form. Styling (custom CSS)](https://snippet.dhtmlx.com/wnscgb50)

You can modify styling of Form controls as well using the **css** option inside the object of a related control.

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
