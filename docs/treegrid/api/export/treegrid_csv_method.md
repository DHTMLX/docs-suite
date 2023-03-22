---
sidebar_label: csv()
title: JavaScript Grid - csv Method
description: You can explore the csv method of TreeGrid in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# csv()

### Description

@short: Exports data from a treegrid into a CSV file

@signature: {'csv(config?: object): string;'}

@params:
- `config` - (optional) an object with export settings. You can specify the following settings for export to CSV:
	- `asFile?: boolean` - (optional) defines whether TreeGrid should be exported to a file, *true* by default. To export TreeGrid only as a CSV string, you need to set *asFile:false*
	- `name?: string` - (optional) the name of the exported CSV file (if asFile is not set to *false*)
	- `flat?: boolean` - (boolean) defines whether TreeGrid data should be exported as a flat structure; *false* by default
	- `rowDelimiter?: string` - (optional) a newline ("\n") by default. A separator between rows, can be a tab - "\t", or any other value
	- `columnDelimiter?: string` - (optional) a comma (",") by default. A separator between columns, can be a semicolon - ";", or any other value

@returns:
A CSV string with TreeGrid data

@example:
// default export
treegrid.export.csv();

// export with config settings
treegrid.export.csv({
    name:"treegrid_data", // data will be exported to a CSV file named "treegrid_data"
    rowDelimiter: "\t", // the tab delimiter will be used to separate rows
    columnDelimiter: ";" // the semicolon delimiter will be used to separate columns
});


@descr:

**Related samples**: [TreeGrid. Export to .xlsx and .csv](https://snippet.dhtmlx.com/zyfois4q)