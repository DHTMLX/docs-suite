---
sidebar_label: addRegion()
title: JavaScript Matrix - addRegion Method
description: You can explore the addRegion method of Matrix in the documentation of the Acme JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of Acme Suite.
---

# addRegion()

@short: adds a rows/cols region

@signature: {'addRegion(regionObj: object): void;'}

@params:
- `regionObj: object` - an object with configuration of a region. The object contains the following properties:
    - `row: string | number` - mandatory, the id of a row
    - `column: string | number` - mandatory, the id of a column
    - `rowspan: number` - optional, the number of rows in a region
    - `colspan: number` - optional, the number of columns in a region
    - `text: string | number` - optional, the text in a spanned row/column
    - `css: string | number` - optional, the name of the CSS class that will be applied to a region

@example:
matrix.addRegion({
    row: "0",
    column: "a",
    rowspan: 5
});
// matrix.paint();

@descr:

[comment]: # (@relatedapi: matrix/api/matrix_regions_config.md matrix/api/matrix_getregion_method.md matrix/api/matrix_removeregion_method.md)

[comment]: # (@related: matrix/usage.md#addingremoving-regions)
