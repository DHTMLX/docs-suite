---
sidebar_label: pdf()
title: JavaScript Chart - pdf Method
description: You can explore the pdf method of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# pdf()

@short: Exports a chart to a PDF file

@signature: {'pdf(config?: IPDFConfig): Promise<void>;'}

@returns:
A promise of data export

@params:
- `config` - (optional) an object with export settings. You can specify the following settings for export to PDF:
    - `url?: string` -  (optional) the url of the service that executes export and returns an exported file. This setting is optional, you should use it only if you need to specify the path to your local export service. The default value is `https://export.dhtmlx.com/chart/pdf/9.3.0`
    - `name?: string` - (optional) the name of the exported file
    - `theme?: string` - (optional) the exported theme, "light" by default. For custom or overridden themes, enable the `exportStyles` option
    - `exportStyles?: boolean | string[]` - (optional) defines the styles that will be sent to the export service when exporting Chart. Use *false* to prevent all styles from being sent to the export service
    - `pdf?: object` - (optional) the object of pdf options. Here you can specify the following properties:
        - `scale?: number` - (optional) the scale of the grid rendering (between *0.1* and *2*)
        - `landscape?: boolean` - (optional) defines a landscape orientation, ***false*** by default. It works only if the `format` option is specified
        - `width?: string | number` - (optional) the width of the output page. As a value of the property, you can specify a number or a string with a unit
        - `height?: string | number` - (optional) the height of the output page. As a value of the property, you can specify a number or a string with a unit
        - `margin?: object` - (optional) the object with paper margins, ***none*** by default
            - `left?: string | number` - (optional) defines a left margin, accepts values labeled with units (px,in,cm,mm)
            - `right?: string | number` - (optional) defines a right margin, accepts values labeled with units (px,in,cm,mm)
            - `top?: string | number` - (optional) defines a top margin, accepts values labeled with units (px,in,cm,mm)
            - `bottom?: string | number` - (optional) defines a bottom margin, accepts values labeled with units (px,in,cm,mm)
        - `format?: string` - (optional) defines a paper format. If set, it takes priority over **width** or **height** options. Not specified by default. Check the list of all available [formats and their sizes](#list-of-formats).
        - `pageRanges?: string` - (optional) paper ranges to print, e.g. 1-5, 8, 11-13. It works only if the `format` option is specified
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
chart.export.pdf()
    .then(() => console.log("success"))
    .catch(() => console.log("failure"))
    .finally(() => console.log("finished"));

// export with config settings
chart.export.pdf({
    url: "https://export.dhtmlx.com/chart/pdf/9.3.0",
    name:"result.pdf"
})
    .then(() => console.log("success"))
    .catch(() => console.log("failure"))
    .finally(() => console.log("finished"));

@descr:

:::info
It is necessary to set sufficient margin for correct display of `headerTemplate`/`footerTemplate`.
:::

## List of formats

| Format    | Size               |
| --------- | ------------------ |
| "Letter"  | (8.5in x 11in)     |
| "Legal"   | (8.5in x 14in)     |
| "Tabloid" | (11in x 17in)      |
| "Ledger"  | (17in x 11in)      |
| "A0"      | (33.1in x 46.8in)  |
| "A1"      | (23.4in x 33.1in)  |
| "A2"      | (16.54in x 23.4in) |
| "A3"      | (11.7in x 16.54in) |
| "A4"      | (8.27in x 11.7in)  |
| "A5"      | (5.83in x 8.27in)  |
| "A6"      | (4.13in x 5.83in)  |

**Related samples**: [Chart. Export. Export to PDF/PNG](https://snippet.dhtmlx.com/4rybsjjq)

**Related API:** [exportStyles](chart/api/chart_exportstyles_config.md)

**Change log:** 

- The method returns a promise of data export since v9.3
- The **header** and **footer** options of the export object were added in v8.4
- The **theme**, **exportStyles** options of the export object were added in v8.1
- The **pageRanges**, **displayHeaderFooter**, **footerTemplate**, **headerTemplate** options of the pdf object were added in v8.1
- Added in v8.0

