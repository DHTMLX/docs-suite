---
sidebar_label: forEach
title: forEach
---          

@short: iterates over all controls of a from

@signature: {'forEach(callback: FormDataCallback): void;'}

@params:
- callback	function    a function that will iterate over Form controls

@example:
form.forEach(function(item, index, array) {
    console.log("This is the form control: ", item);
    console.log("This is the index of form control : ", index);
    console.log("This is the array with form controls: ", array);
});

@template: api_method
@descr:
The callback function takes three parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>item</b></td>
			<td>(<i>object</i>) the object of a form control</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>index</b></td>
			<td>(<i>number</i>) the index of a form control</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>array</b></td>
			<td>(<i>array</i>) an array with form controls</td>
		</tr>
    </tbody>
</table>

**Related sample**: [Form. ForEach](https://snippet.dhtmlx.com/hqzqpavs)

@changelog: added in v6.4
