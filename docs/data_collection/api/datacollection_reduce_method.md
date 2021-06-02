---
sidebar_label: reduce()
title: JavaScript DataCollection - reduce Method 
description: You can explore the reduce method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# reduce()

@short: reduces the array to a single value

@signature: {'reduce<A>(callback: ReduceCallBack<T, A>, acc: A): A;'}

@params:

- `callback: function` - a function that will be called for each item in the array
- `acc: any` - a value to be passed to the function as the initial value

@returns:
A single output value.

@example:
var total = component.data.reduce(function(new_item, item) {
    return new_item + item.value;
}, 0);

@descr:

**Related sample**: [Data. Reduce](https://snippet.dhtmlx.com/pv7hewc7)

A handler function takes two parameters:

<table>
	<tbody>
        <tr>
			<td><b>new_item</b></td>
			<td>(<i>any</i>) the <i>initialValue</i>, or the previously returned value of the function</td>
		</tr>
        <tr>
			<td><b>item</b></td>
			<td>(<i>any</i>) the current item of a data collection</td>
		</tr>
    </tbody>
</table>
