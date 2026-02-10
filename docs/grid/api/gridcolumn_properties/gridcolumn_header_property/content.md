---
sidebar_label: content
title: JavaScript Grid column header - content Config 
description: You can explore the content config of Grid column header in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# content

@short: Optional. Defines the content of the column header, including the filter type

#### Usage

~~~jsx
content?: "inputFilter" | "selectFilter" | "comboFilter" | "dateFilter";
~~~

@params:
The `content` property allows setting one of the predefined filters:

- `"inputFilter"` — a text input field
- `"selectFilter"` — a dropdown list
- `"comboFilter"` — a combobox with search
- `"dateFilter"` (**PRO version**) — a filter with a calendar for selecting a date or a date range

@example:
const grid = new dhx.Grid("grid_container", {
    columns: [
        {
            id: "productName",
            minWidth: 200,
            header: [
                { text: "Product Name" },
                { 
                    content: "inputFilter", 
                    filterConfig: { placeholder: "Search by name" } 
                }
            ]
        },
        {
            id: "category",
            header: [
                { text: "Category" },
                {
                    content: "comboFilter",
                    filterConfig: { placeholder: "Select category" }
                }
            ]
        },
        {
            id: "receivedDate",
            minWidth: 200,
            type: "date",
            dateFormat: "%d.%m.%Y",
            header: [
                { text: "Received Date" },
                {
                    content: "dateFilter",
                    filterConfig: {
                        placeholder: "Select date",
                        range: true,
                    }
                }
            ],
        },
        {
            id: "stock",
            type: "number",
            header: [
                { text: "Stock" }, { content: "selectFilter" }
            ]
        },
        // more columns configuration objects
    ],
    // more options
});

@descr:

**Related article**: [Header/footer filters](/grid/configuration/#headerfooter-filters)

**Related sample**: [Grid. Header filters (dateFilter, comboFilter, inputFilter, selectFilter)](https://snippet.dhtmlx.com/4qz8ng3c)