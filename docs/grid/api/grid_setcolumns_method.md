---
sidebar_label: setColumns
title: setColumns
description: description
---          

@short: sets configuration for Grid columns

@signature: setColumns(columns: ICol[]): void;

@params:
- columns	array	an array of objects with configuration of columns

@example:
grid.setColumns([
    { id: "a", header: [{ text: "New header for column a" }] },
    { id: "b", header: [{ text: "New header for column b" }] },
	// more columns objects
]);

@descr:

Each column object may contain a set of properties. You will find the full list of the configuration properties of a Grid column [here](grid/api/api_gridcolumn_properties.md).

