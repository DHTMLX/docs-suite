---
sidebar_label: reduce
title: reduce
---          

@short: reduces the array to a single value

@signature: {'reduce<A>(callback: ReduceCallBack<T, A>, acc: A): A;'}

@params:

- callback			function		a function that will be called for each item in the array
- acc          any             a value to be passed to the function as the initial value

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

**Related sample**: [Data. Reduce](https://snippet.dhtmlx.com/pv7hewc7)
