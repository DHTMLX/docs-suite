---
sidebar_label: filter()
title: JavaScript DataCollection - filter Method 
description: You can explore the filter method of DataCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# filter()

@short: filters data items in a component

@signature: {'filter(rule?: function | object, config?: object, silent?: boolean): string;'}

@params:

<table>
    <tbody>
        <tr>
            <td><b>rule</b></td>
            <td>(<i>function | object</i>) optional, the filtering criteria. It can be:<ul><li>a filtering function. It takes as a parameter a data item and returns <i>true/false</i></li><li>an object with the following attributes:<ul><li><b>`by?: string | number`</b> - optional, the id of a column</li><li><b>`match?: string`</b> - optional, a pattern to match </li><li><b>`compare?: function`</b> - optional, a function for extended filtering that takes the following parameters:<ul><li><b>value</b> - the value to compare </li><li><b>match</b> - a pattern to match </li><li><b>item</b> - a data item the values of which should be compared</li></ul></li></ul></li></ul></td>
        </tr>
        <tr>
            <td><b>config</b></td>
            <td>(<i>object</i>) optional, an object with the following properties:<ul><li><b>`id?: string`</b> - optional, the id of the filter</li><li><b>`add?: boolean`</b> - optional, defines whether each next filtering will be applied to the already filtered data (<i>true</i>), or to the initial data (<i>false</i>, default)</li><li><b>`permanent?: boolean`</b> - optional, <i>true</i> to make the current filter permanent. It will be applied even if the next filtering doesn't have the <b>`add:true`</b> property in its configuration object. Such a filter can be removed just with the <a href="../datacollection_resetfilter_method/">`resetFilter()`</a> method</li></ul></td>
        </tr>
        <tr>
            <td><b>silent</b></td>
            <td>(<i>boolean</i>) optional, if set to <i>true</i>, the method will be called without triggering events, <i>false</i> by default</td>
        </tr>
    </tbody>
</table>

:::info
Note that after calling the method with the `silent:true` parameter, you may need to repaint the component with the `paint()` method.
:::
    
@returns:
- `id: string` - the id of the filter

@example:
// filtering data by a function
grid.data.filter(function (item) {
    return item.a > 0 && item.b !== "Apple";
});

// or
grid.data.filter(function (item) {
    return item.a > 0 && item.b !== "Apple";
}, {
    add: true,
});

// filtering data by the column
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
});

@descr:

**Related sample**: [Data. Filter](https://snippet.dhtmlx.com/csiwq3kj)


