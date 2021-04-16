---
sidebar_label: sort
title: sort
---          

@short: sorts controls according to some criteria

@params:
- rule		object		an object with parameters for sorting

@example:
treeGrid.data.sort({
	by: "price",
	dir: "asc",
	as: function (value) { return value ? value : "" }
});

@template: api_method
@descr:
The **rule** object has the following attributes:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>by</b></td>
			<td>(<i>string</i>) the id of a data field (a column of TreeGrid)</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>dir</b></td>
			<td>(<i>function</i>) the direction of sorting "asc" or "desc"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>as</b></td>
			<td>(<i>function</i>) a function that specifies the type to sort data as</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>rule</b></td>
			<td>(<i>function</i>) optional, a sorting rule; the function must have two parameters and return a number (-1,0,1)</td>
		</tr>
    </tbody>
</table>


{{note Calling the method without parameters will discard all applied sorting rules.}}

###Custom sorting

To set a custom function for sorting you need to specify the **rule** attribute in a passed object. For example:

~~~js
treegrid.data.sort({
    rule: (a,b) => (a.type < b.type) ? -1 : ( (a.type > b.type) ? 1 : 0 )
});
~~~