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

``` todotw  написать, что все свойства, c которыми работает метод, находятся в grid/api/grid_columns_config" 

Each column object may contain the [followings fields](grid/api/grid_columns_config.md).

важно поставить якорную ссылку
``` 

