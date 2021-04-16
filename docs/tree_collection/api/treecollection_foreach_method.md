---
sidebar_label: forEach
title: forEach
---          

@short: iterates over all items of a tree collection

@params:
- callback	    function    a function that will iterate over items of a tree collection
- parentID      string      optional, the parent id. If not specified, the function will start iterating over from the root item.
- level         number      optional, the number of levels to be iterated over. If not specified, each nested level will be visited.

@example:
treecollection.forEach(function(element, index, array) {
    console.log("This is an item of treeCollection: ", element);
    console.log("This is an index of the element: ", index);
    console.log("This is an array of the elements: ", array);
});

@template: api_method
@descr:
The callback function takes three parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>element</b></td>
			<td>(<i>object</i>) the object of an item of a tree collection</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>index</b></td>
			<td>(<i>number</i>) the index of an item</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>array</b></td>
			<td>(<i>array</i>) an array with items</td>
		</tr>
    </tbody>
</table>



@changelog: added in v6.4
