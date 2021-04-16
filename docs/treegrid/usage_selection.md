---
sidebar_label: Work with Selection Object
title: Work with Selection Object
---          



You can manipulate with Grid cells via the API of the selection object. It is possible to get the object of a selected Grid cell or set the selection to a cell. The selection object also allows removing selection from previously selected cells.

Enabling/Disabling Selection object
---------------------------------

Starting from v7.0, you can activate selection of cells via the [](treegrid/api/selection/selection_enable_method.md) method of the selection object.

~~~js
treegrid.selection.enable();
~~~

To disable the Selection object, make use of the [](treegrid/api/selection/selection_disable_method.md) method of the selection object:

~~~js
treegrid.selection.disable();
~~~

Setting selection to a cell
----------------------------

To set selection to a particular cell, make use of the [setCell()](treegrid/api/selection/selection_setcell_method.md) method of the selection object. The method takes the following parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>row</b></td>
			<td>(<i>object</i>) an object with a cell to be selected</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>column</b></td>
			<td>(<i>object</i>) the config of a column</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
var row = treegrid.data.getItem(treegrid.data.getId(0));
var column = treegrid.getColumn("population");
treegrid.selection.setCell(row, column);
~~~


To make the process of selecting a cell more flexible, you can apply the related events of the selection object:

- [afterSelect](treegrid/api/selection/selection_afterselect_event.md)
- [beforeSelect](treegrid/api/selection/selection_beforeselect_event.md)


Removing selection
-------------------

Starting from v7.0, you can remove selection from a selected cell/row or from highlighted cells/rows using the [](treegrid/api/selection/selection_removecell_method.md) method of the selection object. The method takes two parameters:

<table class="webixdoc_links">
	<tbody>
        <tr>
			<td class="webixdoc_links0"><b>rowId</b></td>
			<td>(<i>string|number</i>) optional, the id of a row</td>
		</tr>
        <tr>
			<td class="webixdoc_links0"><b>colId</b></td>
			<td>(<i>string|number</i>) optional, the id of a column</td>
		</tr>
    </tbody>
</table>
<br/>

~~~js
// unselects all previously selected cells
treegrid.selection.removeCell();
 
// unselects all previously selected cells of the specified row
treegrid.selection.removeCell(rowId);
 
// removes selection from the specified cell
treegrid.selection.removeCell(rowId, colId);
~~~

<br/>

To make the process of unselecting cells more flexible, you can apply the related events of the selection object:

- [afterUnSelect](treegrid/api/selection/selection_afterunselect_event.md)
- [beforeUnSelect](treegrid/api/selection/selection_beforeunselect_event.md)


Getting object of a selected cell
-----------------------------------

To get the object of a selected TreeGrid cell, use the [getCell()](treegrid/api/selection/selection_getcell_method.md) method of the selection object:

~~~js
var selectedCell = treegrid.selection.getCell();
// -> {row: {…}, column: {…}}
~~~

