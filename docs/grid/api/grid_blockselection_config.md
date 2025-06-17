---
sidebar_label: blockSelection
title: JavaScript Grid - blockSelection Config 
description: You can explore the blockSelection config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# blockSelection

:::tip Pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: Optional. Enables/disables block selection management within a grid

### Usage

~~~jsx
blockSelection?:
    | boolean
    | {
        disabled?: boolean;
        mode?: "range" | "manual";
        handle?: boolean | {
            allowAxis?: "x" | "y" | "xy";
            handler?:
                | boolean
                | ((args: {
                    cell: { row: object; column: object };
                    array: { row: object; column: object }[];
                    range: { row: object; column: object }[];
                    dir: "up" | "down" | "right" | "left";
                    index: number;
                    grid: IProGrid;
                }) => void);
        };
        area?: boolean;
    };
~~~

@default: false

@example: 
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "a", header: [{ text: "A" }] },
        { id: "b", header: [{ text: "B" }] },
    ],
    data: [
        { id: "1", a: "A1", b: "B1" },
        { id: "2", a: "A2", b: "B2" },
    ],
    blockSelection: true // enables the BlockSelection module
});

@descr:
### Parameters

The `blockSelection` property can be set in two ways:

- as a *boolean* value it enables or disables the block selection module upon the component initialization
- as an *object* it enables the module and allows setting additional configuration options during the component initialization. The following options are available:

<table>
    <tbody>
        <tr>
            <td><b>disabled</b></td>
            <td>disables the module on startup, `false` by default</td>
        </tr>
        <tr>
            <td><b>mode</b></td>
            <td>the operating mode of the module:<ul><li><i>"range"</i> - managed through the <a href="../../usage_rangeselection/">`RangeSelection` module</a></li><li><i>"manual"</i> - managed through the manual control</li></ul></td>
        </tr>
        <tr>
            <td><b>handle</b></td>
            <td>enables the handle for resizing. Can be set as a *boolean* value or as an *object*, `true` by default. <br>As an *object* can contain the following properties:<ul><li><b>allowAxis</b> - restricts the handle movement: `"x"` (horizontal), `"y"` (vertical), `"xy"` (both directions). `"xy"` by default</li><li><b>handler</b> - a *function* to process the handle actions or *boolean* to enable/disable. As a *function*, the property takes the following parameters:</li><ul><li><b>cell</b> - the object of the current cell. Contains the following properties:</li><ul><li>*row* - the configuration object of a row</li><li>*column* - the configuration object of a column</li></ul></ul><ul><li><b>array</b> - an array of all selected cells. Each cell object contains the following properties: </li><ul><li>*row* - the configuration object of a row</li><li>*column* - the configuration object of a column</li></ul></ul><ul><li><b>range</b> - an array of pre-selected cells. Each cell object contains the following properties: </li><ul><li>*row* - the configuration object of a row</li><li>*column* - the configuration object of a column</li></ul></ul><ul><li><b>dir</b> - the direction of cells selection: "up" | "down" | "right" | "left"</li></ul><ul><li><b>index</b> - the index of the iterated cell</li></ul><ul><li><b>grid</b> - the `dhx.Grid` component object</li></ul></ul></td>
        </tr>
        <tr>
            <td><b>area</b></td>
            <td>enables the display of the selection area, `true` by default</td>
        </tr>
    </tbody>
</table>

:::note
By default, the `blockSelection` property is set to `false`. When `blockSelection` is set to `true` or the module is set to the "range" mode, the [`RangeSelection`](grid/usage_rangeselection.md) module is initialized.
:::

This example demonstrates configuring the module with the handle disabled and the "range" mode enabled:

