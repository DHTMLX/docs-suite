---
sidebar_label: pdf()
title: JavaScript TreeGrid - pdf Method
description: You can explore the pdf export method of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# pdf()

@short: Exports data from a treegrid to a PDF file

@signature: {'pdf(config?: object): void;'}

@params:
- `config` - (optional) an object with export settings. You can specify the following settings for export to PDF:
    - `url?: string` - (optional) the url of the service that executes export and returns an exported file. This setting is optional, you should use it only if you need to specify the path to your local export service. The default value is `https://export.dhtmlx.com/grid/pdf/8.1.0`
    - `name?: string` - (optional) the name of the exported file
    - `theme?: string` - (optional) the exported theme, "light" by default. For custom or overridden themes, enable the `exportStyles` option
    - `exportStyles?: boolean | string[]` - (optional) defines the styles that will be sent to the export service when exporting TreeGrid. Use *false* to prevent all styles from being sent to the export service
    - `pdf?: object`- (optional) the options object. It can have the following properties:
        - `scale?: number` - (optional) the scale of the grid rendering (between *0.1* and *2*)
        - `landscape?: boolean` - (optional) the portrait or landscape orientation of the output file, *false* by default
        - `width?: string | number` - (optional) the width of the output page. As a value of the property, you can specify a number or a string with a unit
        - `height?: string | number` - (optional) the height of the output page. As a value of the property, you can specify a number or a string with a unit
        - `margin?: object` - (optional) margins of the output page:
            - `left?: string | number` - (optional) left margin, accepts values labeled with units (px,in,cm,mm)
            - `right?: string | number` - (optional) right margin, accepts values labeled with units (px,in,cm,mm)
            - `top?: string | number` - (optional) top margin, accepts values labeled with units (px,in,cm,mm)
            - `bottom?: string | number` - (optional) bottom margin, accepts values labeled with units (px,in,cm,mm)
        - `format?: string | boolean` - (optional) the format of the output file. If set, it takes priority over the width or height options. *"A4"* by default. Setting the format to `false` resets the default format and outputs data on one page.
        Check the list of all available [formats and their sizes](#list-of-formats).
        - `pageRanges?: string` - (optional) paper ranges to print, e.g. 1-5, 8, 11-13;
        - `displayHeaderFooter?: boolean` - (optional) defines whether to display the header and footer, *false* by default
        - `footerTemplate?: string` - (optional) an HTML template for the print footer. It should be valid HTML markup with following classes used to inject printing values into them:
            - `date` - (optional) formatted print date
            - `title` - (optional) document name
            - `pageNumber` - (optional) current page number. It is used by default
            - `totalPages` - (optional) total pages in the document. It is used by default
        - `headerTemplate?: string` - (optional) an HTML template for the print header. It should be valid HTML markup with following classes used to inject printing values into them:
            - `date` - (optional) formatted print date
            - `title` - (optional) document name
            - `pageNumber` - (optional) current page number
            - `totalPages` - (optional) total pages in the document
    - `header?: string` - (optional) an HTML template for the header in the exported file
    - `footer?: string` - (optional) an HTML template for the footer in the exported file

@example:
// default export
treegrid.export.pdf();

// export with config settings
treegrid.export.pdf({
    format: "A4",
    scale: 0.85,
    displayHeaderFooter: true,
    theme: "dark",
});


@descr:

:::info
It is necessary to set sufficient margin for correct display of `headerTemplate`/`footerTemplate`.
:::

:::info
If you use TreeGrid in conjunction with [Pagination](pagination.md), only the displayed page will be exported. 
:::

## List of formats

| Format           | Size               |
| ---------------- | ------------------ |
| "Letter"         | (8.5in x 11in)     |
| "Legal"          | (8.5in x 14in)     |
| "Tabloid"        | (11in x 17in)      |
| "Ledger"         | (17in x 11in)      |
| "A0"             | (33.1in x 46.8in)  |
| "A1"             | (23.4in x 33.1in)  |
| "A2"             | (16.54in x 23.4in) |
| "A3"             | (11.7in x 16.54in) |
| "A4"(by default) | (8.27in x 11.7in)  |
| "A5"             | (5.83in x 8.27in)  |
| "A6"             | (4.13in x 5.83in)  |
| false            | Paper format       |

**Related samples**: [TreeGrid. Export to PDF/PNG](https://snippet.dhtmlx.com/iyqmmcoh)

**Related article:** [Exporting TreeGrid](treegrid/usage.md)

**Related API:** [exportStyles](treegrid/api/treegrid_exportstyles_config.md)

**Change log:** 
- The **header** and **footer** options of the export object were added in v8.4
- Added in v8.1