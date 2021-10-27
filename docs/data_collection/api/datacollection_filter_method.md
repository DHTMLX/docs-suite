---
sidebar_label: filter()
title: JavaScript DataCollection - filter Method 
description: You can explore the filter method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---

# filter()

@short: filters data items in a component

@signature: {'filter(rule?: IFilterCallback | IFilterMode, config?: IFilterConfig): void;'}

@params:
- `rule: function | object` - the filtering criteria
- `config: object` - optional, defines the parameters of filtering

@example:

grid.data.filter(function (item) {
    return item.a > 0 && item.b !== "Apple";
});

// or
grid.data.filter(function (item) {
    return item.a > 0 && item.b !== "Apple";
}, {
    add: true
});

// or
grid.data.filter({
    by: "a",
    match: "Orange",
    compare: function (value, match, item) {
        if (item.a !== "Some") {
            return val === "New";
        }
    return false;
    }
}, {
    add: true
});

@descr:

**Related sample**: [Data. Filter](https://snippet.dhtmlx.com/csiwq3kj)

Calling the **filter()** method without parameters reverts the component to the initial state:

~~~js
grid.data.filter();
~~~

The **rule** parameter:

- if set as a function, the filtering will be applied by the rule specified in the function:

~~~js
grid.data.filter(function (item) {
    return item.a > 0 && item.b !== "Apple";
});
~~~

- if set as an object, the parameter has the following attributes:

<table>
	<tbody>
        <tr>
			<td><b>by</b></td>
			<td>(<i>string</i>) mandatory, the id of a data field (the column of Grid)</td>
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

For example:

~~~js
grid.data.filter({
    by: "a",
    match: "Orange",
    compare: function (value, match, item) {
        if (item.a !== "Some") {
            return value === "New";
        }
    return false;
});
~~~

The **config** parameter may contain two properties:

<table>
	<tbody>
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

For instance:

~~~js
grid.data.filter(function (item) {
    return item.a > 0 && item.b !== "Apple";
}, {
    add: true,
    smartFilter: true
});

grid.data.filter({
    by: "a",
    match: "Orange",
    compare: function (value, match, item) {
        if (item.a !== "Some") {
            return val === "New";
        }
    return false;
    }
}, {
    add: true,
    smartFilter: true
});
~~~
