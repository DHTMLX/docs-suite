---
sidebar_label: Customization
title: Customization
description: description
---          

## Styling Form

There is a possibility to make changes in the look and feel of a form. For this you need to take the following steps:

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

- specify the name of the created CSS class (or names of classes separated by spaces) as the value of the [](form/api/form_css_property.md) property in the Form configuration:

~~~js
var form = new dhx.Form({
    css:"my_first_class my_second_class"
});
~~~

{{editor	https://snippet.dhtmlx.com/wnscgb50	Form. Form Custom Styles}}


## Styling Form controls

![](../assets/form/custom_styles.png)

You can modify styling of Form controls as well using the **css** option inside the object of a [related control](form/controls_list.md).

~~~html
<style>
	.bg-white .dhx_input {
		background: #fff;
	}
</style>


var form = new dhx.Form("form-sample", {
	css:"bg-gray",
	rows: [
		{	
			css:"bg-white",
			type: "input",
			label: "Name",
			placeholder: "John Doe"
		},
		{
			css:"bg-white",
			type: "input",
			label: "Email",
			placeholder: "jd@mail.name"
		}
	]
});
~~~

{{editor	https://snippet.dhtmlx.com/wnscgb50	Form. Form Custom Styles}}
