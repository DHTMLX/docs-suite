---
sidebar_label: adjustColumnWidth
title: adjustColumnWidth
---          

@short: adjusts the width of a column to make all its content visible

adjustColumnWidth(id: string | number, adjust?: "data" | "header" | "footer" | boolean): void;


@params:
- id		string,number		the id of a column
- adjust	string,boolean		optional, the mode of adjusting a column ("data" | "header" | "footer" | boolean)


@example:
grid.adjustColumnWidth("b", "header");


@template: api_method
@descr:
If no value is set to the *adjust* parameter, the **adjustColumnWidth** method sets it to *true*.


@relatedapi: grid/api/grid_adjust_config.md



@changelog:


