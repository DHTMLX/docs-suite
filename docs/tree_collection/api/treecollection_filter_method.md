---
sidebar_label: filter
title: filter
---          

@short: filters controls by some criteria

@params:
- rule      function,object     the filtering criteria
- config 		object		 optional, defines the parameters of filtering

@example:
treeGrid.data.filter({
    by: "name",
    match: "Angola"
});

@template: api_method
@descr:

Calling the **filter()** method without parameters reverts the component to the initial state:

~~~js
tree.data.filter();    // show all
~~~

The **rule** parameter:

- if set as a function, the filtering will be applied by the rule specified in the function:

~~~js
tree.data.filter(function (item) {
    return item.value.toLowerCase().indexOf("a") !== -1;
});
~~~

- if set as an object, the parameter has the following attributes:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>by</b></td>
			<td>(<i>string</i>) mandatory, the id of a column</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>match</b></td>
			<td>(<i>string</i>) mandatory, a pattern to match</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>compare</b></td>
			<td>(<i>function</i>) optional, a function for extended filtering that takes three parameters:
                <ul>
                    <li><b>value</b> - the value to compare (e.g. a column in a row for Grid)</li>
                    <li><b>match</b> - a pattern to match</li>
                    <li><b>item</b> - a data item the values of which should be compared (e.g. a row)</li>
                </ul>
            </td>
		</tr>
    </tbody>
</table>

~~~js
treeGrid.data.filter({
    by: "name",
    match: "Angola"
});
~~~

<br/><br/>

The **config** parameter may contain the following properties:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>type</b></td>
			<td>(<i>string</i>) optional, defines the area the filtering will be applied: "all", "level", "leafs"</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>level</b></td>
			<td>(<i>number</i>) optional, the level the filtering will be applied to</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>add</b></td>
			<td>(<i>boolean</i>) defines whether each next filtering will be applied to the already filtered data (<i>true</i>), or to the initial data (<i>false</i>, default)</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>smartFilter</b></td>
			<td>(<i>boolean</i>) defines whether a filtering rule will be applied after adding and editing items of the collection
            </td>
		</tr>
    </tbody>
</table>



@relatedsample: https://snippet.dhtmlx.com/epsslwcd	TreeGrid. Basic Filter

