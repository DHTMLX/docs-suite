---
sidebar_label: adjust
title: adjust
---          

@short: defines whether the width of columns is automatically adjusted to the width of their content

@signature: {'adjust?: IAdjustBy;'}

@default: false

@example:
var treegrid = new dhx.TreeGrid("treegrid_container", {
    columns: [// columns config],
    adjust: true, /*!*/ 
    data: dataset
});


@descr:

**Related sample**: [TreeGrid. Adjust Columns](https://snippet.dhtmlx.com/lgvoz0ar)

The property can be specified to one of the available adjustment modes:

<table>
	<tbody>
        <tr>
			<td><b>"header"</b></td>
			<td>adjusts the columns to the width of their header</td>
		</tr>
        <tr>
			<td><b>"footer"</b></td>
			<td>adjusts the columns to the width of their footer</td>
		</tr>
        <tr>
			<td><b>"data"</b></td>
			<td>adjusts the columns to the width of their content</td>
		</tr>
        <tr>
			<td><b>true</b></td>
			<td>combines the above mentioned modes and adjusts the column to the bigger value</td>
		</tr>
    </tbody>
</table>

@changelog: added in v6.4

@relatedapi: treegrid/api/treegrid_adjustcolumnwidth_method.md

@related: treegrid/configuration.md#autosize-for-columns

