---
sidebar_label: exportConfig
title: JavaScript Grid - exportConfig Config 
description: You can explore the exportConfig config of Grid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# exportConfig

:::tip pro version only 
This functionality requires PRO version of the DHTMLX Grid (or DHTMLX Suite) package.
:::

@short: allows providing an advanced configuring of parameters for Grid export into CSV, XLSX, PDF, and PNG formats

#### Usage

~~~jsx
exportConfig?: (config: IGridConfig, exportType: "pdf" | "png" | "csv" | "xlsx") => {
    // overriding basic Grid settings
    columns?: (column: ICol, index: number, columns: ICol[], api: IGrid) => ICol | null;
    data?: (row: IRow, index: number, data: IRow[], api: IGrid) => IRow | null;
    spans?: (span: ISpan, index: number, spans: ISpan[], api: IGrid) => ISpan | null;
    
    // format-specific configurations
    typeConfig?: IXlsxExportConfig | ICsvExportConfig | IPDFConfig | IPNGConfig;
    
    // any other IGridConfig properties (e.g., headerRowHeight)
    [key: string]: any;
}
~~~

#### Parameters

The `exportConfig` property is a callback function that takes the following parameters:

- `config` -  (*IGridConfig*) the current configuration of a Grid instance
- `exportType` - (*string*) the type of export being performed: "pdf", "png", "csv", or "xlsx"

and returns a configuration object with export parameters. The returned configuration object may contain the following properties:

- `columns` - (*function*) a function for column transformation; returning `null` excludes the column from the export
- `data` - (*function*) a function for filtering or modifying row data; returning `null` excludes the row from the final file
- `spans` - (*function*) a function to handle cell merging (spans); returning `null` ignores the span in the export
- `typeConfig` - (*object*) an object containing unique settings for the specific format (filenames, delimiters, themes)
- **Grid properties** - any Grid property that should be overridden (e.g., `headerRowHeight`) set as a `key:value` pair, where the *key* is the property name and the *value* is the property value to be applied only to the exported state

#### Examples

- Example 1: Conditional filtering and formatting 

In this example, sensitive data is excluded for all formats, while for PDF/PNG the headers are converted to the uppercase and HTML templates are disabled:

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    data:dataset,
    exportConfig: (config, exportType) => ({
        // Column transformation
        columns: (column) => {
            // Completely exclude the "experience_level" column from any export
            if (column.id === "experience_level") return null;

            // For spreadsheet formats (Excel/CSV), keep columns as is
            if (exportType === "xlsx" || exportType === "csv") {
                return column;
            }

            // For PDF/PNG, remove HTML templates and uppercase the headers
            column.template = null;
            column.header[0].text = column.header[0].text.toUpperCase();

            return column;
        },

        // Row data filtering
        data: (row) => {
            // Exclude young animals (age <= 3) from the export
            if (row.animal_age <= 3) return null;

            // Business logic example: do not export dogs to CSV and cats to Excel
            if (exportType === "csv" && row.animal_type === "Dog") return null;
            if (exportType === "xlsx" && row.animal_type === "Cat") return null;

            return row;
        },

        // Adjust the header height specifically for the Excel file
        headerRowHeight: exportType === "xlsx" ? 60 : config.headerRowHeight,
    }),
});
~~~

- Example 2: Format-specific configuration with `typeConfig`

The following example shows the use of the `typeConfig` property to define filenames, CSV delimiters, and XLSX date masks:

~~~jsx
const exportConfig = {
    csv: {
        name: "cat_report",      // Resulting CSV filename
        rowDelimiter: "\t",      // Use Tab as row delimiter
        columnDelimiter: ";"     // Use Semicolon as column delimiter
    },
    xlsx: {
        name: "dog_report",      // Resulting Excel filename
        tableName: "Main Report", // Sheet name in the Excel workbook
        dateFormatMask: "dd.mm.yyyy" // Excel-specific date format mask
    },
    pdf: {
        theme: "dark",           // Apply the dark theme to the PDF document
        scale: 0.8,              // Content scaling (80%)
        format: "A4"             // Page format
    }
};

const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    data:dataset,
    exportConfig: (config, exportType) => ({
        // Pass settings from our object based on the export type
        typeConfig: exportConfig[exportType]
    })
});
~~~

- Example 3: Filtering spans

If your Grid uses cell merging, you can manage how spans are handled during export. Check the example below:

~~~jsx
const grid = new dhx.Grid("grid_container", {
    columns: [
        // columns config
    ],
    data:dataset,
    spans: [
        // span configuration objects
    ],
    exportConfig: (config, exportType) => ({
        spans: (span) => {
            // Exclude cells' merges when exporting to CSV,
            // as the CSV format does not support merged cells
            if (exportType === "csv") return null;
            return span;
        }
    })
});
~~~

#### Details

The `exportConfig` property extends the possibilities of the standard export and allows you to dynamically modify the structure and content of the resulting document at the moment the export function is called. With this property, you can:

- **filter data**: exclude specific rows, columns, or spans by returning `null` in the corresponding callback methods
- **transform content**: modify headers, format values, or strip HTML templates to ensure data is displayed correctly in spreadsheet editors
- **define format-specific settings**: set delimiters for CSV, date masks for Excel, or visual themes for PDF
- **adjust styling**: override Grid properties (such as row height) specifically for the exported file 

**Related sample**: [Grid. Custom export logic for PDF, PNG, XLSX, CSV](https://snippet.dhtmlx.com/k4wberkh)

**Related article**: [Extended export configuration settings](/grid/usage/#extended-export-configuration-settings)

@changelog: added in v9.3