~~~jsx {10-13}
const grid = new dhx.Grid("grid_container", {
    columns: [
        { id: "a", header: [{ text: "A" }] },
        { id: "b", header: [{ text: "B" }] },
    ],
    data: [
        { id: "1", a: "A1", b: "B1" },
        { id: "2", a: "A2", b: "B2" },
    ],
    blockSelection: {
        mode: "range", // setting the "range" mode
        handle: false // the handle is disabled
    }
});
~~~

This example demonstrates configuring the handle and its behavior:

~~~jsx
/* Define grid columns configuration */
const columns = [
    { id: "productId", header: [{ text: "Product ID" }] }, // Column for the unique product identifier
    { id: "productName", header: [{ text: "Product Name" }] }, // Column for the product name
    { id: "category", header: [{ text: "Category" }] }, // Column for the product category
    { id: "receivedDate", header: [{ text: "Received Date" }], type: "date", dateFormat: "%d.%m.%Y" }, // Date column with the specified format
    { id: "stock", header: [{ text: "Stock" }], type: "number" }, // Numeric column for the stock quantity
    { id: "price", header: [{ text: "Price" }], type: "number", numberMask: { prefix: "$" } } // Numeric column for the price with the dollar prefix
];

/* Initialize DHTMLX Grid with the specified configuration */
const grid = new dhx.Grid("grid_container", {
    columns,
    data,
    autoWidth: true,
    history: true, // Enable history tracking for undo/redo
    blockSelection: {
        handle: {
            allowAxis: "y", // Allow selection along the y-axis (rows)
            handler: blockSelectionHandler, // Custom handler for block selection
        },
    },
});

/* Set initial selection range for the grid */
grid.range.setRange({
    xStart: "productId", // Start selection at the "productId" column
    yEnd: grid.data.getId(0), // End selection at the first row
});

/* Initialize objects to store initial values and column indices */
let initValues = {}; // Store initial values for each column
let columnIndex = {}; // Track index increments for each column

/* The handler function for block selection events */
function blockSelectionHandler({ cell, array, index, grid }) {
    // Reset tracking objects if this is the first cell in the selection
    if (!index) {
        initValues = {};
        columnIndex = {};
    }
    const columnId = cell.column.id;
    // Initialize values for a new column if not already set
    if (!initValues[columnId]) {
        initValues[columnId] = cell.row[columnId]; // Store the initial cell value
        columnIndex[columnId] = 0; // Initialize the index counter
        return { prev: initValues[columnId], current: initValues[columnId] }; // Return unchanged values
    }

    // Increment column index for the current column
    const colIndex = columnIndex[columnId] += 1;
    const initValue = initValues[columnId]; // Get the initial value for a column
    let prev = current = cell.row[columnId]; // Set the default previous and current values

    // Modify the current value based on the column type
    switch (cell.column.type) {
        case "number":
            current = initValue + colIndex * 10; // Increment the number by 10 per row
            break;
        case "date":
            // Parse ISO date and increment the day by colIndex
            const [year, month, day] = initValue.split("-");
            current = new Date(Number(year), Number(month) - 1, Number(day) + colIndex).toISOString();
            break;
        default:
            current = initValue; // Keep the default value for other types
            break;
    }

    // Custom formatting for specific columns
    if (columnId === "productId") {
        // Generate a new product ID with the format P00N
        current = `P00${parseInt(initValue.replace(/\D/g, "")) + colIndex}`;
    }
    if (columnId === "category") {
        // Append the index in parentheses to the category
        current = `${current} (${colIndex})`;
    }

    // Create the history object for undo/redo
    const history = { prev, current };
    // Update grid data with the new value
    grid.data.update(cell.row.id, { [columnId]: current },
        index < array.length - 1 // Continue updating if it isn't the last cell in selection
    );
    return history; // Return the history for tracking
}
~~~

**Related sample:** [Grid. BlockSelection. Work with the handle configuration](https://snippet.dhtmlx.com/8kttktiy)

**Related article:** [Managing block selection in Grid](grid/configuration.md/#managing-block-selection-in-grid)

@changelog: added in v9.2

