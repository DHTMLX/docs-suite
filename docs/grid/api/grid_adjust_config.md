---
sidebar_label: adjust
title: adjust
description: description
---          

@short: defines whether the width of columns is automatically adjusted to the width of their content

adjust?: "data" | "header" | "footer" | boolean;

@default: false

@example: 
var grid = new dhx.Grid("grid_container", {
    columns: [// columns config],
    adjust: true, /*!*/ 
    data: dataset
});

@descr: The property can be specified to one of the available adjustment modes:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>"header"</b></td>
			<td>adjusts the columns to the width of their header</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>"footer"</b></td>
			<td>adjusts the columns to the width of their footer</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>"data"</b></td>
			<td>adjusts the columns to the width of their content</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>true</b></td>
			<td>combines the above mentioned modes and adjusts the column to the bigger value</td>
		</tr>
    </tbody>
</table>


@relatedsample: https://snippet.dhtmlx.com/zfrpe22d	Grid. Adjust Columns

@relatedapi: grid/api/grid_adjustcolumnwidth_method.md

@related: grid/initialization.md#initializegrid
grid/configuration.md#autosizeforcolumns

@changelog: added in v6.4
