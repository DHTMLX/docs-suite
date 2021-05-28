---
sidebar_label: loadError
title: JavaScript TreeCollection - loadError Event 
hide_title: true
description: You can explore the loadError event of TreeCollection in the documentation of the DHTMLX JavaScript UI library. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Suite 7.
---
 
# loadError

@short: fires when loading of data fails

@signature: {'loadError: (response: any) => boolean | void;'}

@params:
`response: string|object` - info about the error

@example:
data.events.on("LoadError", function(error){
	// your code here
});

@descr:

The **error** parameter can be either a string with the text of an error, or an object with two properties:

- status - the code of an error
- text - the text of an error
