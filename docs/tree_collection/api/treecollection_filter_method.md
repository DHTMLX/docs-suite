---
sidebar_label: filter()
title: JavaScript TreeCollection - filter Method 
hide_title: true
description: You can explore the filter method of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# filter()

@short: filters controls by some criteria

@signature: {'filter(rule?: IFilterMode | IFilterCallback, config?: IFilterConfig): void;'}

@params:
- `rule: function, object` - the filtering criteria
- `config: object` - optional, defines the parameters of filtering

@example:
treeGrid.data.filter({
    by: "name",
    match: "Angola"
});

@descr:

**Related sample**: [TreeGrid. Basic Filter](https://snippet.dhtmlx.com/epsslwcd)

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

<table>
	<tbody>
        <tr>
			<td><b>by</b></td>
			<td>(<i>string</i>) mandatory, the id of a column</td>
		</tr>
        <tr>
			<td><b>match</b></td>
			<td>(<i>string</i>) mandatory, a pattern to match</td>
		</tr>
        <tr>
			<td><b>compare</b></td>
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

The **config** parameter may contain the following properties:

<table>
	<tbody>
        <tr>
			<td><b>type</b></td>
			<td>(<i>string</i>) optional, defines the area the filtering will be applied: "all", "level", "leafs"</td>
		</tr>
        <tr>
			<td><b>level</b></td>
			<td>(<i>number</i>) optional, the level the filtering will be applied to</td>
		</tr>
        <tr>
			<td><b>add</b></td>
			<td>(<i>boolean</i>) defines whether each next filtering will be applied to the already filtered data (<i>true</i>), or to the initial data (<i>false</i>, default)</td>
		</tr>
        <tr>
			<td><b>smartFilter</b></td>
			<td>(<i>boolean</i>) defines whether a filtering rule will be applied after adding and editing items of the collection
            </td>
		</tr>
    </tbody>
</table>
