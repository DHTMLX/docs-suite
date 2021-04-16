---
sidebar_label: setColumns
title: setColumns
---          

@short: sets configuration for TreeGrid columns

@signature: setColumns(columns: ICol[]): void;

@params:
- columns	array	an array of objects with configuration of columns

@example:
grid.setColumns([
    { id: "a", header: [{ text: "New header for column a" }] },
    { id: "b", header: [{ text: "New header for column b" }] },
	// more columns objects
]);

@template: api_method
@descr:
Each column object may contain a set of properties. You will find the full list of the configuration properties of a TreeGrid column [here](treegrid/api/api_gridcolumn_properties.md).


@relatedapi: treegrid/api/treegrid_getcolumn_method.md
@related: treegrid/usage.md#workingwithcolumnsandcells

@changelog:
