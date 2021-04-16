---
sidebar_label: reduce
title: reduce
---          

@short: reduces the array to a single value

@params:

- handler			function		a function that will be called for each item in the array
- new_item          any             a value to be passed to the function as the initial value

@example:
var total = datacollection.reduce(function(new_item, item) {
    return new_item + item.value;
}, 0);


@template:	api_method
@descr:

A handler function takes two parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>new_item</b></td>
			<td>(<i>any</i>) the <i>initialValue</i>, or the previously returned value of the function</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>item</b></td>
			<td>(<i>any</i>) the current item of a data collection</td>
		</tr>
    </tbody>
</table>

@relatedsample: https://snippet.dhtmlx.com/pv7hewc7	Data. Reduce