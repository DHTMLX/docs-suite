---
sidebar_label: forEach()
title: forEach()
---          

@short: iterates over all items of a data collection

@signature: {'forEach(callback: DataCallback<T>): void;'}

@params:
`callback: function` - a function that will iterate over items of a data collection

@example:
datacollection.forEach(function(element, index, array) {
    console.log("This is an item of dataCollection: ", element);
    console.log("This is an index of the element: ", index);
    console.log("This is an array of the elements: ", array);
});

@descr:

**Related sample**: [Data. ForEach](https://snippet.dhtmlx.com/wa6tcmtn)

The callback function takes three parameters:

<table>
	<tbody>
        <tr>
			<td><b>element</b></td>
			<td>(<i>object</i>) the object of an item</td>
		</tr>
        <tr>
			<td><b>index</b></td>
			<td>(<i>number</i>) the index of an item</td>
		</tr>
        <tr>
			<td><b>array</b></td>
			<td>(<i>array</i>) an array with items</td>
		</tr>
    </tbody>
</table>

@changelog: added in v6.4
