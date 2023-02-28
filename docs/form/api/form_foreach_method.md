---
sidebar_label: forEach()
title: JavaScript Form - forEach Method 
description: You can explore the forEach method of Form in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# forEach()

@short: iterates over all controls of a form

@signature: {'forEach(callback: FormDataCallback): void;'}

@params:
- `callback: function` - a function that will iterate over Form controls

@example:
form.forEach(function(item, index, array) {
    console.log("This is the form control: ", item);
    console.log("This is the index of form control : ", index);
    console.log("This is the array with form controls: ", array);
});

@descr:

**Related sample**: [Form. ForEach](https://snippet.dhtmlx.com/hqzqpavs)

The callback function takes three parameters:

<table>
	<tbody>
        <tr>
			<td><b>item</b></td>
			<td>(<i>object</i>) the object of a form control</td>
		</tr>
        <tr>
			<td><b>index</b></td>
			<td>(<i>number</i>) the index of a form control</td>
		</tr>
        <tr>
			<td><b>array</b></td>
			<td>(<i>array</i>) an array with form controls</td>
		</tr>
    </tbody>
</table>

@changelog: added in v6.4
