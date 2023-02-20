---
sidebar_label: export.pdf()
title: JavaScript Chart - pdf Method
description: You can explore the pdf method of Chart in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite.
---

# export.pdf()

### Description

@short: Exports a chart to a PDF file

### Usage

~~~js
export.pdf(config?: object): void;
~~~

### Parameters

- `config` - (optional) an object with export settings. You can specify the following settings for export to PDF:
    - `url: string` -  the url of the service that executes export and returns an exported file. This setting is optional, you should use it only if you need to specify the path to your local export service.
    - `name: string` - the name of the exported file
    - `header: string` - specifies the header that will be added to the resulted PDF file. You can use any HTML here
    - `footer: string` - specifies the footer that will be added to the resulted PDF file. You can use any HTML here
    - `pdf: object` - the options object. It can have the following properties:
	    - `scale: number` - the scale of the webpage rendering, **1** by default
	    - `displayHeaderFooter: boolean` - displays header and footer, **false** by default
	    - `headerTemplate: string` - an HTML template for the print header. It should be valid HTML markup with following classes used to inject printing values into them:
		    - `date` - formatted print date
		    - `title` - document title
		    - `url` - document location
		    - `pageNumber` - current page number
		    - `totalPages` - total pages in the document
	    - `footerTemplate: string` - an HTML template for the print footer. Should use the same format as the headerTemplate
	    - `printBackground: boolean` - print background graphics, **false** by default
	    - `landscape: boolean` - paper orientation, **false** by default
	    - `pageRanges: string` - paper ranges to print, e.g., '1-5, 8, 11-13'. By default it is set to an empty string, which means print all pages
	    - `format: string` - paper format. If set, takes priority over width or height options. **'Letter'** by default
	    - `width: string` - paper width, accepts values labeled with units
	    - `height: string` - paper height, accepts values labeled with units
	    - `margin: object` - paper margins, none by default
		    - `top: string` - top margin, accepts values labeled with units
		    - `right: string` - right margin, accepts values labeled with units
		    - `bottom: string` - bottom margin, accepts values labeled with units
		    - `left: string` - left margin, accepts values labeled with units

### Example

~~~js {2,5-8}
// default export
chart.export.pdf();

// export with config settings
chart.export.pdf({
	url: "https://export.dhtmlx.com/chart/8.0.0/pdf",
	name:"result.pdf"
});
~~~

**Related samples**: ToDo

**Change log:** The method was added in v8.0