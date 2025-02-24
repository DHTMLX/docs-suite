---
sidebar_label: type
title: JavaScript Grid column - type Config 
description: You can explore the type config of Grid column in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# type

@short: Optional. Defines the type of a column

### Usage

~~~jsx
type?: "string" | "number" | "boolean" | "date";
~~~

@default: "string"

@descr:
### Example

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            id: "quantity",
            type: "number",
            header: [{ text: "Quantity" }],
            footer: [{ text: ({ sum }) => sum }],
            summary: "sum",
            numberMask: { prefix: "$" },
        },
        // columns config
    ],
    data: dataset
});
~~~

The type sets the alignment of the content and defines the type of the editor used in the column:
- *"string" (the default one)* - aligns data to the left side and applies the **"input"/"textarea"** editor
- *"number"* - aligns data to the right side and applies the **"input"** editor
- *"boolean"* - aligns data to the left side and applies the **"checkbox"** editor
- *"date"* - aligns data to the left side and applies the **"datePicker"** editor

